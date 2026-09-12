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
            className="h-24 w-auto md:h-28"
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
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Courriels</span>
              <ul className="space-y-2">
                {[
                  { label: "Général", mail: "contact@ecoleprivedesarras.fr" },
                  { label: "Cantine", mail: "cantine@ecoleprivedesarras.fr" },
                  { label: "Maternelle", mail: "maternelle@ecoleprivedesarras.fr" },
                  { label: "Cycle 2", mail: "cycle2@ecoleprivedesarras.fr" },
                  { label: "Cycle 3", mail: "cycle3@ecoleprivedesarras.fr" },
                  { label: "OGEC admin.", mail: "ogec.adm@ecoleprivedesarras.fr" },
                  { label: "OGEC compta.", mail: "ogec.compta@ecoleprivedesarras.fr" },
                  { label: "OGEC secrétariat", mail: "ogec.secretariat@ecoleprivedesarras.fr" },
                  { label: "APEL", mail: "apel@ecoleprivedesarras.fr" },
                  { label: "APEL compta.", mail: "apel.compta@ecoleprivedesarras.fr" },
                ].map(({ label, mail }) => (
                  <li key={mail}>
                    <a
                      href={`mailto:${mail}`}
                      className="flex items-center gap-2 break-all transition-colors hover:text-foreground"
                      title={label}
                    >
                      <Mail className="size-3.5 shrink-0 text-primary" aria-hidden />
                      <span className="sr-only">{label} :</span>
                      {mail}
                    </a>
                  </li>
                ))}
              </ul>
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
