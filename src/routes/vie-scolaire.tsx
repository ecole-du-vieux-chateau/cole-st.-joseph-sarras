import { createFileRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, HandCoins, Landmark, Palette, PartyPopper, Sparkles, TreePine, Trophy, Users, UtensilsCrossed, Wrench } from "lucide-react";
import garderieAsset from "@/assets/cour-recreation.jpg.asset.json";
import cantineAsset from "@/assets/cantine-ecole.jpg.asset.json";
import classeElementaireAsset from "@/assets/photo-classe-elementaire-cours-flou.jpg.asset.json";

const garderieImg = garderieAsset.url;
const cantineImg = cantineAsset.url;
const classeElementaireImg = classeElementaireAsset.url;
import qrCantineImg from "@/assets/qr-cantine.png";
import sortieAsset from "@/assets/photo-rassemblement-cour-flou.jpg.asset.json";
const sortieImg = sortieAsset.url;
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
  { icon: TreePine, title: "Sorties éducatives", text: "Découverte de la nature ardéchoise, visites patrimoniales et sorties culturelles au fil de l'année. L'école se met aussi au vert une fois par mois." },
  { icon: Trophy, title: "Activités sportives", text: "Séances de sport régulières et rencontres inter-écoles pour bouger et grandir en équipe. En maternelle, des cours de motricité ont lieu tous les jours." },
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
            <li className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5">
              <span className="font-semibold text-secondary-foreground">Matin</span>
              <span className="font-display text-center text-lg font-semibold text-foreground">7h30 – 8h20</span>
              <span className="text-right text-sm font-semibold text-muted-foreground">1,50 €</span>
            </li>
            <li className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-secondary/60 px-5 py-3.5">
              <span className="font-semibold text-secondary-foreground">Soir</span>
              <span className="font-display text-center text-lg font-semibold text-foreground">16h30 – 18h30</span>
              <span className="text-right text-sm font-semibold text-muted-foreground">0,70 € / 30 min</span>
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
          alt="La cour de récréation et son préau"
          width={1280}
          height={960}
          loading="lazy"
          className="school-photo aspect-[4/3] w-full"
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
            className="school-photo aspect-[4/3] w-full"
          />
          <div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UtensilsCrossed className="size-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight">La restauration scolaire</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Les repas sont fournis par un prestataire de restauration et servis chauds chaque
              midi. Le déjeuner est un vrai temps de vie : les enfants partagent un repas équilibré
              dans une ambiance détendue, encadrée par l'équipe. Trois menus sont proposés chaque
              jour : classique, alternatif et sans porc.
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
                href="mailto:cantine@ecoleprivedesarras.fr"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                cantine@ecoleprivedesarras.fr
              </a>
              . Pensez à désinscrire votre enfant en cas d'absence. Pour les projets
              d'accueil individualisé (PAI), un avoir est appliqué sur les repas apportés par la
              famille.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Modalités cantine : toute modification doit être faite par le QR code,{
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl bg-background p-4">
                <img
                  src={qrCantineImg}
                  alt="QR code vers le formulaire d'inscription et d'annulation de cantine"
                  width={96}
                  height={96}
                  loading="lazy"
                  className="size-24 shrink-0 rounded-xl"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Repas ponctuel ?</span>
                  <br />
                  Flashez ce QR code pour inscrire ou désinscrire votre enfant à la cantine.
                </p>
              </div>
              <a
                href="https://www.guillaud-traiteur.com/7-actualites.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl bg-background p-4 transition-colors hover:bg-accent"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Les menus en cours</span>
                  <br />
                  Consultez les menus de notre traiteur Guillaud.
                </p>
                <ExternalLink className="size-5 shrink-0 text-primary" aria-hidden />
              </a>
            </div>
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
            alt="Les élèves rassemblés dans la cour pour un temps collectif"
            width={1280}
            height={960}
            loading="lazy"
            className="school-photo aspect-[4/3] w-full"
          />
          <img
            src={classeElementaireImg}
            alt="Cours en salle élémentaire"
            width={1280}
            height={960}
            loading="lazy"
            className="school-photo aspect-[4/3] w-full"
          />
        </div>
      </section>

      {/* OGEC & APEL */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">L'OGEC et l'APEL, deux associations au service de l'école</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Derrière la vie quotidienne de l'école, deux équipes de parents bénévoles œuvrent
            avec énergie : l'une veille sur les murs et le fonctionnement, l'autre y met de la
            vie, du rire et des souvenirs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Landmark className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-semibold">L'OGEC — la gestion de l'école</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              L'Organisme de Gestion de l'Enseignement Catholique est le garant du bon
              fonctionnement matériel et financier de l'école : budget et factures,
              entretien des locaux et de la cour, sécurité des enfants, et recrutement des
              personnels de cantine, garderie, ASEM et ménage. Pendant que les enseignants
              font apprendre les enfants, l'OGEC veille à ce que tout le monde évolue dans
              de bonnes conditions.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <HandCoins className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Budget, factures et équilibre financier de l'établissement
              </li>
              <li className="flex items-start gap-2.5">
                <Wrench className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Entretien des locaux, cour de récréation et sécurité
              </li>
              <li className="flex items-start gap-2.5">
                <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Gestion des personnels non enseignants (cantine, garderie, étude)
              </li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Envie de donner un coup de main, même une heure par mois ? Écrivez à{" "}
              <a href="mailto:ogec.adm@ecoleprivedesarras.fr" className="font-semibold text-primary underline-offset-4 hover:underline">
                ogec.adm@ecoleprivedesarras.fr
              </a>
            </p>
          </article>
          <article className="rounded-3xl bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <PartyPopper className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-semibold">L'APEL — la vie de famille de l'école</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              L'Association des Parents d'Élèves de l'Enseignement Libre est le moteur de la
              vie de famille au sein de l'école : kermesse, marché de Noël, loto, vide-grenier,
              ventes de gâteaux… Tout l'argent récolté finance les activités scolaires, les
              spectacles, les livres et le matériel de sport. L'APEL est aussi la voix et le
              relais des parents auprès de l'équipe pédagogique. Tous les 3 ans, elle contribue
              financièrement au voyage scolaire des enfants, à partir du CP.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Café de bienvenue le jour de la rentrée, manifestations et temps conviviaux :
              toutes les bonnes volontés et les talents cachés sont les bienvenus. Contact :{" "}
              <a href="mailto:apel@ecoleprivedesarras.fr" className="font-semibold text-primary underline-offset-4 hover:underline">
                apel@ecoleprivedesarras.fr
              </a>
            </p>
          </article>
        </div>
      </section>

      {/* Qui contacter + absences */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-secondary/50 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold leading-tight">Qui contacter ?</h2>
          <div className="mt-6 grid gap-x-10 gap-y-5 text-sm leading-relaxed text-secondary-foreground sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">Enseignement et absences</p>
              <p className="mt-1">Projet pédagogique, suivi de votre enfant, absences.</p>
              <a href="mailto:contact@ecoleprivedesarras.fr" className="mt-1 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                contact@ecoleprivedesarras.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Cantine</p>
              <p className="mt-1">Inscriptions, menus et questions sur les repas.</p>
              <a href="mailto:cantine@ecoleprivedesarras.fr" className="mt-1 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                cantine@ecoleprivedesarras.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Factures</p>
              <p className="mt-1">Une question sur votre facture ?</p>
              <a href="mailto:ogec.compta@ecoleprivedesarras.fr" className="mt-1 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                ogec.compta@ecoleprivedesarras.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Vie de l'école (OGEC)</p>
              <p className="mt-1">Idées à partager, coup de main aux bénévoles.</p>
              <a href="mailto:ogec.adm@ecoleprivedesarras.fr" className="mt-1 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                ogec.adm@ecoleprivedesarras.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Événements (APEL)</p>
              <p className="mt-1">Kermesse, marché de Noël, loto… ou envie d'aider.</p>
              <a href="mailto:apel@ecoleprivedesarras.fr" className="mt-1 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                apel@ecoleprivedesarras.fr
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Absences</p>
              <p className="mt-1">
                En cas d'absence imprévue, informez l'école par téléphone, e-mail ou via
                l'application Klassly. Pour les absences programmées, un mot dans le cahier
                de liaison suffit.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-secondary-foreground">
            Bon à savoir : la garderie fonctionne sans inscription — déposez votre enfant le
            matin dès 7h30 et récupérez-le le soir jusqu'à 18h30.
          </p>
        </div>
      </section>

      <ContactCta
        title="Des questions sur le quotidien ?"
        text="Horaires, garderie, cantine : contactez-nous, nous vous répondrons avec plaisir."
      />
    </>
  );
}
