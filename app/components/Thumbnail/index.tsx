export const Thumbnail = ({ tag }: { tag: string }) => {
  const bg: Record<string, string> = {
    Architecture: "bg-green-50",
    Performance:  "bg-amber-50",
    React:        "bg-blue-50",
    Security:     "bg-red-50",
    DX:           "bg-purple-50",
  };

  const icons: Record<string, React.ReactNode> = {
    Architecture: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-green-600 opacity-60">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/>
      </svg>
    ),
    Performance: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-amber-600 opacity-60">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    React: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-blue-600 opacity-60">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
    Security: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-red-600 opacity-60">
        <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z"/>
      </svg>
    ),
    DX: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-purple-600 opacity-60">
        <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16"/>
      </svg>
    ),
  };

  return (
    <div className={`w-14 h-10 rounded-md flex-shrink-0 flex items-center justify-center ${bg[tag] ?? "bg-zinc-100"}`}>
      {icons[tag]}
    </div>
  );
};