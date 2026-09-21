import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
const facadeAsset = "/images/facade-ecole.jpg";
const courAsset = "/images/cour-recreation.jpg";
const hallAsset = "/images/hall-entree.jpg";
const salleActivitesAsset = "/images/salle-activites.jpg";
const tableauClasseAsset = "/images/tableau-classe.jpg";
const classeElem1Asset = "/images/classe-elementaire-1.jpg";
const classeElem2Asset = "/images/classe-elementaire-2.jpg";
const classeElem3Asset = "/images/classe-elementaire-3.jpg";
const classeMater1Asset = "/images/classe-maternelle-1.jpg";
const classeMater2Asset = "/images/classe-maternelle-2.jpg";
const classeMater3Asset = "/images/classe-maternelle-3.jpg";
const classeMater4Asset = "/images/classe-maternelle-4.jpg";
const salleInfoAsset = "/images/salle-informatique.jpg";
const salleInfoEnfantsAsset = "/images/salle-informatique-enfants.jpg";
const cantineEcoleAsset = "/images/cantine-ecole.jpg";
const salleRepasAsset = "/images/salle-repas.jpg";
const salleReposMaterAsset = "/images/salle-repos-maternelle.jpg";
const activiteParachuteAsset = "/images/activite-parachute-cour.jpg";
const facadeVieuxChateauAsset = "/images/facade-vieux-chateau.webp";
const photoAteliersMaternelle = "/images/photo-ateliers-maternelle-flou.jpg";
const photoRegroupement = "/images/photo-temps-de-regroupement-flou.jpg";
const photoPeintureClasse = "/images/photo-peinture-classe-flou.jpg";
const photoTravailClasseEnfants = "/images/photo-travail-classe-enfants.jpg";

const photoLectureCour = "/images/photo-lecture-cour-flou.jpg";
const photoConstructionCour = "/images/photo-construction-cour-flou.jpg";
const photoBasketCour = "/images/photo-basket-cour-flou.jpg";
const photoPorteursCour = "/images/photo-porteurs-cour-flou.jpg";

const photoVeloPreau = "/images/photo-velo-preau-flou.jpg";
const photoCourseCour = "/images/photo-course-cour-flou.jpg";
const photoRecreationGenerale = "/images/photo-recreation-generale-flou.jpg";
const photoAtelierCollage = "/images/photo-atelier-collage-flou.jpg";
const photoClasseElementaireCours = "/images/photo-classe-elementaire-cours-flou.jpg";
const photoRassemblementCour = "/images/photo-rassemblement-cour-flou.jpg";
const photoInformatique = "/images/photo-informatique-flou.jpg";
const photoTravailGroupe = "/images/photo-travail-groupe-flou.jpg";

const photoTableauClasse = "/images/photo-tableau-classe-flou.jpg";
const photoTravailCollectif = "/images/photo-travail-collectif-flou.jpg";
const photoActiviteMaternelleTable = "/images/photo-activite-maternelle-table-flou.jpg";
const photoActiviteManuelle = "/images/photo-activite-manuelle-flou.jpg";
const photoCollageMaternelle = "/images/photo-collage-maternelle-flou.jpg";
const sortieRandonneeRiviere = "/images/sortie-randonnee-riviere.jpg";
const sortieRandonneeChemin = "/images/sortie-randonnee-chemin.jpg";
const photoSortieDessinNature = "/images/photo-sortie-dessin-nature-flou.jpg";
const photoSortieParcoursNature = "/images/photo-sortie-parcours-nature-flou.jpg";
const photoSortieJeuxNature = "/images/photo-sortie-jeux-nature-flou.jpg";
const photoSortieDecouverteNature = "/images/photo-sortie-decouverte-nature-flou.jpg";
const photoActiviteFresqueCour = "/images/photo-activite-fresque-cour-flou.jpg";
const photoSortieRepas = "/images/photo-sortie-repas-flou.jpg";
const photoActiviteCercle = "/images/photo-activite-cercle-flou.jpg";
const photoSortieSecuriteRoutiere = "/images/photo-sortie-securite-routiere-flou.jpg";
const photoSortieEglise = "/images/photo-sortie-eglise-flou.jpg";
const photoSortieCommemoration = "/images/photo-sortie-commemoration-flou.jpg";
const photoSortiePiscineToboggan = "/images/photo-sortie-piscine-toboggan-flou.jpg";
const photoSortiePiscineGroupe = "/images/photo-sortie-piscine-groupe-flou.jpg";

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

