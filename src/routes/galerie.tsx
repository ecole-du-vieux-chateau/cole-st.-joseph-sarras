import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import facadeAsset from "@/assets/facade-ecole.jpg.asset.json";
import courAsset from "@/assets/cour-recreation.jpg.asset.json";
import hallAsset from "@/assets/hall-entree.jpg.asset.json";
import salleActivitesAsset from "@/assets/salle-activites.jpg.asset.json";
import tableauClasseAsset from "@/assets/tableau-classe.jpg.asset.json";
import classeElem1Asset from "@/assets/classe-elementaire-1.jpg.asset.json";
import classeElem2Asset from "@/assets/classe-elementaire-2.jpg.asset.json";
import classeElem3Asset from "@/assets/classe-elementaire-3.jpg.asset.json";
import classeMater1Asset from "@/assets/classe-maternelle-1.jpg.asset.json";
import classeMater2Asset from "@/assets/classe-maternelle-2.jpg.asset.json";
import classeMater3Asset from "@/assets/classe-maternelle-3.jpg.asset.json";
import classeMater4Asset from "@/assets/classe-maternelle-4.jpg.asset.json";
import salleInfoAsset from "@/assets/salle-informatique.jpg.asset.json";
import salleInfoEnfantsAsset from "@/assets/salle-informatique-enfants.jpg.asset.json";
import cantineEcoleAsset from "@/assets/cantine-ecole.jpg.asset.json";
import salleRepasAsset from "@/assets/salle-repas.jpg.asset.json";
import salleReposMaterAsset from "@/assets/salle-repos-maternelle.jpg.asset.json";
import activiteParachuteAsset from "@/assets/activite-parachute-cour.jpg.asset.json";
import facadeVieuxChateauAsset from "@/assets/facade-vieux-chateau.webp.asset.json";
import photoAteliersMaternelle from "@/assets/photo-ateliers-maternelle-flou.jpg.asset.json";
import photoRegroupement from "@/assets/photo-temps-de-regroupement-flou.jpg.asset.json";
import photoPeintureClasse from "@/assets/photo-peinture-classe-flou.jpg.asset.json";
import photoTravailClasseEnfants from "@/assets/photo-travail-classe-enfants.jpg.asset.json";

import photoLectureCour from "@/assets/photo-lecture-cour-flou.jpg.asset.json";
import photoConstructionCour from "@/assets/photo-construction-cour-flou.jpg.asset.json";
import photoBasketCour from "@/assets/photo-basket-cour-flou.jpg.asset.json";
import photoPorteursCour from "@/assets/photo-porteurs-cour-flou.jpg.asset.json";

import photoVeloPreau from "@/assets/photo-velo-preau-flou.jpg.asset.json";
import photoCourseCour from "@/assets/photo-course-cour-flou.jpg.asset.json";
import photoRecreationGenerale from "@/assets/photo-recreation-generale-flou.jpg.asset.json";
import photoAtelierCollage from "@/assets/photo-atelier-collage-flou.jpg.asset.json";
import photoClasseElementaireCours from "@/assets/photo-classe-elementaire-cours-flou.jpg.asset.json";
import photoRassemblementCour from "@/assets/photo-rassemblement-cour-flou.jpg.asset.json";
import photoInformatique from "@/assets/photo-informatique-flou.jpg.asset.json";
import photoTravailGroupe from "@/assets/photo-travail-groupe-flou.jpg.asset.json";

import photoTableauClasse from "@/assets/photo-tableau-classe-flou.jpg.asset.json";
import photoTravailCollectif from "@/assets/photo-travail-collectif-flou.jpg.asset.json";
import photoActiviteMaternelleTable from "@/assets/photo-activite-maternelle-table-flou.jpg.asset.json";
import photoActiviteManuelle from "@/assets/photo-activite-manuelle-flou.jpg.asset.json";
import photoCollageMaternelle from "@/assets/photo-collage-maternelle-flou.jpg.asset.json";

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

const CATEGORIES = ["Tout", "Espaces de l'école", "Classes", "Activités", "Vidéo"] as const;

type Category = (typeof CATEGORIES)[number];

