import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, HeartHandshake, ShieldCheck, Trophy, ArrowRight, Users, Landmark, BookOpen, Home } from "lucide-react";
import heroAsset from "@/assets/activite-parachute-cour.jpg.asset.json";
import ecoleAsset from "@/assets/facade-vieux-chateau.webp.asset.json";

const heroImg = heroAsset.url;
const ecoleImg = ecoleAsset.url;
import { ContactCta } from "@/components/page-hero";
import { SCHOOL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "École du Vieux Château — École catholique à Sarras (Ardèche)" },
      {
        name: "description",
        content:
          "École catholique privée sous contrat avec l'État à Sarras (Ardèche), de la Toute Petite Section au CM2. 3 classes, accompagnement personnalisé et cadre bienveillant.",
      },
      { property: "og:title", content: "École du Vieux Château — École catholique à Sarras (Ardèche)" },
      {
        property: "og:description",
        content:
          "Grandir, apprendre et s'épanouir dans un environnement bienveillant. De la TPS au CM2, une école à taille humaine à Sarras.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: SCHOOL.name,
          description:
            "École élémentaire et maternelle catholique privée sous contrat d'association avec l'État, de la Toute Petite Section au CM2.",
          address: {
            "@type": "PostalAddress",
            streetAddress: SCHOOL.address,
            postalCode: SCHOOL.postcode,
            addressLocality: SCHOOL.city,
            addressRegion: "Ardèche",
            addressCountry: "FR",
          },
          telephone: "+33475231587",
          email: SCHOOL.email,
          areaServed: ["Sarras", "Ardèche", "Vallée du Rhône"],
        }),
      },
    ],
  }),
  component: Index,
});

const VALUES = [
  { icon: HandHeart, title: "Bienveillance", text: "Chaque enfant est accueilli tel qu'il est, avec ses forces et ses besoins." },
  { icon: ShieldCheck, title: "Respect", text: "Le respect de soi, des autres et du cadre de vie structure notre quotidien." },
  { icon: HeartHandshake, title: "Confiance", text: "Une relation de confiance entre l'enfant, sa famille et l'équipe éducative." },
  { icon: Trophy, title: "Réussite de chaque enfant", text: "Des parcours adaptés pour que chacun progresse à son rythme et réussisse." },
];

const FIGURES = [
  { icon: Landmark, value: "Sous contrat avec l'État", label: "École privée catholique sous contrat d'association" },
  { icon: BookOpen, value: "TPS → CM2", label: "De la Toute Petite Section au CM2" },
  { icon: Users, value: "3 classes", label: "Maternelle, Cycle 2 et Cycle 3" },
  { icon: Home, value: "Taille humaine", label: "Une structure familiale et chaleureuse" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Les enfants réunis autour d'un parachute coloré dans la cour de l'école"
          width={1024}
          height={768}
          className="h-[70vh] min-h-[520px] w-full bg-muted object-cover object-center saturate-[.94] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <p className="mb-4 inline-block rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground shadow-sm backdrop-blur">
              École catholique · Sarras, Ardèche
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-background drop-shadow-lg sm:text-5xl lg:text-6xl">
              École du Vieux Château
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-background drop-shadow-md sm:text-xl">
              {SCHOOL.slogan}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={SCHOOL.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-transform hover:scale-[1.02]"
              >
                Demander un rendez-vous
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <Link
                to="/notre-ecole"
                className="inline-flex items-center justify-center rounded-full border border-background/60 px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-background/10"
              >
                Découvrir l'école
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-foreground/80">Bienvenue</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Une école familiale au cœur du village
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Située à Sarras, en Ardèche, l'École du Vieux Château accueille les enfants de la Toute
              Petite Section au CM2 dans un cadre chaleureux et sécurisant. Grâce à ses effectifs
              réduits et à son équipe engagée, chaque enfant bénéficie d'un accompagnement attentif
              et personnalisé, dans le respect des programmes de l'Éducation nationale.
            </p>
            <Link
              to="/notre-ecole"
              className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
            >
              En savoir plus sur notre école
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <img
            src={ecoleImg}
            alt="La façade en pierre et l'entrée de l'école du Vieux Château"
            width={768}
            height={920}
            loading="lazy"
            className="school-photo aspect-[4/3] w-full object-center"
          />
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-secondary/45">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-foreground/80">Nos valeurs</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Ce qui guide chacune de nos journées
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <article key={value.title} className="rounded-3xl bg-card p-7 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FIGURES.map((figure) => (
            <div key={figure.value} className="rounded-3xl border border-border bg-sand/50 p-7 text-center">
              <figure.icon className="mx-auto size-8 text-primary" aria-hidden />
              <p className="mt-4 font-display text-2xl font-semibold">{figure.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{figure.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCta
        title="Envie de nous rencontrer ?"
        text="La meilleure façon de découvrir l'école est de venir la visiter. Appelez-nous ou écrivez-nous pour convenir d'un rendez-vous."
      />
    </>
  );
}
