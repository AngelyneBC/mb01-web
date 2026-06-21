const COLORS = ["bg-accent-yellow", "bg-brand", "bg-brand-orange"]

export function ZigzagDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full overflow-hidden ${className ?? ""}`}
    >
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 shrink-0 [clip-path:polygon(0_0,100%_0,50%_100%)] ${COLORS[i % COLORS.length]}`}
        />
      ))}
    </div>
  )
}
