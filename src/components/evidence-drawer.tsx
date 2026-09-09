import { Drawer } from "vaul";
import {
  EVIDENCE_DOI,
  EVIDENCE_URL,
  VINKE_2022_CASCADE_MECHANICS_NOTE,
  type EvidenceEntry,
} from "@/lib/rgs";
import { StanceBadge } from "@/components/stance-badge";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale";
import { headlineForLocale } from "@/lib/i18n/messages";
import { ExternalLink, X } from "lucide-react";

export function EvidenceDrawer({
  entry,
  open,
  onOpenChange,
}: {
  entry: EvidenceEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useLocale();
  const doi = entry ? EVIDENCE_DOI[entry.id] : null;
  const url = entry ? EVIDENCE_URL[entry.id] : null;

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-bg/70" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[90dvh] flex-col rounded-t-2xl bg-surface shadow-border outline-none">
          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-ring-strong" />
          {entry ? (
            <div className="overflow-y-auto px-5 pb-8 pt-4 sm:px-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Drawer.Title className="font-heading text-2xl leading-tight tracking-tight">
                    {t.evidenceTitle[entry.id]}
                  </Drawer.Title>
                  <Drawer.Description className="mt-2 font-mono text-sm tabular-nums text-muted">
                    {entry.display === "text_note"
                      ? t.textNoteBadge
                      : headlineForLocale(entry, t)}
                  </Drawer.Description>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={t.close}
                  onClick={() => onOpenChange(false)}
                >
                  <X className="size-4" />
                </Button>
              </div>

              <div className="mt-3">
                <StanceBadge stance={entry.stance} />
              </div>

              <section className="mt-5">
                <h3 className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                  {t.coreClaim}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg">
                  {entry.display === "text_note"
                    ? VINKE_2022_CASCADE_MECHANICS_NOTE
                    : t.evidenceCore[entry.id]}
                </p>
              </section>

              <section className="mt-5">
                <h3 className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                  {t.citation}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{entry.citation}</p>
              </section>

              {doi || url ? (
                <section className="mt-5">
                  <h3 className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                    {t.doiSource}
                  </h3>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-accent underline-offset-4 hover:underline"
                    href={url ?? `https://doi.org/${doi}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {doi ? `doi:${doi}` : url}
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </section>
              ) : (
                <section className="mt-5">
                  <h3 className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                    {t.doiSource}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-subtle">
                    no DOI in source package - none invented
                  </p>
                </section>
              )}

              <p className="mt-6 text-xs leading-relaxed text-subtle">
                {t.drawerFoot}{" "}
                <span className="font-mono">
                  is_relationship_generalizable_beyond_rhine() = false
                </span>
                .
              </p>
            </div>
          ) : null}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
