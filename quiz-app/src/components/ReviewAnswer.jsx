function ReviewAnswer({ questions, userAnswers, onBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-stone-100">
      <div className="bg-white border border-stone-200 rounded-2xl shadow-xl p-8 w-full max-w-xl">

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Answer Review
        </h2>

        <ul className="space-y-3 mb-6" role="list">
          {questions.map((q, i) => {
            const given = userAnswers[i];
            const correct = given === q.answer;
            const timedOut = given === null;

            return (
              <li
                key={q.id}
                className={`p-4 rounded-xl border-2
                  ${correct
                    ? "border-green-300 bg-green-50"
                    : "border-red-300 bg-red-50"
                  }`}
              >
              
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Q{i + 1}
                  </span>
                  <span
                    className={`text-sm font-bold ${correct ? "text-green-600" : "text-red-600"}`}
                    aria-label={correct ? "correct" : "incorrect"}
                  >
                    {correct ? "✓" : "✗"}
                  </span>
                </div>

                <p className="text-sm font-semibold text-gray-800 mb-2">
                  {q.question}
                </p>

                
                <div className="text-xs space-y-1 text-gray-500">
                  {!correct && (
                    <p>
                      <span className="font-semibold">Your answer: </span>
                      {timedOut
                        ? <em className="text-amber-500">No answer (time up)</em>
                        : <span className="text-red-500">{given}</span>}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Correct answer: </span>
                    <span className="text-green-600">{q.answer}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <button
          onClick={onBack}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white
            font-semibold text-sm cursor-pointer
            transition-all duration-150 hover:-translate-y-0.5"
        >
          ← Back to Results
        </button>
      </div>
    </div>
  );
}

export default ReviewAnswer;
