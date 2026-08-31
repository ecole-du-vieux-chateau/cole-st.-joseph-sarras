import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SCHOOL } from "@/lib/site";

export const Route = createFileRoute("/infos-pratiques")({
  head: () => ({
    meta: [
      { title: "Informations pratiques & contact — École du Vieux Château, Sarras" },
      {
        name: "description",
        content:
          "Adresse, téléphone, horaires et plan d'accès de l'École du Vieux Château : 5 Place du Peycher, 07370 Sarras (Ardèche). Tél. 04 75 23 15 87.",
      },
      { property: "og:title", content: "Informations pratiques — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content: "Coordonnées, horaires et plan d'accès de l'école à Sarras (Ardèche).",
      },
    ],
  }),
  component: InfosPratiquesPage,
});

function InfosPratiquesPage() {
  return (
    <>
      <PageHero
        title="Informations pratiques"
        subtitle="Tout ce qu'il faut savoir pour nous trouver, nous joindre et organiser votre venue."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Coordonnées */}
          <div className="space-y-5">
            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <MapPin className="size-5 text-primary" aria-hidden />
                Adresse
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {SCHOOL.name}
                <br />
                {SCHOOL.address}
                <br />
                {SCHOOL.postcode} {SCHOOL.city}
              </p>
            </div>

            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <Phone className="size-5 text-primary" aria-hidden />
                Nous joindre
              </h2>
              <ul className="mt-3 space-y-3">
                <li>
                  <a
                    href={SCHOOL.phoneHref}
                    className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
                  >
                    <Phone className="size-4" aria-hidden />
                    {SCHOOL.phone}
                    <span className="ml-auto text-xs font-medium text-muted-foreground">Fixe</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SCHOOL.mobileHref}
                    className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
                  >
                    <Smartphone className="size-4" aria-hidden />
                    {SCHOOL.mobile}
                    <span className="ml-auto text-xs font-medium text-muted-foreground">Portable</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SCHOOL.emailHref}
                    className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden />
                    <span className="break-all">{SCHOOL.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <Clock className="size-5 text-primary" aria-hidden />
                Horaires
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Garderie du matin</span>
                  <span className="font-semibold text-foreground">7h30 – 8h20</span>
                </li>
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Journée de classe</span>
                  <span className="font-semibold text-foreground">8h30 – 16h00</span>
                </li>
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Garderie du soir</span>
                  <span className="font-semibold text-foreground">16h00 – 18h30</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plan d'accès */}
          <div className="overflow-hidden rounded-3xl bg-card shadow-sm">
            <iframe
              title="Plan d'accès — École du Vieux Château, 5 Place du Peycher, 07370 Sarras"
              src="https://www.google.com/maps?q=5+Place+du+Peycher,+07370+Sarras,+France&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
