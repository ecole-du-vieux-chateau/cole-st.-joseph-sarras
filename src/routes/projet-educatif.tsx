import { createFileRoute } from "@tanstack/react-router";
import { Compass, Cross, HandHeart, HeartHandshake, ShieldCheck, Sprout, Users } from "lucide-react";
import { ContactCta, PageHero } from "@/components/page-hero";

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

      <ContactCta
        title="Ce projet vous parle ?"
        text="Venez en discuter avec l'équipe : nous vous accueillerons avec plaisir pour une visite de l'école."
      />
    </>
  );
}
