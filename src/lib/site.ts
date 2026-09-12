export const SCHOOL = {
  name: "École du Vieux Château",
  shortName: "Le Vieux Château",
  slogan: "Grandir, apprendre et s'épanouir dans un environnement bienveillant.",
  address: "5 Place du Peycher",
  postcode: "07370",
  city: "Sarras",
  phone: "04 75 23 15 87",
  phoneHref: "tel:+33475231587",
  mobile: "06 30 15 93 34",
  mobileHref: "tel:+33630159334",
  email: "contact@ecoleprivedesarras.fr",
  emailHref: "mailto:contact@ecoleprivedesarras.fr",
};

export const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/notre-ecole", label: "Notre école" },
  { to: "/les-classes", label: "Les classes" },
  { to: "/vie-scolaire", label: "Vie scolaire" },
  { to: "/projet-educatif", label: "Projet éducatif" },
  { to: "/galerie", label: "Galerie" },
  { to: "/infos-pratiques", label: "Informations pratiques" },
  { to: "/inscriptions", label: "Inscriptions" },
] as const;
