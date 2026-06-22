import { Link } from "@tanstack/react-router";
import { SiteLogo } from "@/components/site-logo";

const groups = [
  {
    title: "Platform",
    links: ["White-label branding", "Identity verification", "Background checks", "I-9 management", "Drug testing", "Fingerprinting"],
  },
  {
    title: "Solutions",
    links: ["Staffing agencies", "Security companies", "Healthcare", "Construction", "Transportation", "Property management"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Partners", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Compliance", "Security", "Status", "Help center"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex">
              <SiteLogo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The Shopify for workforce compliance. Launch your own branded background screening and
              employee onboarding business in your local market.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-foreground">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trust Point 360™. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
