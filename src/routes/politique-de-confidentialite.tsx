import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SCHOOL } from "@/lib/site";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — École du Vieux Château, Sarras" },
      {
        name: "description",
        content: "Politique de confidentialité du site de l'École du Vieux Château de Sarras : données collectées, droits et contact.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PolitiqueConfidentialitePage,
});

function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero title="Politique de confidentialité" />
      <section className="mx-auto max-w-3xl space-y-10 px-4 py-14 sm:px-6">
        <div>
          <h2 className="text-xl font-semibold">Responsable du traitement</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {SCHOOL.name} — {SCHOOL.address}, {SCHOOL.postcode} {SCHOOL.city}.
            <br />
            Contact : <a href={SCHOOL.emailHref} className="break-all text-primary hover:underline">{SCHOOL.email}</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Données collectées</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ce site vitrine ne comporte ni formulaire de collecte, ni espace personnel, ni outil de
            mesure d'audience nominatif. Aucune donnée personnelle n'est collectée lors de votre
            simple navigation.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Si vous nous contactez par téléphone ou par e-mail, les informations que vous nous
            transmettez (nom, coordonnées, situation de votre enfant) sont utilisées uniquement
            pour répondre à votre demande et organiser, le cas échéant, une visite ou une
            inscription. Elles ne sont ni cédées, ni vendues à des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ce site n'utilise pas de cookies de suivi. La carte Google Maps intégrée à la page «
            Informations pratiques » peut déposer des cookies techniques propres à Google lors de
            son affichage.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Durée de conservation</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Les échanges liés à une demande de contact sont conservés le temps de traiter votre
            demande, puis archivés conformément aux obligations applicables aux établissements
            scolaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Vos droits</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit
            d'accès, de rectification, d'effacement, de limitation et d'opposition concernant vos
            données personnelles. Pour exercer ces droits, écrivez à{" "}
            <a href={SCHOOL.emailHref} className="break-all text-primary hover:underline">{SCHOOL.email}</a>.
            Vous pouvez également saisir la CNIL (cnil.fr) en cas de litige.
          </p>
        </div>
      </section>
    </>
  );
}
