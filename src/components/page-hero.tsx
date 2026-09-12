import type { ReactNode } from "react";

export function PageHero({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function ContactCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+33630159334"
            className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
          >
            Appeler l'école · 06 30 15 93 34
          </a>
          <a
            href="mailto:ecoleduvieuxchateau.sarras@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Écrire un e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
