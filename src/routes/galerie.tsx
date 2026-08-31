import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import ecoleImg from "@/assets/ecole.jpg";
import maternelleImg from "@/assets/classe-maternelle.jpg";
import cycle2Img from "@/assets/classe-cycle2.jpg";
import cycle3Img from "@/assets/classe-cycle3.jpg";
import cantineImg from "@/assets/cantine.jpg";
import garderieImg from "@/assets/garderie.jpg";
import sortieNatureImg from "@/assets/sortie-nature.jpg";
import sortieChateauImg from "@/assets/sortie-chateau.jpg";
import atelierImg from "@/assets/atelier-art.jpg";
import sportImg from "@/assets/sport.jpg";
import feteImg from "@/assets/fete.jpg";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie photos — École du Vieux Château, Sarras" },
      {
        name: "description",
        content:
          "La vie de l'école en images : classes, activités, sorties scolaires et fêtes à l'École du Vieux Château de Sarras (Ardèche).",
      },
      { property: "og:title", content: "Galerie photos — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content: "Classes, activités, sorties et fêtes : découvrez la vie de l'école en images.",
      },
    ],
  }),
  component: GaleriePage,
});

const CATEGORIES = ["Tout", "Vie de l'école", "Classes", "Activités", "Sorties scolaires", "Fêtes et événements"] as const;

type Category = (typeof CATEGORIES)[number];

const PHOTOS: { src: string; alt: string; category: Exclude<Category, "Tout"> }[] = [
  { src: heroImg, alt: "Les élèves jouant dans la cour ensoleillée", category: "Vie de l'école" },
  { src: ecoleImg, alt: "La façade et la cour de l'école", category: "Vie de l'école" },
  { src: garderieImg, alt: "Temps calme à la garderie du soir", category: "Vie de l'école" },
  { src: cantineImg, alt: "Le déjeuner partagé à la cantine", category: "Vie de l'école" },
  { src: maternelleImg, alt: "Activités de dessin en maternelle", category: "Classes" },
  { src: cycle2Img, alt: "Apprentissage de la lecture en cycle 2", category: "Classes" },
  { src: cycle3Img, alt: "Travail de groupe en cycle 3", category: "Classes" },
  { src: atelierImg, alt: "Atelier de peinture collective", category: "Activités" },
  { src: sportImg, alt: "Séance de sport au gymnase", category: "Activités" },
  { src: sortieNatureImg, alt: "Sortie nature au bord de la rivière", category: "Sorties scolaires" },
  { src: sortieChateauImg, alt: "Visite éducative d'un château", category: "Sorties scolaires" },
  { src: feteImg, alt: "Spectacle de fin d'année dans la cour", category: "Fêtes et événements" },
];

function GaleriePage() {
  const [category, setCategory] = useState<Category>("Tout");
  const [selected, setSelected] = useState<(typeof PHOTOS)[number] | null>(null);

  const photos = useMemo(
    () => (category === "Tout" ? PHOTOS : PHOTOS.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        title="La vie de l'école en images"
        subtitle="Cour de récréation, classes, ateliers, sorties et fêtes : un aperçu du quotidien de nos élèves."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les photos">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/60 text-secondary-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <button
              key={photo.alt}
              type="button"
              onClick={() => setSelected(photo)}
              className="group relative overflow-hidden rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-3 pt-10 text-left text-sm font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                {photo.alt}
              </span>
            </button>
          ))}
        </div>
      </section>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background text-foreground"
            onClick={() => setSelected(null)}
          >
            <X className="size-5" />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      ) : null}
    </>
  );
}
