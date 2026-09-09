import {
  CRITICAL_WATER_LEVEL_CM,
  KAUB_GAUGE_DISPLAY_MAX_CM,
  KAUB_GAUGE_DISPLAY_MIN_CM,
  KAUB_GAUGE_NOTE,
  LOAD_FACTOR_PCT_NOMINAL_HIGH,
  LOAD_FACTOR_PCT_NOMINAL_LOW,
  loadFactorLabelForThreshold,
} from "@/lib/rgs";
import { useLocale } from "@/lib/i18n/locale";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function KaubGauge({
  belowCritical,
  onBelowCriticalChange,
}: {
  belowCritical: boolean;
  onBelowCriticalChange: (next: boolean) => void;
}) {
  const { t } = useLocale();
  const load = loadFactorLabelForThreshold(belowCritical);
  const displayCm = belowCritical
    ? Math.max(KAUB_GAUGE_DISPLAY_MIN_CM, CRITICAL_WATER_LEVEL_CM - 20)
    : Math.min(KAUB_GAUGE_DISPLAY_MAX_CM, CRITICAL_WATER_LEVEL_CM + 30);
  const fillPct =
    ((displayCm - KAUB_GAUGE_DISPLAY_MIN_CM) /
      (KAUB_GAUGE_DISPLAY_MAX_CM - KAUB_GAUGE_DISPLAY_MIN_CM)) *
    100;
  const markPct =
    ((CRITICAL_WATER_LEVEL_CM - KAUB_GAUGE_DISPLAY_MIN_CM) /
      (KAUB_GAUGE_DISPLAY_MAX_CM - KAUB_GAUGE_DISPLAY_MIN_CM)) *
    100;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-2xl tracking-tight">{t.gaugeHeading}</h2>
          <p className="mt-1 text-sm text-muted">{t.gaugeLead}</p>
          <p className="mt-3 text-xs leading-relaxed text-subtle">{KAUB_GAUGE_NOTE}</p>
          <p className="mt-2 font-mono text-2xs text-subtle">
            river-gauge-shipping-utac · DOI {t.zenodoDoi}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
          <div
            className="relative h-56 w-16 overflow-hidden rounded-lg bg-elevated shadow-border"
            role="img"
            aria-label={t.gaugeAria(displayCm, CRITICAL_WATER_LEVEL_CM)}
          >
            <div
              className={cn(
                "absolute inset-x-0 bottom-0 transition-[height] duration-300 ease-out",
                belowCritical ? "bg-accent/70" : "bg-moderate/70",
              )}
              style={{ height: `${fillPct}%` }}
            />
            <div
              className="absolute inset-x-0 border-t-2 border-dashed border-fg"
              style={{ bottom: `${markPct}%` }}
            />
            <span
              className="absolute right-full mr-2 -translate-y-1/2 whitespace-nowrap font-mono text-2xs text-fg"
              style={{ bottom: `${markPct}%` }}
            >
              {CRITICAL_WATER_LEVEL_CM} cm
            </span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-2xs text-subtle">
              {KAUB_GAUGE_DISPLAY_MIN_CM}
            </span>
            <span className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-2xs text-subtle">
              {KAUB_GAUGE_DISPLAY_MAX_CM}
            </span>
          </div>

          <div className="min-w-[14rem] space-y-3">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label={t.gaugeToggleAria}
            >
              <Button
                type="button"
                variant="chip"
                size="sm"
                data-active={!belowCritical}
                aria-pressed={!belowCritical}
                onClick={() => onBelowCriticalChange(false)}
              >
                {t.gaugeAbove}
              </Button>
              <Button
                type="button"
                variant="chip"
                size="sm"
                data-active={belowCritical}
                aria-pressed={belowCritical}
                onClick={() => onBelowCriticalChange(true)}
              >
                {t.gaugeBelow}
              </Button>
            </div>
            <div className="rounded-lg bg-elevated p-3">
              <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
                {t.loadFactorLabel}
              </p>
              <p className="mt-1 font-mono text-lg tabular-nums text-fg">
                {load.mode === "full"
                  ? t.loadFactorFull
                  : t.loadFactorReduced(
                      LOAD_FACTOR_PCT_NOMINAL_LOW,
                      LOAD_FACTOR_PCT_NOMINAL_HIGH,
                    )}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {t.gaugeNoInterpolation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
