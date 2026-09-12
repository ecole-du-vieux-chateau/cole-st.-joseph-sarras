import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Church, Compass, Cross, HandHeart, HeartHandshake, Languages, ShieldCheck, Sprout, Users } from "lucide-react";
import { ContactCta, PageHero } from "@/components/page-hero";
import projetAsset from "@/assets/photo-activite-manuelle-flou.jpg.asset.json";

const projetImg = projetAsset.url;

export const Route = createFileRoute("/projet-educatif")({
  head: () => ({
    meta: [
      { title: "Projet éducatif — École du Vieux Château, Sarras" },
      {
        name: "description",
        content:
          "Notre projet éducatif : accompagnement global de l'enfant, autonomie, responsabilité, coopération, respect et valeurs chrétiennes d'accueil et de solidarité.",
      },
      { property: "og:title", content: "Projet éducatif — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "Accompagner chaque enfant dans sa globalité, dans le respect de chacun et l'esprit des valeurs chrétiennes.",
      },
    ],
  }),
  component: ProjetEducatifPage,
});

const AXES = [
  {
    icon: Sprout,
    title: "L'accompagnement global de l'enfant",
    text: "Nous accompagnons chaque enfant dans toutes les dimensions de sa croissance : intellectuelle, mais aussi affective, sociale et spirituelle. Apprendre passe d'abord par le fait de se sentir bien.",
  },
  {
    icon: Compass,
    title: "L'autonomie",
    text: "Progressivement, les enfants apprennent à s'organiser, à faire des choix et à travailler par eux-mêmes. L'autonomie se construit pas à pas, avec confiance.",
  },
  {
    icon: ShieldCheck,
    title: "La responsabilité",
    text: "Missions de classe, engagements tenus, soin du cadre de vie : chacun prend sa part et comprend que ses actes comptent pour la communauté.",
  },
  {
    icon: Users,
    title: "La coopération",
    text: "Travaux de groupe, tutorat entre classes, projets communs : les élèves apprennent à écouter, s'entraider et réussir ensemble plutôt que les uns contre les autres.",
  },
  {
    icon: HeartHandshake,
    title: "Le respect de chacun",
    text: "Respect de soi, des autres, des adultes, du matériel et de la nature : un cadre clair et bienveillant qui permet à tous d'apprendre sereinement.",
  },
  {
    icon: Cross,
    title: "Les valeurs chrétiennes",
    text: "Dans l'esprit de l'Évangile, l'école vit l'accueil de tous et la solidarité : temps de partage, gestes d'attention aux autres et ouverture sur le monde.",
  },
];

function ProjetEducatifPage() {
  return (
    <>
      <PageHero
        title="Notre projet éducatif"
        subtitle="Au-delà des apprentissages scolaires, notre mission est d'aider chaque enfant à grandir : autonome, responsable, coopératif et respectueux, dans l'esprit des valeurs chrétiennes d'accueil et de solidarité."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AXES.map((axe) => (
            <article key={axe.title} className="rounded-3xl bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <axe.icon className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-semibold leading-snug">{axe.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{axe.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[auto_1fr]">
          <span className="flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground">
            <BookOpen className="size-8" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Projet d'école 2026-2027
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              « Promenons-nous dans les contes »
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Cette année, notre fil conducteur nous emmène dans l'univers merveilleux des
              contes : des histoires pour rêver, imaginer, s'exprimer et enrichir son langage,
              mais aussi pour apprendre à mieux se connaître et à mieux vivre ensemble. De
              nombreux projets autour du langage, de la créativité et du vivre ensemble
              rythmeront l'année, portés par toute l'équipe éducative, les associations de
              parents et les familles.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Le projet d'établissement 2026 – 2031
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Cinq ans pour faire grandir chaque élève
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Élaboré avec la communauté éducative et adopté par le conseil d'établissement, notre
            projet d'établissement court sur cinq ans. Il s'appuie sur les résultats des
            évaluations nationales et sur l'évaluation de l'établissement, et il précise les
            activités scolaires et périscolaires ainsi que les moyens mis en œuvre pour assurer la
            réussite de tous les élèves. Deux grandes priorités le structurent.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-7 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">Développer le vivre ensemble</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {[
                "Des règles de vie communes, connues et respectées par tous, pour un climat serein d'apprentissage",
                "Apprendre à reconnaître et exprimer ses émotions",
                "L'élève devient acteur de la vie collective : conseil des sages, élèves délégués, médiateur, la voix des classes",
                "Développer les compétences sociales à travers le sport",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl bg-card p-7 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Languages className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">Développer le langage</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {[
                "Améliorer la lecture et les stratégies de lecture",
                "Développer le vocabulaire et le travail sur les sons",
                "Utiliser des outils communs de la maternelle au CM2",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl bg-card p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Church className="size-6" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ce projet s'accompagne d'un projet d'animation pastorale, dans l'esprit des sœurs de
              Saint-Joseph : servir, partager, témoigner, célébrer.
            </p>
          </div>
          <Link
            to="/projet-pastoral"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Découvrir le projet pastoral
          </Link>
        </div>
      </section>

      <section className="bg-secondary/45">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <HandHeart className="size-7" aria-hidden />
          </span>
          <blockquote className="max-w-3xl font-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            « Faire grandir chaque enfant, c'est d'abord le regarder avec bienveillance. »
          </blockquote>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            L'esprit de l'École du Vieux Château
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <img
          src={projetImg}
          alt="Atelier créatif en maternelle avec l'enseignante"
          width={1600}
          height={900}
          loading="lazy"
          className="school-photo aspect-[16/7] w-full"
        />
      </section>

      <ContactCta
        title="Ce projet vous parle ?"
        text="Venez en discuter avec l'équipe : nous vous accueillerons avec plaisir pour une visite de l'école."
      />
    </>
  );
}
