type LogoProps = { compact?: boolean }

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#hjem" className="inline-flex items-center gap-3" aria-label="Nordvanta – til forsiden">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-lg shadow-blue-950/40">
        <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
          <path d="M8 36V12L24 36V12" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 36L41 12" fill="none" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-lg font-extrabold tracking-[0.16em] text-white">NORDVANTA</span>
          <span className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-slate-500">TECHNOLOGY & DIGITAL SOLUTIONS</span>
        </span>
      )}
    </a>
  )
}
