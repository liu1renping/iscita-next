import { COMPANY_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-teal-50 py-2">
      <div className="max-w-7xl mx-auto px-4 text-center text-base">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
