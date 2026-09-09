import { ALL_EVIDENCE, VINKE_2022_CASCADE_MECHANICS_NOTE, type EvidenceEntry } from "@/lib/rgs";
import { StanceBadge } from "@/components/stance-badge";
import { useLocale } from "@/lib/i18n/locale";
import { headlineForLocale } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

export function EvidencePanel({
  visible,
  selectedId,
  onSelect,
}: {
  visible: readonly EvidenceEntry[];
  selectedId: EvidenceEntry["id"] | null;
  onSelect: (id: EvidenceEntry["id"]) => void;
}) {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">{t.evidenceHeading}</h2>
          <p className="mt-1 text-sm text-muted">{t.evidenceLead}</p>
        </div>
        <p className="font-mono text-2xs text-subtle">
          {t.entriesCount(visible.length, ALL_EVIDENCE.length)}
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {visible.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => onSelect(entry.id)}
            aria-pressed={selectedId === entry.id}
            className={cn(
              "grid w-full gap-2 rounded-lg bg-elevated p-4 text-left transition-[box-shadow,background-color] duration-150 ease-out",
              selectedId === entry.id
                ? "shadow-border-hover"
                : "shadow-border hover:shadow-border-hover",
            )}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium leading-snug text-fg">
                {t.evidenceTitle[entry.id]}
              </p>
              <StanceBadge stance={entry.stance} />
              {entry.display === "text_note" ? (
                <span className="inline-flex h-7 items-center rounded-full bg-elevated px-2.5 text-2xs font-medium tracking-wide text-subtle shadow-border">
                  {t.textNoteBadge}
                </span>
              ) : null}
            </div>
            {entry.display === "text_note" ? (
              <p className="text-sm leading-relaxed text-muted">
                {VINKE_2022_CASCADE_MECHANICS_NOTE}
              </p>
            ) : (
              <p className="font-mono text-xs tabular-nums text-muted">
                {headlineForLocale(entry, t)}
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
