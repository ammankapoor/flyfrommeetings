import type { Metadata } from "next";
import { PolicyDocument } from "@/components/site/policy-document";
import { termsPolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: termsPolicy.title,
  description: termsPolicy.description,
};

export default function TermsPage() {
  return <PolicyDocument policy={termsPolicy} />;
}
