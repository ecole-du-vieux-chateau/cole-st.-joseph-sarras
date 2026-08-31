import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SCHOOL } from "@/lib/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — École du Vieux Château, Sarras" },
      { name: "description", content: "Mentions légales du site de l'École du Vieux Château de Sarras (Ardèche)." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <>
      <PageHero title="Mentions légales" />
      <section className="mx-auto max-w-3xl space-y-10 px-4 py-14 sm:px-6">
        <div>
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {SCHOOL.name}
            <br />
            {SCHOOL.address}
            <br />
            {SCHOOL.postcode} {SCHOOL.city}
            <br />
            Téléphone : <a href={SCHOOL.phoneHref} className="text-primary hover:underline">{SCHOOL.phone}</a>
            <br />
            E-mail : <a href={SCHOOL.emailHref} className="break-all text-primary hover:underline">{SCHOOL.email}</a>
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Établissement d'enseignement privé catholique sous contrat d'association avec l'État,
            placé sous tutelle de l'association Saint-Joseph.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Directeur de la publication</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            La direction de l'{SCHOOL.name}.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ce site est hébergé par Lovable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            L'ensemble des contenus du site (textes, images, logo) est la propriété de l'
            {SCHOOL.name}, sauf mention contraire. Toute reproduction, même partielle, est
            soumise à autorisation préalable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Crédits</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Photographies : illustrations de la vie scolaire. Icônes : Lucide.
          </p>
        </div>
      </section>
    </>
  );
}
