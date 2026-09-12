import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, FileText, Mail, Phone, School } from "lucide-react";
import maternelleAsset from "@/assets/activite-parachute-cour.jpg.asset.json";

const maternelleImg = maternelleAsset.url;
import { PageHero } from "@/components/page-hero";
import { SCHOOL } from "@/lib/site";

export const Route = createFileRoute("/inscriptions")({
  head: () => ({
    meta: [
      { title: "Inscriptions — École du Vieux Château, Sarras (Ardèche)" },
      {
        name: "description",
        content:
          "Inscrire votre enfant à l'École du Vieux Château de Sarras : visite de l'école, dossier d'inscription et rentrée. Contactez-nous au 04 75 23 15 87.",
      },
      { property: "og:title", content: "Inscriptions — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "De la visite à la rentrée : les étapes simples pour inscrire votre enfant, de la TPS au CM2.",
      },
    ],
  }),
  component: InscriptionsPage,
});

const STEPS = [
  {
    icon: CalendarCheck,
    title: "1. Prendre rendez-vous",
    text: "Contactez-nous par téléphone ou par e-mail pour convenir d'une visite de l'école. C'est l'occasion de rencontrer l'équipe, de découvrir les locaux et de poser toutes vos questions.",
  },
  {
    icon: School,
    title: "2. Visiter l'école",
    text: "Lors de la visite, nous échangeons sur votre enfant, ses besoins et votre projet de famille. Votre enfant est bien sûr le bienvenu pour découvrir sa future classe.",
  },
  {
    icon: FileText,
    title: "3. Constituer le dossier",
    text: "Si l'école vous convient, nous vous remettons le dossier d'inscription. L'équipe vous accompagne pas à pas dans les démarches, en toute simplicité.",
  },
  {
    icon: Mail,
    title: "4. Confirmer la rentrée",
    text: "Une fois le dossier validé, la place de votre enfant est confirmée. Nous organisons ensemble sa rentrée pour qu'elle se passe en douceur.",
  },
];

function InscriptionsPage() {
  return (
    <>
      <PageHero
        title="Inscrire votre enfant"
        subtitle="Un parcours simple et accompagné, de la première visite à la rentrée. Les inscriptions sont ouvertes de la Toute Petite Section au CM2, tout au long de l'année selon les places disponibles. L'école accueille les enfants dès 2 ans et demi."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <article key={step.title} className="rounded-3xl bg-card p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl bg-card p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Une entrée à l'école en douceur, dès 2 ans et demi
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Chaque enfant est unique : nous accompagnons son arrivée à son rythme. Pour les
              plus petits, l'adaptation se fait progressivement, avec la possibilité de
              commencer par des demi-journées avant de passer à la journée complète. La
              directrice et l'équipe restent en lien étroit avec les familles pour que votre
              enfant prenne ses repères en confiance et dans le bien-être.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Accueil possible dès 2 ans et demi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Adaptation personnalisée et progressive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Possibilité de demi-journées au départ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">Échange régulier avec les parents</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight">Tarifs et contribution</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              L’école est conventionnée avec l’État et accessible à toutes les familles. Le
              financement repose sur la contribution des familles et le soutien des associations.
              Les tarifs ci-dessous sont ceux de l’année scolaire en cours.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-card p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Scolarité</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold text-primary">42 €</span>
                <span className="text-muted-foreground"> / mois</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tarif réduit en Toute Petite Section : 21 € / mois.
              </p>
            </article>

            <article className="rounded-3xl bg-card p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Dégressif famille</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>2 enfants</span>
                  <span className="font-semibold text-foreground">80 €</span>
                </li>
                <li className="flex justify-between">
                  <span>3 enfants</span>
                  <span className="font-semibold text-foreground">117 €</span>
                </li>
                <li className="flex justify-between">
                  <span>4 enfants</span>
                  <span className="font-semibold text-foreground">152 €</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">Par mois, quel que soit le niveau.</p>
            </article>

            <article className="rounded-3xl bg-card p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Inclus dans la contribution</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Fournitures scolaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Assurance Mutuelle Saint-Christophe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Paiement possible en 1 ou 10 fois</span>
                </li>
              </ul>
            </article>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Une aide personnalisée peut être accordée sur demande et entretien avec la direction.
            N’hésitez pas à nous contacter pour échanger en toute confidentialité.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Premier pas : prendre contact</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Le plus simple est de nous appeler : nous répondrons à vos questions et
              programmerons ensemble une visite. Vous pouvez aussi nous écrire, nous vous
              répondrons rapidement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SCHOOL.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-4" aria-hidden />
                {SCHOOL.phone}
              </a>
              <a
                href={SCHOOL.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Mail className="size-4" aria-hidden />
                Écrire un e-mail
              </a>
            </div>
          </div>
          <img
            src={maternelleImg}
            alt="Enfants de maternelle en activité dans leur classe"
            width={1280}
            height={960}
            loading="lazy"
            className="school-photo aspect-[4/3] w-full"
          />
        </div>
      </section>
    </>
  );
}
