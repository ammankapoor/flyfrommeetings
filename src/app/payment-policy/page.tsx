import type { Metadata } from "next";
import { PolicyDocument } from "@/components/site/policy-document";
import { paymentPolicy } from "@/content/policies";

export const metadata: Metadata = {
  title: "Payment Policy",
  description: paymentPolicy.description,
};

export default function PaymentPolicyPage() {
  return <PolicyDocument policy={paymentPolicy} />;
}
