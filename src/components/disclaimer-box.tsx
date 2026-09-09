import {
  BUNDESBANK_0_2PP_EXCLUSION_NOTE,
  doesVulnerabilityIncreaseOverTime,
  isKaubThresholdFromSingleStudy,
  isRelationshipGeneralizableBeyondRhine,
} from "@/lib/rgs";
import { useLocale } from "@/lib/i18n/locale";

export function DisclaimerBox() {
  const beyond = isRelationshipGeneralizableBeyondRhine();
  const vuln = doesVulnerabilityIncreaseOverTime();
  const kaubSingle = isKaubThresholdFromSingleStudy();
  const { t } = useLocale();

  const links = [
    {
      href: "https://klimakatalog.vercel.app/p/river-gauge-shipping-utac",
      label: t.linkKlimakatalog,
    },
    {
      href: "https://apps-hub-alpha.vercel.app/",
      label: t.linkAppsHub,
    },
    {
      href: "https://github.com/GenesisAeon/river-gauge-shipping-utac",
      label: t.linkGithub,
    },
    {
      href: "https://github.com/GenesisAeon/river-gauge-shipping-sandbox",
      label: t.linkSandboxGithub,
    },
  ];

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.disclaimerHeading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg">{t.disclaimerLead}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {t.disclaimerBody}{" "}
        <span className="font-mono text-accent">
          is_relationship_generalizable_beyond_rhine() = {beyond ? "true" : "false"}
        </span>
        ;{" "}
        <span className="font-mono text-accent">
          does_vulnerability_increase_over_time() = {vuln ? "true" : "false"}
        </span>
        ;{" "}
        <span className="font-mono text-accent">
          is_kaub_threshold_from_single_study() = {kaubSingle ? "true" : "false"}
        </span>
        .
      </p>
      <div className="mt-4 rounded-lg bg-elevated p-3">
        <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
          {t.bundesbankHeading}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {BUNDESBANK_0_2PP_EXCLUSION_NOTE}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
