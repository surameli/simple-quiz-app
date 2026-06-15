
function StartScreen({ difficulty, setDifficulty, startQuiz }) {
  const levels = [
    { value: "easy",   label: "Easy",  activeColor: "border-green-400 bg-green-50 text-green-600" },
    { value: "medium", label: "Medium", activeColor: "border-amber-400 bg-amber-50 text-amber-600" },
    { value: "hard",   label: "Hard",    activeColor: "border-red-400 bg-red-50 text-red-600" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-stone-100">
      <div className="bg-white border border-stone-200 rounded-2xl shadow-xl p-10 w-full max-w-md text-center">

        

        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">
          Quiz Challenge
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Test your knowledge across science, tech, and more.
          Pick a difficulty and go!
        </p>

        {/* Difficulty picker */}
        <div className="flex gap-3 justify-center mb-8 flex-wrap">
          {levels.map(({ value, label, emoji, activeColor }) => (
            <button
              key={value}
              onClick={() => setDifficulty(value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 cursor-pointer
                transition-all duration-150 hover:-translate-y-0.5
                ${difficulty === value
                  ? activeColor
                  : "border-stone-200 bg-stone-50 text-gray-600"
                }`}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        <button
          onClick={startQuiz}
          disabled={!difficulty}
          className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 active:bg-violet-800
            text-white font-semibold text-base cursor-pointer
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0
            disabled:transform-none"
        >
          Start Quiz →
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
