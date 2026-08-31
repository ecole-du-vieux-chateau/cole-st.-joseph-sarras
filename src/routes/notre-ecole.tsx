import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, GraduationCap, Heart, Landmark, Users } from "lucide-react";
import ecoleImg from "@/assets/ecole.jpg";
import heroImg from "@/assets/hero.jpg";
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
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lg"
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <img
          src={ecoleImg}
          alt="La façade en pierre de l'école et sa cour plantée d'arbres"
          width={1408}
          height={1024}
          loading="lazy"
          className="aspect-[21/9] w-full rounded-3xl object-cover shadow-lg"
        />
      </section>

      <ContactCta
        title="Venez découvrir l'école"
        text="Nous serons heureux de vous accueillir pour une visite et un temps d'échange avec l'équipe."
      />
    </>
  );
}
