"use client";

import { useEffect, useRef, useState } from "react";

import { publicPath } from "@/lib/site-url";

const CLIPS = [
  "/media/hero/1140.mp4",
  "/media/hero/1141.mp4",
  "/media/hero/1142.mp4",
  "/media/hero/1143.mp4",
  "/media/hero/1144.mp4",
  "/media/hero/1147.mp4",
  "/media/hero/1148.mp4",
].map((file) => publicPath(file));

type Deck = {
  showing: string[];
  queue: string[];
};

function shuffle(items: readonly string[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function columnCount(width: number) {
  if (width >= 1680) return 5;
  if (width >= 1100) return 4;
  if (width >= 800) return 3;
  if (width >= 560) return 2;
  return 1;
}

function deal(width: number): Deck {
  const order = shuffle(CLIPS);
  const count = Math.min(columnCount(width), order.length);
  return {
    showing: order.slice(0, count),
    queue: order.slice(count),
  };
}

function fitWidth(deck: Deck, width: number): Deck {
  const count = Math.min(columnCount(width), CLIPS.length);
  if (deck.showing.length === count) return deck;

  if (deck.showing.length > count) {
    return {
      showing: deck.showing.slice(0, count),
      queue: [...deck.showing.slice(count), ...deck.queue],
    };
  }

  const showing = [...deck.showing];
  const queue = [...deck.queue];
  while (showing.length < count && queue.length > 0) {
    const next = queue.shift();
    if (next) showing.push(next);
  }
  return { showing, queue };
}

function advance(deck: Deck, index: number): Deck {
  if (deck.queue.length === 0) return deck;
  const queue = [...deck.queue];
  const next = queue.shift();
  if (!next) return deck;
  queue.push(deck.showing[index]);
  const showing = [...deck.showing];
  showing[index] = next;
  return { showing, queue };
}

function hasSource(node: HTMLVideoElement, file: string) {
  return node.currentSrc.endsWith(file) || node.src.endsWith(file);
}

function FilmSlot({
  src,
  upcoming,
  reducedMotion,
  onEnded,
}: {
  src: string;
  upcoming: string;
  reducedMotion: boolean;
  onEnded: () => void;
}) {
  const first = useRef<HTMLVideoElement>(null);
  const second = useRef<HTMLVideoElement>(null);
  const shown = useRef<0 | 1>(0);
  const displayed = useRef(src);
  const [layer, setLayer] = useState<0 | 1>(0);

  useEffect(() => {
    const nodes = [first.current, second.current];
    const visible = nodes[shown.current];
    const hidden = nodes[1 - shown.current];
    if (!visible || !hidden) return;

    const prepare = (node: HTMLVideoElement, file: string) => {
      node.muted = true;
      node.playsInline = true;
      if (!hasSource(node, file)) {
        node.src = file;
        node.load();
      }
    };

    const play = (node: HTMLVideoElement) => {
      if (reducedMotion) {
        node.pause();
        return;
      }
      const start = () => node.play().catch(() => {});
      if (node.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) start();
      else node.addEventListener("canplay", start, { once: true });
    };

    if (displayed.current !== src && hasSource(hidden, src)) {
      shown.current = shown.current === 0 ? 1 : 0;
      setLayer(shown.current);
      displayed.current = src;
      const nowVisible = nodes[shown.current];
      const nowHidden = nodes[1 - shown.current];
      if (nowVisible) play(nowVisible);
      if (nowHidden) prepare(nowHidden, upcoming);
      return;
    }

    prepare(visible, src);
    prepare(hidden, upcoming);
    displayed.current = src;
    play(visible);
  }, [reducedMotion, src, upcoming]);

  const frame = "absolute inset-0 h-full w-full object-cover";

  return (
    <div className="relative h-full min-w-0 overflow-hidden bg-ink">
      <video
        ref={first}
        className={`${frame} ${layer === 0 ? "z-10" : "z-0"}`}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => {
          if (shown.current === 0) onEnded();
        }}
      />
      <video
        ref={second}
        className={`${frame} ${layer === 1 ? "z-10" : "z-0"}`}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => {
          if (shown.current === 1) onEnded();
        }}
      />
    </div>
  );
}

export function HeroReel({
  children,
  cue,
}: {
  children?: React.ReactNode;
  cue?: React.ReactNode;
}) {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const measure = () => {
      setHeight(window.innerHeight);
      setReducedMotion(motion.matches);
      setDeck((current) =>
        current ? fitWidth(current, window.innerWidth) : deal(window.innerWidth),
      );
    };

    measure();
    window.addEventListener("resize", measure);
    motion.addEventListener("change", measure);
    return () => {
      window.removeEventListener("resize", measure);
      motion.removeEventListener("change", measure);
    };
  }, []);

  const upcoming = deck?.queue[0] ?? deck?.showing[0] ?? CLIPS[0];

  return (
    <div className="relative w-full" style={{ height: height ?? "100svh" }}>
      <section
        aria-label="Travel films"
        className="grid h-full w-full overflow-hidden bg-ink"
        style={{
          gridTemplateColumns: `repeat(${deck?.showing.length ?? columnCount(1440)}, minmax(0, 1fr))`,
        }}
      >
        {deck
          ? deck.showing.map((src, index) => (
              <FilmSlot
                key={index}
                src={src}
                upcoming={upcoming}
                reducedMotion={reducedMotion}
                onEnded={() =>
                  setDeck((current) => (current ? advance(current, index) : current))
                }
              />
            ))
          : null}
      </section>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-black/45"
      />
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
        <div className="w-full text-paper">{children}</div>
      </div>
      {cue ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20 flex justify-center px-4">
          {cue}
        </div>
      ) : null}
    </div>
  );
}
