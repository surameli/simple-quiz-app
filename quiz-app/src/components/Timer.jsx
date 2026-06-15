import { useState, useEffect, useRef } from "react";

const SECONDS = 15;

function Timer({ onTimeUp, resetKey }) {
  const [timeLeft, setTimeLeft] = useState(SECONDS);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(SECONDS);
  }, [resetKey]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timeLeft, resetKey]);

  const circumference = 2 * Math.PI * 15.9;
  const strokeDash = ((timeLeft / SECONDS) * 100 / 100) * circumference;
  const urgent = timeLeft <= 5;

  return (
    <div
      className="relative w-12 h-12 shrink-0"
      aria-live="polite"
      aria-label={`${timeLeft} seconds remaining`}
    >
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
       
        <circle
          cx="18" cy="18" r="15.9"
          fill="none" stroke="#e7e5e4" strokeWidth="3"
        />
        
        <circle
          cx="18" cy="18" r="15.9"
          fill="none"
          stroke={urgent ? "#ef4444" : "#7c3aed"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          style={{ transition: "stroke-dasharray 0.9s linear" }}
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center text-sm font-bold
          ${urgent ? "text-red-500 animate-pulse" : "text-gray-800"}`}
      >
        {timeLeft}
      </span>
    </div>
  );
}

export default Timer;
