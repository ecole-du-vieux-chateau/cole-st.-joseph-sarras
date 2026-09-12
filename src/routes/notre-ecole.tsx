import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, GraduationCap, Heart, Landmark, Users } from "lucide-react";
import ecoleAsset from "@/assets/facade-ecole.jpg.asset.json";
import heroAsset from "@/assets/cour-recreation.jpg.asset.json";

const ecoleImg = ecoleAsset.url;
const heroImg = heroAsset.url;
import { ContactCta, PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/notre-ecole")({
  head: () => ({
    meta: [
      { title: "Notre école — École du Vieux Château, Sarras" },
      {
        name: "description",
        content:
          "Établissement catholique sous tutelle Saint-Joseph et contrat d'association avec l'État. Programmes de l'Éducation nationale et accompagnement personnalisé à Sarras (07).",
      },
      { property: "og:title", content: "Notre école — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "Une école catholique à taille humaine, sous contrat avec l'État, où chaque enfant est accompagné avec bienveillance.",
      },
    ],
  }),
  component: NotreEcolePage,
});

const PILLARS = [
  {
    icon: Landmark,
    title: "Tutelle Saint-Joseph",
    text: "L'école est un établissement catholique placé sous la tutelle de l'association Saint-Joseph, qui veille à la fidélité de son projet et à la qualité de son fonctionnement.",
  },
  {
    icon: GraduationCap,
    title: "Contrat d'association avec l'État",
    text: "Sous contrat d'association avec l'État, l'école accueille tous les enfants et participe au service public de l'éducation, dans le respect de son caractère propre.",
  },
  {
    icon: BookOpenCheck,
    title: "Programmes de l'Éducation nationale",
    text: "Les enseignements suivent les programmes officiels de l'Éducation nationale, garantissant une scolarité cohérente et la poursuite d'études sans rupture.",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    text: "La petite taille de l'établissement permet à l'équipe de connaître chaque enfant et d'adapter son accompagnement à son rythme, ses besoins et ses talents.",
  },
  {
    icon: Heart,
    title: "Respect, entraide et épanouissement",
    text: "Le respect de chacun, l'entraide entre élèves et l'épanouissement de chaque enfant sont au cœur de la vie quotidienne de l'école.",
  },
];

const TEAM = [
  {
    name: "Mme Amandine Avellaneda",
    role: "Directrice — classe TPS · PS · MS",
    text: (
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>J'accompagne avec enthousiasme les élèves de 2 à 4 ans, une période riche en découvertes, en expériences et… en petites surprises !</p>
        <p>Dans ma classe, tout est prétexte à apprendre. Je privilégie le jeu, la manipulation et l'expérimentation pour permettre à chaque enfant de découvrir progressivement la richesse de la langue française, ses mots, ses nuances et le plaisir de les utiliser.</p>
        <p>En mathématiques aussi, on apprend en faisant ! Jeux, manipulations et ateliers d'autonomie permettent aux élèves d'explorer les quantités, les formes, l'espace et le temps, tout en développant leur réflexion et leur confiance en eux.</p>
        <p>Les élèves sont prévenus : j'aime les pièges ! Dans certains exercices, de petites difficultés se cachent volontairement… L'objectif ? Faire réfléchir, chercher, essayer, se tromper parfois et surtout comprendre. Car apprendre, c'est aussi apprendre à raisonner !</p>
        <p>Dans ma classe, nous accordons également une place essentielle au langage et au vivre-ensemble : mettre des mots sur ce que l'on ressent, apprendre à écouter l'autre, coopérer et découvrir que chacun, avec ses différences, est une véritable richesse pour le groupe.</p>
        <p>Et pour mieux connaître la maîtresse… Mon petit point faible : le chocolat noir ! Heureusement, il n'y a pas encore d'atelier « partage de chocolat » au programme… enfin, pas officiellement !</p>
      </div>
    ),
  },
  {
    name: "Mme Élodie Chaiandard",
    role: "Classe CE1 · CE2 · CM1",
    text: (
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>Quelques exemples de notre organisation en classe :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Graphisme / écriture / copie : cahiers MDI, notamment pour la tenue du crayon, l'écriture et la copie.</li>
          <li>Orthographe : Dictée et Histoire des arts, avec une approche qui part d'œuvres artistiques pour introduire les notions, puis réinvestit ces œuvres dans les dictées.</li>
          <li>Autres apprentissages : séances collectives avec vidéos ou leçons projetées, puis mise en pratique avec des exercices individuels.</li>
        </ul>
      </div>
    ),
  },
];

function NotreEcolePage() {
  return (
    <>
      <PageHero
        title="Une école catholique à taille humaine"
        subtitle="Ancrée dans la vie du village de Sarras, l'École du Vieux Château conjugue exigence éducative et climat familial, pour que chaque enfant apprenne en confiance."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <pillar.icon className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <img
            src={heroImg}
            alt="Les élèves de l'école réunis dans la cour ensoleillée"
            width={1920}
            height={1080}
            loading="lazy"
            className="school-photo aspect-[4/3] w-full"
          />
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Le quotidien d'une école de village</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Ici, tout le monde se connaît : les grands aident les petits, les enseignants
              travaillent main dans la main, et les familles sont acteurs de la vie de l'école.
              Cette proximité fait la force de notre établissement : elle crée un climat de
              confiance où les enfants osent apprendre, se tromper et recommencer.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Entourée de nature, l'école profite de son cadre ardéchois : la cour ombragée, les
              sorties au fil des saisons et la vie du village nourrissent les apprentissages et le
              sens de la communauté.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight">L'histoire de l'école</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Les bâtiments de notre école font partie de l'enceinte du château de Sarras,
              construit au Moyen Âge par les Pagan de Mahun, seigneurs de Vocance, Satillieu,
              Ozon, Saint-Julien-Molin-Molette, Argental et La Faye. Détruit pendant les
              guerres de Religion, il fut en partie reconstruit vers 1580 par Christophe de
              Chalencon, vicomte de Château-Clos.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vers 1860, les sœurs de Saint-Joseph reçoivent dans les bâtiments actuels les
              enfants en dessous de l'âge scolaire, pour aider la population du village. Elles
              mettent également en place un enseignement pour les filles, qui n'étaient pas
              accueillies à l'école congréganiste de garçons fondée en 1875.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Au début du XXᵉ siècle, l'école est officiellement fondée. Depuis, notre
              établissement est sous la tutelle de la congrégation des Sœurs de Saint-Joseph.
              Lié à l'État par contrat d'association depuis 1995, il garantit les horaires et
              les programmes nationaux. À ce jour, le personnel est entièrement laïc.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight">L'équipe de l'école</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Une équipe à taille humaine, enthousiaste et engagée, qui connaît chaque enfant
              et travaille main dans la main avec les familles.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TEAM.map((member) => (
              <article key={member.name} className="rounded-3xl bg-card p-7 shadow-sm">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                <div className="mt-4 text-sm">{member.text}</div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            L'école s'appuie aussi sur le précieux engagement des parents bénévoles de l'OGEC
            et de l'APEL, qui veillent au bon fonctionnement de l'établissement et animent la
            vie de l'école tout au long de l'année.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <img
          src={ecoleImg}
          alt="La façade en pierre de l'école et sa cour plantée d'arbres"
          width={1408}
          height={1024}
          loading="lazy"
          className="school-photo aspect-[16/7] w-full"
        />
      </section>

      <ContactCta
        title="Venez découvrir l'école"
        text="Nous serons heureux de vous accueillir pour une visite et un temps d'échange avec l'équipe."
      />
    </>
  );
}
