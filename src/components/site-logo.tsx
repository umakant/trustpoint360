import logoDark from "@/assets/trustpoint360-logo.png";
import logoLight from "@/assets/trustpoint360-logo-light.png";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "h-10 w-auto" }: SiteLogoProps) {
  return (
    <>
      <img src={logoLight} alt="Trust Point 360" className={`${className} dark:hidden`} />
      <img src={logoDark} alt="Trust Point 360" className={`hidden ${className} dark:block`} />
    </>
  );
}
