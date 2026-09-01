import { createFileRoute } from "@tanstack/react-router";
import { Clock, Palette, Sparkles, TreePine, Trophy, UtensilsCrossed } from "lucide-react";
import garderieImg from "@/assets/garderie.jpg";
import cantineImg from "@/assets/cantine.jpg";
import sortieImg from "@/assets/sortie-nature.jpg";
import sportImg from "@/assets/sport.jpg";
import { ContactCta, PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/vie-scolaire")({
  head: () => ({
    meta: [
      { title: "Vie scolaire — Garderie, cantine et projets | École du Vieux Château" },
      {
        name: "description",
        content:
          "Garderie de 7h30 à 8h20 et de 16h00 à 18h30, restauration scolaire, sorties éducatives, sport et projets artistiques à l'École du Vieux Château de Sarras.",
      },
      { property: "og:title", content: "Vie scolaire — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "Garderie matin et soir, cantine, sorties, sport et projets artistiques : la vie quotidienne de l'école.",
      },
    ],
  }),
  component: VieScolairePage,
});

const PROJECTS = [
  { icon: TreePine, title: "Sorties éducatives", text: "Découverte de la nature ardéchoise, visites patrimoniales et sorties culturelles au fil de l'année." },
  { icon: Trophy, title: "Activités sportives", text: "Séances de sport régulières et rencontres inter-écoles pour bouger et grandir en équipe." },
  { icon: Palette, title: "Projets artistiques", text: "Arts plastiques, musique et spectacles qui développent la créativité et la confiance en soi." },
  { icon: Sparkles, title: "Partage entre les classes", text: "Tutorat, fêtes d'école et temps forts qui rassemblent petits et grands tout au long de l'année." },
];

function VieScolairePage() {
  return (
    <>
      <PageHero
        title="La vie scolaire, du matin au soir"
        subtitle="Garderie, cantine et projets pédagogiques : tout est pensé pour faciliter le quotidien des familles et enrichir celui des enfants."
      />

      {/* Garderie */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Clock className="size-6" aria-hidden />
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight">La garderie</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Pour accompagner les rythmes des familles, l'école propose un accueil en garderie
            chaque jour de classe, le matin avant la classe et le soir après la journée scolaire.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center justify-between gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5">
              <span className="font-semibold text-secondary-foreground">Matin</span>
              <span className="font-display text-lg font-semibold text-foreground">7h30 – 8h20</span>
              <span className="text-sm font-semibold text-muted-foreground">1,50 €</span>
            </li>
            <li className="flex items-center justify-between gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5">
              <span className="font-semibold text-secondary-foreground">Soir</span>
              <span className="font-display text-lg font-semibold text-foreground">16h30 – 18h30</span>
              <span className="text-sm font-semibold text-muted-foreground">0,70 € / 30 min</span>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Dès octobre, des temps d'aide personnalisée sont proposés par les enseignants aux
            élèves qui en ont besoin, les lundis et jeudis après 16h30. L'étude est assurée par
            le personnel de l'OGEC.
          </p>
        </div>
        <img
          src={garderieImg}
          alt="Enfants jouant calmement à la garderie en fin de journée"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
      </section>

      {/* Restauration */}
      <section className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src={cantineImg}
            alt="Élèves déjeunant ensemble à la cantine de l'école"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UtensilsCrossed className="size-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight">La restauration scolaire</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Les repas sont fournis par un prestataire de restauration et servis chauds chaque
              midi. Le déjeuner est un vrai temps de vie : les enfants partagent un repas équilibré
              dans une ambiance détendue, encadrée par l'équipe.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-3 rounded-2xl bg-background px-5 py-3.5">
                <span className="font-semibold text-foreground">Repas</span>
                <span className="font-display text-lg font-semibold text-foreground">5,10 € / repas</span>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Les inscriptions et les règlements de cantine s'effectuent en ligne auprès de{" "}
              <a
                href="mailto:cantine.ecoleduvieuxchateau@gmail.com"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                cantine.ecoleduvieuxchateau@gmail.com
              </a>
              . Pensez à désinscrire votre enfant en cas de sortie scolaire. Pour les projets
              d'accueil individualisé (PAI), un avoir est appliqué sur les repas apportés par la
              famille.
            </p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">Les projets pédagogiques</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Sorties, sport, arts et moments de partage rythment l'année et donnent du sens aux
            apprentissages.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article key={project.title} className="rounded-3xl bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <project.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <img
            src={sortieImg}
            alt="Sortie éducative au bord d'une rivière en Ardèche"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src={sportImg}
            alt="Activité sportive des élèves dans le gymnase"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Vie de famille */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-secondary/50 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold leading-tight">Le lien avec les familles</h2>
          <div className="mt-5 grid gap-6 text-sm leading-relaxed text-secondary-foreground sm:grid-cols-2">
            <p>
              En cas d'absence imprévue de votre enfant, merci d'en informer l'école par
              téléphone, par e-mail ou via l'application Klassly. Pour les absences programmées,
              un mot dans le cahier de liaison suffit.
            </p>
            <p>
              L'APEL (association de parents d'élèves) anime la vie de l'école tout au long de
              l'année : café de bienvenue le jour de la rentrée, manifestations et temps conviviaux
              qui rassemblent les familles.
            </p>
          </div>
        </div>
      </section>

      <ContactCta
        title="Des questions sur le quotidien ?"
        text="Horaires, garderie, cantine : contactez-nous, nous vous répondrons avec plaisir."
      />
    </>
  );
}
