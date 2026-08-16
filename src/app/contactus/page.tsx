import type { Metadata } from "next";
import ContactUs from "@/screens/ContactUs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anujesh Yadav for frontend engineering roles and projects.",
};

export default function Page() {
  return <ContactUs />;
}
