import { createFileRoute } from "@tanstack/react-router";
import { Church, Gift, HandHeart, HeartHandshake, Sparkles } from "lucide-react";
import { ContactCta, PageHero } from "@/components/page-hero";
import pastoraleAsset from "@/assets/photo-activite-manuelle-flou.jpg.asset.json";

const pastoraleImg = pastoraleAsset.url;

export const Route = createFileRoute("/projet-pastoral")({
  head: () => ({
    meta: [
      { title: "Projet pastoral — École du Vieux Château, Sarras" },
      {
        name: "description",
        content:
          "Le projet d'animation pastorale de l'École du Vieux Château à Sarras : servir, partager, témoigner, célébrer, dans l'esprit des sœurs de Saint-Joseph.",
      },
      { property: "og:title", content: "Projet pastoral — École du Vieux Château, Sarras" },
      {
        property: "og:description",
        content:
          "Servir, partager, témoigner, célébrer : les quatre axes de notre animation pastorale, ouverte à toutes les familles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjetPastoralPage,
});

const AXES = [
  {
    icon: HandHeart,
    title: "Servir",
    items: [
      "Accueil des élèves à besoins particuliers",
      "Accueil des familles en situation de précarité",
      "Accompagnement dans les démarches d'aide scolaire et la constitution des dossiers",
      "Proposition d'aide aux devoirs",
      "Solidarité au sein de l'équipe et temps d'échange de pratique entre enseignants, AESH et personnel",
      "Tutorat pour accueillir chaque nouveau membre de l'équipe",
      "Formation humaine et éthique",
      "Développer la bienveillance envers les autres et soi-même : conseils d'élèves, ateliers de pédagogie coopérative",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Partager",
    items: [
      "Vivre les valeurs de Saint Joseph : entraide, partage, ouverture aux autres, respect, empathie",
      "Temps communs sur le vivre ensemble et la fraternité",
      "Actions de solidarité : collectes pour des associations (ELA, journée mondiale de la trisomie 21)",
      "Actions de carême : partager un bol de riz pour soutenir une association",
    ],
  },
  {
    icon: Sparkles,
    title: "Témoigner",
    items: [
      "Découverte des religions dans le cadre de la culture religieuse",
      "Découverte de notre fondatrice et de Saint Joseph",
      "Temps de culture chrétienne aux grandes fêtes liturgiques : Toussaint, Avent, Noël, Carême, Pâques, Pentecôte",
      "Apports sur l'art, la musique et la religion",
    ],
  },
  {
    icon: Gift,
    title: "Célébrer",
    items: [
      "Temps de célébration tout au long de l'année",
      "Célébration de Noël",
      "Fête de Saint Joseph le 19 mars",
      "Chorale interclasse pour apprendre les chants des célébrations",
      "Pot de rentrée et pot de fin d'année partagés",
      "Fête de l'école",
    ],
  },
];

function ProjetPastoralPage() {
  return (
    <>
      <PageHero
        title="Notre projet pastoral"
        subtitle="Notre établissement est sous la tutelle de la congrégation des sœurs de Saint-Joseph. L'animation pastorale s'adresse à tous, quelles que soient les convictions des familles."
      />

      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
        <div className="rounded-3xl bg-card p-8 shadow-sm">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Church className="size-6" aria-hidden />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">
            Au quotidien dans notre école
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Développer un climat fraternel, bienveillant et épanouissant, fondé sur le respect
            mutuel de chacun et avec le soutien des parents : chaque enfant est un être unique,
            porteur d'une histoire, capable d'aimer et d'être aimé. Ce projet se vit à travers des
            actions ponctuelles et des activités régulières, réparties en quatre grands axes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {AXES.map((axe) => (
            <article key={axe.title} className="rounded-3xl bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <axe.icon className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold">{axe.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {axe.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <img
          src={pastoraleImg}
          alt="Temps d'activité partagé entre enfants et enseignante à l'école"
          width={1600}
          height={900}
          loading="lazy"
          className="school-photo aspect-[16/7] w-full"
        />
      </section>

      <ContactCta
        title="Envie d'en savoir plus ?"
        text="L'équipe éducative répond volontiers à vos questions sur la pastorale et vous accueille pour une visite."
      />
    </>
  );
}
