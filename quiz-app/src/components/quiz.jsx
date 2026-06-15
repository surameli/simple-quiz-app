import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

function Quiz({ questions, currentIndex, selected, timedOut, onAnswer, onNext }) {
  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const answered = selected !== null || timedOut;

  function getOptionClasses(option) {
    const base =
      "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left text-sm font-medium " +
      "transition-all duration-150 cursor-pointer disabled:cursor-default";

    if (!answered) {
      return base + " border-stone-200 bg-stone-50 text-gray-800 hover:border-violet-400 hover:bg-violet-50 hover:translate-x-1";
    }
    if (option === q.answer) {
      return base + " border-green-400 bg-green-50 text-green-700";
    }
    if (option === selected) {
      return base + " border-red-400 bg-red-50 text-red-700";
    }
    return base + " border-stone-200 bg-stone-50 text-gray-400 opacity-60";
  }

  function getLetterClasses(option) {
    const base = "flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0";
    if (!answered) return base + " bg-stone-200 text-gray-600";
    if (option === q.answer) return base + " bg-green-500 text-white";
    if (option === selected) return base + " bg-red-500 text-white";
    return base + " bg-stone-200 text-gray-400";
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-stone-100">
      <div className="bg-white border border-stone-200 rounded-2xl shadow-xl p-8 w-full max-w-lg">

       
        <div className="flex items-center gap-4 mb-6">
          <ProgressBar current={currentIndex} total={questions.length} />
          <Timer onTimeUp={() => onAnswer(null)} resetKey={currentIndex} />
        </div>

        
        <h2 className="text-xl font-semibold text-gray-900 leading-snug mb-5">
          {q.question}
        </h2>

       
        <ul className="space-y-3 mb-5" role="list">
          {q.options.map((option, i) => (
            <li key={option}>
              <button
                className={getOptionClasses(option)}
                onClick={() => onAnswer(option)}
                disabled={answered}
                aria-pressed={selected === option}
              >
                <span className={getLetterClasses(option)}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{option}</span>
                {answered && option === q.answer && (
                  <span className="text-green-500 font-bold" aria-hidden="true"></span>
                )}
                {answered && option === selected && option !== q.answer && (
                  <span className="text-red-500 font-bold" aria-hidden="true"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

       
        {answered && (
          <div
            role="alert"
            className={`px-4 py-3 rounded-xl text-sm font-semibold mb-5
              ${selected === q.answer
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
              }`}
          >
            {timedOut && selected === null
              ? ` Time's up! The answer was "${q.answer}"`
              : selected === q.answer
              ? "Correct!"
              : ` Wrong — the correct answer is "${q.answer}"`}
          </div>
        )}

      
        <button
          onClick={onNext}
          disabled={!answered}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 active:bg-violet-800
            text-white font-semibold text-sm cursor-pointer
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0
            disabled:transform-none"
        >
          {isLast ? "See Results " : "Next Question →"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
