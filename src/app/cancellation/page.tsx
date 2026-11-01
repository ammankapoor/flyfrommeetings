import type { Metadata } from "next";
import { PolicyDocument } from "@/components/site/policy-document";
import { cancellationPolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: cancellationPolicy.title,
  description: cancellationPolicy.description,
};

export default function CancellationPage() {
  return <PolicyDocument policy={cancellationPolicy} />;
}
