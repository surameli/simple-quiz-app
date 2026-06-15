const questions = [
  // ── EASY ──────────────────────────────────────────────────
  {
    id: 1,
    difficulty: "easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
      "High Tech Modern Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    difficulty: "easy",
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    id: 3,
    difficulty: "easy",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 4,
    difficulty: "easy",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 5,
    difficulty: "easy",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },

  // ── MEDIUM ────────────────────────────────────────────────
  {
    id: 6,
    difficulty: "medium",
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    id: 7,
    difficulty: "medium",
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 8,
    difficulty: "medium",
    question: "What is 12 × 8?",
    options: ["84", "92", "96", "108"],
    answer: "96",
  },
  {
    id: 9,
    difficulty: "medium",
    question: "Who wrote Romeo and Juliet?",
    options: ["Charles Dickens", "Mark Twain", "Homer", "William Shakespeare"],
    answer: "William Shakespeare",
  },
  {
    id: 10,
    difficulty: "medium",
    question: "Which data structure follows LIFO order?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },

  // ── HARD ──────────────────────────────────────────────────
  {
    id: 11,
    difficulty: "hard",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    id: 12,
    difficulty: "hard",
    question: "Which HTTP method is idempotent but NOT safe?",
    options: ["GET", "DELETE", "POST", "PATCH"],
    answer: "DELETE",
  },
  {
    id: 13,
    difficulty: "hard",
    question: "In React, what hook replaces componentDidMount?",
    options: ["useState", "useEffect", "useRef", "useCallback"],
    answer: "useEffect",
  },
  {
    id: 14,
    difficulty: "hard",
    question: "Which sorting algorithm has O(n log n) worst-case?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
    answer: "Merge Sort",
  },
  {
    id: 15,
    difficulty: "hard",
    question: "What does the 'S' in SOLID principles stand for?",
    options: [
      "Scalability",
      "Single Responsibility",
      "Static Typing",
      "Synchronous",
    ],
    answer: "Single Responsibility",
  },
];

export default questions;
