import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo-ecole-du-vieux-chateau-transparent.png";
import { NAV_LINKS, SCHOOL } from "@/lib/site";


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoAsset}
            alt="École privée du Vieux Château"
            className="h-20 w-auto"
          />
        </Link>


        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="inline-flex items-center justify-center rounded-full px-3 py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-secondary text-secondary-foreground hover:bg-secondary" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SCHOOL.mobileHref}
            className="ml-2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" aria-hidden />
            {SCHOOL.mobile}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-accent lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-4 pb-4 pt-2 lg:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-base font-medium text-muted-foreground hover:bg-accent"
                  activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SCHOOL.mobileHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden />
                {SCHOOL.mobile}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
