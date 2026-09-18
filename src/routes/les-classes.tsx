import { createFileRoute } from "@tanstack/react-router";
import { HandHeart } from "lucide-react";
import maternelleAsset from "@/assets/classe-maternelle-3.jpg.asset.json";
import cycle2Asset from "@/assets/classe-elementaire-2.jpg.asset.json";
import cycle3Asset from "@/assets/classe-elementaire-1.jpg.asset.json";

const maternelleImg = maternelleAsset.url;
const cycle2Img = cycle2Asset.url;
const cycle3Img = cycle3Asset.url;
import { ContactCta, PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/les-classes")({
  head: () => ({
    meta: [
      { title: "Les classes — Maternelle, Cycle 2, Cycle 3 | École du Vieux Château" },
      {
        name: "description",
        content:
          "Trois classes à l'École du Vieux Château de Sarras : Maternelle (TPS à GS), Cycle 2 (CP-CE1) et Cycle 3 (CE2-CM1-CM2), dans des environnements adaptés à chaque âge.",
      },
      { property: "og:title", content: "Les classes — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "De la Toute Petite Section au CM2, trois classes et une pédagogie adaptée à chaque étape de la scolarité.",
      },
    ],
  }),
  component: LesClassesPage,
});

const CLASSES = [
  {
    image: maternelleImg,
    alt: "Enfants de maternelle en pleine activité de dessin",
    title: "Classe TPS · PS · MS",
    levels: ["Toute Petite Section", "Petite Section", "Moyenne Section"],
    teacher: "Mme Avellaneda Amandine",
    description:
      "L'école des premiers apprentissages, où l'enfant apprend en jouant, en explorant et en manipulant. Langage, motricité, vie en groupe et autonomie sont développés dans un environnement doux et sécurisant, pensé pour les plus petits.",
  },
  {
    image: cycle2Img,
    alt: "Classe élémentaire lumineuse et organisée",
    title: "Classe MS · GS · CP",
    levels: ["Moyenne Section", "Grande Section", "CP"],
    teacher: "Mme Gustin Marion",
    description:
      "Le passage vers les apprentissages fondamentaux : lire, écrire, compter. Les élèves consolident les bases avec méthode et confiance, grâce à un enseignement structuré et à la possibilité de différencier les parcours au sein d'une même classe.",
  },
  {
    image: cycle3Img,
    alt: "Élèves de cycle 3 travaillant en groupe sur un projet",
    title: "Classe CE1 · CE2 · CM1 · CM2",
    levels: ["CE1", "CE2", "CM1", "CM2"],
    teacher: "Mme Chalandard Élodie",
    description:
      "Le cycle de consolidation qui prépare au collège. Les élèves approfondissent leurs connaissances, développent leur esprit critique et gagnent en autonomie à travers des projets, des travaux de groupe et des responsabilités.",
  },
];

function LesClassesPage() {
  return (
    <>
      <PageHero
        title="Trois classes, un même esprit"
        subtitle="De la Toute Petite Section au CM2, chaque classe réunit plusieurs niveaux — une richesse qui favorise l'entraide, la différenciation et l'accompagnement de chaque enfant."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {CLASSES.map((classe, index) => (
          <article
            key={classe.title}
            className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <img
              src={classe.image}
              alt={classe.alt}
              width={1280}
              height={960}
              loading="lazy"
              className="school-photo aspect-[4/3] w-full"
            />
            <div>
              <h2 className="text-3xl font-semibold leading-tight">{classe.title}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                {classe.teacher}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {classe.levels.map((level) => (
                  <li
                    key={level}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground"
                  >
                    {level}
                  </li>
                ))}
              </ul>
              <p className="mt-5 leading-relaxed text-muted-foreground">{classe.description}</p>
            </div>
          </article>
        ))}
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight">Visitez l'école en vidéo</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Une visite virtuelle de l'école, de la cour aux classes, pour découvrir les lieux
            comme si vous y étiez.
          </p>
        </div>
        <div className="school-photo-frame mx-auto mt-8 max-w-4xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/TgzETXkyqvg"
            title="Visite virtuelle de l'École du Vieux Château"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </section>

      <ContactCta
        title="Une question sur les classes ?"
        text="Appelez-nous pour échanger sur la scolarité de votre enfant et organiser une visite de l'école."
      />
    </>
  );
}
