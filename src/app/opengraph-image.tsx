import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "flyFromMeetings draft travel planning studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3eee4",
        color: "#1a1714",
        padding: "72px",
      }}
    >
      <div
        style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#7d2d21" }}
      >
        DRAFT SITE
      </div>
      <div style={{ display: "flex", fontSize: 84, lineHeight: 1 }}>
        flyFromMeetings
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#5c564e" }}>
        Travel planning studio. Details not confirmed.
      </div>
    </div>,
    { ...size },
  );
}
