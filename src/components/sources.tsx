import { useLocale } from "@/lib/i18n/locale";
import {
  BEDOYA_MAYA_2024_DOI,
  VINKE_2022_DOI,
  type EvidenceEntry,
} from "@/lib/rgs";

const CITES: {
  id: EvidenceEntry["id"];
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string | null;
  url: string | null;
}[] = [
  {
    id: "bedoya2024",
    authors: "Bedoya-Maya, F., Shobayo, P., Beckers, J., van Hassel, E.",
    year: "2024",
    title: "The impact of critical water levels on container inland waterway transport",
    journal: "Transportation Research Part D: Transport and Environment",
    doi: BEDOYA_MAYA_2024_DOI,
    url: null,
  },
  {
    id: "vinke2022",
    authors:
      "Vinke, F.R.S., van Koningsveld, M., van Dorsser, C., Baart, F., van Gelder, P., Vellinga, T.",
    year: "2022",
    title: "Cascading effects of sustained low water on inland shipping",
    journal: "Climate Risk Management, 35, 100400",
    doi: VINKE_2022_DOI,
    url: null,
  },
  {
    id: "ifw2018",
    authors: "IfW Kiel (Institut fuer Weltwirtschaft)",
    year: "2018",
    title:
      "Niedrigwasser am Rhein: auf Jahressicht etwa 0,4 Prozent Wirtschaftsleistung",
    journal: "kielinstitut.de (institute statement)",
    doi: null,
    url: "https://www.kielinstitut.de",
  },
];

export function Sources() {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.sourcesHeading}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.sourcesLead}</p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.authors}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{t.sourceNotes[c.id]}</p>
            {c.doi ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={`https://doi.org/${c.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                doi:{c.doi}
              </a>
            ) : c.url ? (
              <a
                className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                {c.url}
              </a>
            ) : (
              <p className="mt-1 font-mono text-xs text-subtle">
                no DOI in source package - none invented
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">{t.sourcesFoot}</p>
    </section>
  );
}
