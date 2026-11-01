import type { Metadata } from "next";
import { PolicyDocument } from "@/components/site/policy-document";
import { privacyPolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
};

export default function PrivacyPage() {
  return <PolicyDocument policy={privacyPolicy} />;
}
