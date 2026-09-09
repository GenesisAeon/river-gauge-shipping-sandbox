import { Button } from "@/components/ui/button";
import type { Stance } from "@/lib/rgs";
import { useLocale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

export type StanceFilter = "all" | Stance;

export function StanceFilter({
  value,
  onChange,
}: {
  value: StanceFilter;
  onChange: (next: StanceFilter) => void;
}) {
  const { t } = useLocale();
  const options: { id: StanceFilter; label: string }[] = [
    { id: "all", label: t.filterAll },
    { id: "throughput", label: t.filterThroughput },
    { id: "cascade", label: t.filterCascade },
    { id: "gdp", label: t.filterGdp },
  ];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={t.filterAria}>
      {options.map((opt) => (
        <Button
          key={opt.id}
          type="button"
          variant="chip"
          size="sm"
          data-active={value === opt.id}
          aria-pressed={value === opt.id}
          onClick={() => onChange(opt.id)}
          className={cn("min-w-11 px-4")}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
