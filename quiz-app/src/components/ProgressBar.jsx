function ProgressBar({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);

  return (
    <div
      className="flex items-center gap-3 flex-1"
      role="progressbar"
       aria-valuenow={current + 1}
          aria-valuemin={1}
      aria-valuemax={total}
    >
      <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-violet-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
        {current + 1} / {total}
      </span>
    </div>
  );
}

export default ProgressBar;
