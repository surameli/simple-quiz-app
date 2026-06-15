function Result({ score, total, difficulty, onRestart, onReview }) {
  const pct = Math.round((score / total) * 100);

  

  const message =
    pct === 100 ? "Perfect score! Outstanding!" :
    pct >= 80   ? "Great job! Almost perfect." :
    pct >= 50   ? "Good effort — keep practising!" :
                  "Don't give up, try again!";

  const diffBadge = {
    easy:   "bg-green-100 text-green-700",
    medium: "bg-amber-100 text-amber-700",
    hard:   "bg-red-100   text-red-700",
  }[difficulty];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-stone-100">
      <div className="bg-white border border-stone-200 rounded-2xl shadow-xl p-10 w-full max-w-md text-center">

       

        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">
          Quiz Complete!
        </h1>

        <p className="text-gray-500 text-sm mb-8">{message}</p>

       
        <div className="flex justify-center gap-8 mb-6">
          {[
            { value: score,         label: "Correct" },
            { value: total - score, label: "Wrong"   },
            { value: `${pct}%`,     label: "Score"   },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-gray-900 leading-none">
                {value}
              </span>
              <span className="text-xs uppercase tracking-wide text-gray-400">
                {label}
              </span>
            </div>
          ))}
        </div>

       
        <div className="text-sm text-gray-500 mb-8">
          Difficulty:{" "}
          <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${diffBadge}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>

       
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={onReview}
            className="px-6 py-2.5 rounded-xl border-2 border-violet-500 text-violet-600
              font-semibold text-sm cursor-pointer hover:bg-violet-50
              transition-all duration-150 hover:-translate-y-0.5"
          >
            Review Answers
          </button>
          <button
            onClick={onRestart}
            className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white
              font-semibold text-sm cursor-pointer
              transition-all duration-150 hover:-translate-y-0.5"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
