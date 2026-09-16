import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import logoAsset from "@/assets/logo-ecole-du-vieux-chateau-transparent.png";
import { NAV_LINKS, SCHOOL } from "@/lib/site";


export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logoAsset}
            alt="École privée du Vieux Château"
            className="h-48 w-auto md:h-56"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            École catholique privée sous contrat avec l'État, de la Toute Petite Section au CM2,
            au cœur du village de Sarras en Ardèche.
          </p>
        </div>


        <nav aria-label="Liens du site">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Le site</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-foreground/80 transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                {SCHOOL.address}
                <br />
                {SCHOOL.postcode} {SCHOOL.city}
              </span>
            </li>
            <li>
              <a href={SCHOOL.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                {SCHOOL.phone}
              </a>
            </li>
            <li>
              <a href={SCHOOL.mobileHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Smartphone className="size-4 shrink-0 text-primary" aria-hidden />
                {SCHOOL.mobile}
              </a>
            </li>
            <li className="border-t border-border/60 pt-3">
              <a
                href={SCHOOL.emailHref}
                className="flex items-center gap-2 break-all transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                {SCHOOL.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {SCHOOL.name} — Sarras. Tous droits réservés.</p>
          <p className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-foreground">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