const CATEGORIES = ["Vidéo", "Espaces de l'école", "Classes", "Activités", "Sorties scolaires", "Tout"] as const;

type Category = (typeof CATEGORIES)[number];

const PHOTOS: { src: string; alt: string; category: Exclude<Category, "Tout" | "Vidéo"> }[] = [
  { src: facadeVieuxChateauAsset, alt: "La façade en pierre de l'École du Vieux Château", category: "Espaces de l'école" },
  { src: activiteParachuteAsset, alt: "Les enfants réunis autour d'un parachute coloré dans la cour", category: "Activités" },
  { src: photoAteliersMaternelle, alt: "Ateliers de manipulation autour des tables en maternelle", category: "Activités" },
  { src: photoRegroupement, alt: "Temps de regroupement au sol avec l'enseignante en maternelle", category: "Activités" },
  { src: photoPeintureClasse, alt: "Atelier peinture sur chevalet dans la classe", category: "Activités" },
  
  { src: photoConstructionCour, alt: "Construction à plusieurs avec des pièces en mousse dans la cour", category: "Activités" },
  { src: photoLectureCour, alt: "Un élève lit un magazine assis sur la marche de la cour", category: "Activités" },
  
  { src: photoBasketCour, alt: "Partie de basket dans la cour de récréation", category: "Activités" },
  { src: photoPorteursCour, alt: "Porteurs et draisiennes le long du préau de maternelle", category: "Activités" },
  
  { src: photoVeloPreau, alt: "Un enfant pédale sur un vélo devant la fresque du préau", category: "Activités" },
  { src: photoCourseCour, alt: "Course en plein air dans la cour de récréation", category: "Activités" },
  { src: photoRecreationGenerale, alt: "Vue d'ensemble de la cour de récréation animée", category: "Activités" },
  { src: photoRassemblementCour, alt: "Rassemblement d'enfants dans la cour, photo prise en hauteur", category: "Activités" },
  { src: photoAtelierCollage, alt: "Atelier de découpage-collage sur les tables de maternelle", category: "Classes" },
  { src: photoTravailGroupe, alt: "Travail en petit groupe autour d'une table avec l'enseignante", category: "Classes" },
  
  { src: photoTravailCollectif, alt: "Travail collectif avec l'enseignante en maternelle", category: "Activités" },
  { src: photoInformatique, alt: "Les élèves utilisent les ordinateurs de la classe", category: "Classes" },
  { src: photoTableauClasse, alt: "Les élèves travaillent face au tableau de la classe", category: "Classes" },
  { src: photoClasseElementaireCours, alt: "Cours en salle d'élémentaire, l'enseignante écrit au tableau", category: "Classes" },
  { src: photoTravailClasseEnfants, alt: "Des élèves travaillent à leur bureau dans une classe lumineuse", category: "Classes" },
  { src: facadeAsset, alt: "La façade de l'école du Vieux Château", category: "Espaces de l'école" },
  { src: courAsset, alt: "La cour de récréation et son préau", category: "Espaces de l'école" },
  { src: hallAsset, alt: "Le hall d'entrée décoré par les élèves", category: "Espaces de l'école" },
  { src: salleActivitesAsset, alt: "Le coin lecture et jeux calmes", category: "Espaces de l'école" },
  { src: cantineEcoleAsset, alt: "La salle de cantine décorée", category: "Espaces de l'école" },
  { src: salleRepasAsset, alt: "L'espace repas et coin cuisine", category: "Espaces de l'école" },
  { src: salleInfoAsset, alt: "La salle informatique de l'école", category: "Espaces de l'école" },
  { src: salleInfoEnfantsAsset, alt: "Les élèves à la salle informatique", category: "Classes" },
  { src: salleReposMaterAsset, alt: "L'espace repos et vestiaires en maternelle", category: "Espaces de l'école" },
  { src: classeMater1Asset, alt: "Classe maternelle avec coins jeux et apprentissages", category: "Espaces de l'école" },
  { src: classeMater2Asset, alt: "Coin activités et affichages en maternelle", category: "Espaces de l'école" },
  { src: classeMater3Asset, alt: "La salle de motricité et de regroupement en maternelle", category: "Espaces de l'école" },
  { src: classeMater4Asset, alt: "La grande salle de classe de maternelle", category: "Espaces de l'école" },
  { src: tableauClasseAsset, alt: "Le tableau des règles de vie de la classe", category: "Espaces de l'école" },
  { src: classeElem1Asset, alt: "Salle de classe élémentaire avec bureaux et tableau", category: "Espaces de l'école" },
  { src: classeElem2Asset, alt: "Classe élémentaire lumineuse et organisée", category: "Espaces de l'école" },
  { src: classeElem3Asset, alt: "Espace de travail des cycles 2 et 3", category: "Espaces de l'école" },
  { src: photoActiviteMaternelleTable, alt: "Activité de collage en maternelle avec l'enseignante", category: "Activités" },
  { src: photoActiviteManuelle, alt: "Atelier manuel autour des tables de maternelle", category: "Classes" },
  { src: photoCollageMaternelle, alt: "Les enfants collent des bandes de papier de couleur", category: "Activités" },
  { src: photoActiviteFresqueCour, alt: "Enfants rassemblés autour de grands dessins à la craie dans la cour", category: "Activités" },
  { src: photoActiviteCercle, alt: "Journée des chaussettes dépareillées : les enfants assis en cercle", category: "Activités" },
  { src: sortieRandonneeRiviere, alt: "Groupe d'enfants en randonnée sur un sentier en pleine nature", category: "Sorties scolaires" },
  { src: sortieRandonneeChemin, alt: "Enfants avec leurs sacs à dos sur un chemin forestier", category: "Sorties scolaires" },
  { src: photoSortieDessinNature, alt: "Enfants dessinant dans l'herbe pendant une sortie en plein air", category: "Sorties scolaires" },
  { src: photoSortieParcoursNature, alt: "Enfants suivant un parcours avec des cerceaux dans un champ", category: "Sorties scolaires" },
  { src: photoSortieJeuxNature, alt: "Parcours de motricité en plein air avec des cerceaux colorés", category: "Sorties scolaires" },
  { src: photoSortieDecouverteNature, alt: "Découverte de la nature autour de branchages dans une prairie", category: "Sorties scolaires" },
  { src: photoSortieRepas, alt: "La cantine : un repas partagé dans une salle décorée", category: "Activités" },
  { src: photoSortieSecuriteRoutiere, alt: "Parcours de sécurité routière à vélo dans un gymnase", category: "Sorties scolaires" },
  { src: photoSortieEglise, alt: "Enfants et adultes réunis dans une église lors d'une célébration", category: "Sorties scolaires" },
  { src: photoSortieCommemoration, alt: "Participation des enfants à une commémoration au monument aux morts", category: "Sorties scolaires" },
  { src: photoSortiePiscineToboggan, alt: "Descente du toboggan aquatique pendant une sortie à la piscine", category: "Sorties scolaires" },
  { src: photoSortiePiscineGroupe, alt: "Enfants écoutant un maître-nageur au bord de la piscine", category: "Sorties scolaires" },
];

function GaleriePage() {
  const [category, setCategory] = useState<Category>("Vidéo");
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
