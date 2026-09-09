import {
  doesVulnerabilityIncreaseOverTime,
  isKaubThresholdFromSingleStudy,
  isRelationshipGeneralizableBeyondRhine,
} from "@/lib/rgs";
import { useLocale } from "@/lib/i18n/locale";
import { keyNumbersForLocale } from "@/lib/i18n/messages";

export function KeyNumbers() {
  const { t } = useLocale();
  const numbers = keyNumbersForLocale(t);

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.numbersHeading}</h2>
      <p className="mt-1 text-sm text-muted">{t.numbersLead}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {numbers.map((n) => (
          <div key={n.id} className="rounded-lg bg-elevated p-3">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {n.label}
            </p>
            <p className="mt-1 font-mono text-lg tabular-nums text-fg">{n.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
        {t.honestyHeading}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
        <li>
          is_relationship_generalizable_beyond_rhine() ={" "}
          <span className="text-accent">
            {String(isRelationshipGeneralizableBeyondRhine())}
          </span>
        </li>
        <li>
          does_vulnerability_increase_over_time() ={" "}
          <span className="text-accent">
            {String(doesVulnerabilityIncreaseOverTime())}
          </span>
        </li>
        <li>
          is_kaub_threshold_from_single_study() ={" "}
          <span className="text-accent">
            {String(isKaubThresholdFromSingleStudy())}
          </span>
        </li>
      </ul>
    </section>
  );
}