const PHOTOS: { src: string; alt: string; category: Exclude<Category, "Tout" | "Vidéo"> }[] = [
  { src: facadeVieuxChateauAsset.url, alt: "La façade en pierre de l'École du Vieux Château", category: "Espaces de l'école" },
  { src: activiteParachuteAsset.url, alt: "Les enfants réunis autour d'un parachute coloré dans la cour", category: "Activités" },
  { src: photoAteliersMaternelle.url, alt: "Ateliers de manipulation autour des tables en maternelle", category: "Activités" },
  { src: photoRegroupement.url, alt: "Temps de regroupement au sol avec l'enseignante en maternelle", category: "Activités" },
  { src: photoPeintureClasse.url, alt: "Atelier peinture sur chevalet dans la classe", category: "Activités" },
  
  { src: photoConstructionCour.url, alt: "Construction à plusieurs avec des pièces en mousse dans la cour", category: "Activités" },
  { src: photoLectureCour.url, alt: "Un élève lit un magazine assis sur la marche de la cour", category: "Activités" },
  
  { src: photoBasketCour.url, alt: "Partie de basket dans la cour de récréation", category: "Activités" },
  { src: photoPorteursCour.url, alt: "Porteurs et draisiennes le long du préau de maternelle", category: "Activités" },
  
  { src: photoVeloPreau.url, alt: "Un enfant pédale sur un vélo devant la fresque du préau", category: "Activités" },
  { src: photoCourseCour.url, alt: "Course en plein air dans la cour de récréation", category: "Activités" },
  { src: photoRecreationGenerale.url, alt: "Vue d'ensemble de la cour de récréation animée", category: "Activités" },
  { src: photoRassemblementCour.url, alt: "Rassemblement d'enfants dans la cour, photo prise en hauteur", category: "Activités" },
  { src: photoAtelierCollage.url, alt: "Atelier de découpage-collage sur les tables de maternelle", category: "Classes" },
  { src: photoTravailGroupe.url, alt: "Travail en petit groupe autour d'une table avec l'enseignante", category: "Classes" },
  
  { src: photoTravailCollectif.url, alt: "Travail collectif avec l'enseignante en maternelle", category: "Activités" },
  { src: photoInformatique.url, alt: "Les élèves utilisent les ordinateurs de la classe", category: "Classes" },
  { src: photoTableauClasse.url, alt: "Les élèves travaillent face au tableau de la classe", category: "Classes" },
  { src: photoClasseElementaireCours.url, alt: "Cours en salle d'élémentaire, l'enseignante écrit au tableau", category: "Classes" },
  { src: photoTravailClasseEnfants.url, alt: "Des élèves travaillent à leur bureau dans une classe lumineuse", category: "Classes" },
  { src: facadeAsset.url, alt: "La façade de l'école du Vieux Château", category: "Espaces de l'école" },
  { src: courAsset.url, alt: "La cour de récréation et son préau", category: "Espaces de l'école" },
  { src: hallAsset.url, alt: "Le hall d'entrée décoré par les élèves", category: "Espaces de l'école" },
  { src: salleActivitesAsset.url, alt: "Le coin lecture et jeux calmes", category: "Espaces de l'école" },
  { src: cantineEcoleAsset.url, alt: "La salle de cantine décorée", category: "Espaces de l'école" },
  { src: salleRepasAsset.url, alt: "L'espace repas et coin cuisine", category: "Espaces de l'école" },
  { src: salleInfoAsset.url, alt: "La salle informatique de l'école", category: "Espaces de l'école" },
  { src: salleInfoEnfantsAsset.url, alt: "Les élèves à la salle informatique", category: "Classes" },
  { src: salleReposMaterAsset.url, alt: "L'espace repos et vestiaires en maternelle", category: "Espaces de l'école" },
  { src: classeMater1Asset.url, alt: "Classe maternelle avec coins jeux et apprentissages", category: "Espaces de l'école" },
  { src: classeMater2Asset.url, alt: "Coin activités et affichages en maternelle", category: "Espaces de l'école" },
  { src: classeMater3Asset.url, alt: "La salle de motricité et de regroupement en maternelle", category: "Espaces de l'école" },
  { src: classeMater4Asset.url, alt: "La grande salle de classe de maternelle", category: "Espaces de l'école" },
  { src: tableauClasseAsset.url, alt: "Le tableau des règles de vie de la classe", category: "Espaces de l'école" },
  { src: classeElem1Asset.url, alt: "Salle de classe élémentaire avec bureaux et tableau", category: "Espaces de l'école" },
  { src: classeElem2Asset.url, alt: "Classe élémentaire lumineuse et organisée", category: "Espaces de l'école" },
  { src: classeElem3Asset.url, alt: "Espace de travail des cycles 2 et 3", category: "Espaces de l'école" },
  { src: photoActiviteMaternelleTable.url, alt: "Activité de collage en maternelle avec l'enseignante", category: "Activités" },
  { src: photoActiviteManuelle.url, alt: "Atelier manuel autour des tables de maternelle", category: "Classes" },
  { src: photoCollageMaternelle.url, alt: "Les enfants collent des bandes de papier de couleur", category: "Activités" },
  
];

function GaleriePage() {
  const [category, setCategory] = useState<Category>("Tout");
  const [selected, setSelected] = useState<(typeof PHOTOS)[number] | null>(null);

  const photos = useMemo(
    () => (category === "Tout" || category === "Vidéo" ? PHOTOS : PHOTOS.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        title="La vie de l'école en images"
        subtitle="Cour de récréation, classes, ateliers, sorties et fêtes : un aperçu du quotidien de nos élèves."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les photos et vidéos">
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

        {category === "Vidéo" ? (
          <div className="mt-10">
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
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <button
                key={photo.alt}
                type="button"
                onClick={() => setSelected(photo)}
                className="school-photo-frame group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-3 pt-10 text-left text-sm font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {photo.alt}
                </span>
              </button>
            ))}
          </div>
        )}
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
