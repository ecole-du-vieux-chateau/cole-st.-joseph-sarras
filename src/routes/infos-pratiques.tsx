import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, FileText, Globe, Mail, MapPin, Phone, Smartphone } from "lucide-react";
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
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Coordonnées et horaires */}
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
                  <span>Matinée de classe</span>
                  <span className="font-semibold text-foreground">8h30 – 11h45</span>
                </li>
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Après-midi de classe</span>
                  <span className="font-semibold text-foreground">13h30 – 16h30</span>
                </li>
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Garderie du soir</span>
                  <span className="font-semibold text-foreground">16h30 – 18h30</span>
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                L'entrée des élèves se situe rue du Peycher. Le portail est ouvert de
                8h20 à 8h30 et de 13h20 à 13h30. Pour le périscolaire, merci de sonner à
                l'interphone.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Bon à savoir :</span> la garderie
                fonctionne sans inscription — déposez votre enfant le matin dès 7h30 et
                récupérez-le le soir jusqu'à 18h30.
              </p>
            </div>
          </div>

          {/* Plan d'accès, réseaux et portes ouvertes */}
          <div className="flex flex-col gap-5">
            <div className="flex-1 overflow-hidden rounded-3xl bg-card shadow-sm">
              <iframe
                title="Plan d'accès — École du Vieux Château, 5 Place du Peycher, 07370 Sarras"
                src="https://www.google.com/maps?q=5+Place+du+Peycher,+07370+Sarras,+France&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[20rem] w-full border-0"
                allowFullScreen
              />
            </div>

            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <Globe className="size-5 text-primary" aria-hidden />
                Suivez-nous
              </h2>
              <a
                href="https://www.facebook.com/EcolechateauSarras/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.098 4.388 23.028 10.125 23.929V15.53H7.078v-3.457h3.047V9.653c0-3.017 1.792-4.683 4.534-4.683 1.314 0 2.688.236 2.688.236v2.964h-1.514c-1.49 0-1.955.93-1.955 1.882v2.258h3.328l-.532 3.457h-2.796v8.398C19.612 23.028 24 18.098 24 12.073z" />
                </svg>
                École du Vieux Château sur Facebook
              </a>
            </div>

            <div className="rounded-3xl bg-card p-7 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-semibold">
                <Calendar className="size-5 text-primary" aria-hidden />
                Portes ouvertes
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Samedi 7 novembre 2026</span>
                </li>
                <li className="flex justify-between rounded-xl bg-muted/60 px-4 py-2.5">
                  <span>Samedi 20 mars 2027</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documents utiles */}
        <div className="mt-10 rounded-3xl bg-card p-7 shadow-sm">
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <FileText className="size-5 text-primary" aria-hidden />
            Documents utiles
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Retrouvez ici les documents de référence de l'école. Les liens seront
            prochainement mis à jour avec les fichiers officiels.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <a
              href="https://drive.google.com/file/d/1FAKE_GAZETTE_ID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-secondary/60 p-5 transition-colors hover:bg-secondary"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="size-6" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Télécharger la Gazette</p>
                <p className="text-sm text-muted-foreground">Journal de l'école</p>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1FAKE_REGLEMENT_ID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-secondary/60 p-5 transition-colors hover:bg-secondary"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="size-6" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Télécharger le règlement intérieur</p>
                <p className="text-sm text-muted-foreground">Règles de vie à l'école</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
