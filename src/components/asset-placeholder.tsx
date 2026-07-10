import { ImageIcon } from "lucide-react";

export function AssetPlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-dashed border-border bg-surface-2 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--primary) 18%, transparent), color-mix(in srgb, var(--secondary) 14%, transparent), color-mix(in srgb, var(--accent) 12%, transparent))",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
        <ImageIcon size={20} className="text-muted" strokeWidth={1.5} />
        <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
