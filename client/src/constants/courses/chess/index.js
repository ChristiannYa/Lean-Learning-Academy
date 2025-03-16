import chessPieces from '../../../assets/icons/chess-page/pieces';

export const informationCards = [
  {
    id: 1,
    title: 'What is Chess? ♟️',
    content:
      "Chess is more than a game—it's a battle of minds. Originating in India, it has symbolized epic conflicts for centuries: light vs. shadow, day vs. night, strategy vs. instinct. The ultimate goal? Checkmate—an ancient Arabic term meaning 'the king is dead.' Outsmart your opponent, seize control, and claim victory!",
  },
  {
    id: 2,
    title: 'Chess Benefits 🧠',
    content:
      'Chess enhances critical thinking, problem-solving, and concentration skills. Regular play improves memory, boosts creativity, and helps develop strategic planning abilities. Studies show chess players often excel academically and professionally due to their enhanced cognitive capabilities.',
    sourceLink: 'https://www.scirp.org/journal/paperinformation?paperid=63668',
    sourceLinkText: 'Read research study',
  },
  {
    id: 3,
    title: 'Teaching Method 📚',
    content:
      'My step-by-step methodology breaks down complex concepts into digestible modules. From basic piece movements to tactics and endgame theory, I will guide you through a structured learning journey designed for consistent progress.',
  },
  {
    id: 4,
    title: 'Join Our Community ♞',
    content:
      'Become part of our vibrant chess community! Participate in tournaments (coming soon), join study groups. The platform offers both online and in-person options to match your preferred learning style.',
  },
];

export const lessons = [
  {
    id: 1,
    title: 'Weeks 1-4',
    topics: [
      {
        title: 'Introduction to Tactics',
        description:
          'Understand what tactics are and why they are essential in chess.',
      },
      {
        title: 'Forks',
        description: 'Learn how to attack two pieces at once using forks.',
      },
      {
        title: 'Pins',
        description: "Hold down an opponent's piece by using a pin tactic.",
      },
      {
        title: 'Skewers',
        description:
          "Force an opponent's stronger piece to move, winning material.",
      },
      {
        title: 'Basic Checkmates',
        description:
          'Master simple checkmating patterns like Two-Rook Mate and King & Queen Mate.',
      },
    ],
  },
  {
    id: 2,
    title: 'Weeks 5-8',
    topics: [
      {
        title: 'Candidate Moves',
        description:
          'Think ahead by considering multiple good moves before deciding.',
      },
      {
        title: 'Controlling the Center',
        description:
          "Learn why controlling the board's center gives you an advantage.",
      },
      {
        title: 'Piece Activity',
        description:
          'Keep your pieces optimally placed for maximum effectiveness.',
      },
      {
        title: 'Common Opening Mistakes',
        description: 'Avoid beginner traps and bad opening moves.',
      },
    ],
  },
  {
    id: 3,
    title: 'Weeks 9-12',
    topics: [
      {
        title: 'Tactics Review',
        description: 'Solve tactical puzzles to reinforce your learning.',
      },
      {
        title: 'Calculation Techniques',
        description:
          "Develop skills to see moves ahead and predict your opponent's plans.",
      },
      {
        title: 'Learning from Mistakes',
        description:
          'Understand how to spot and fix your mistakes in past games.',
      },
      {
        title: 'Studying Grandmaster Games',
        description: 'See how top players think and apply their strategies.',
      },
    ],
  },
  {
    id: 4,
    title: 'Weeks 13-16',
    topics: [
      {
        title: 'Simulated Tournaments',
        description:
          'Practice under pressure by playing in a simulated tournament.',
      },
      {
        title: 'Advanced Opening Strategies',
        description: 'Learn some advanced opening traps and moves.',
      },
      {
        title: 'Endgame Theory',
        description: 'Introduction to key endgame principles and strategies.',
      },
    ],
  },
  {
    id: 5,
    title: 'Weeks 17-20',
    topics: [
      {
        title: 'Advanced Tactics',
        description:
          'Learn advanced tactics such as Zwischenzug and Underpromotion.',
      },
      {
        title: 'Tournament Preparation',
        description:
          'Get ready for tournaments by analyzing your strengths and weaknesses.',
      },
    ],
  },
  {
    id: 6,
    title: 'Weeks 21-24',
    topics: [
      {
        title: 'Final Tournament',
        description:
          'Participate in a final simulated tournament with feedback.',
      },
      {
        title: 'Practical Chess Advice',
        description:
          'Learn how to study effectively and improve at your own pace.',
      },
      {
        title: 'Setting Future Goals',
        description:
          'Set your chess goals for the next level and continue learning.',
      },
    ],
  },
];

export const chessPiecesArray = [
  {
    id: 1,
    src: chessPieces.rookB,
    alt: 'Black Rook',
  },
  {
    id: 2,
    src: chessPieces.rookW,
    alt: 'White Rook',
  },

  {
    id: 3,
    src: chessPieces.knightB,
    alt: 'Black Knight',
  },
  {
    id: 4,
    src: chessPieces.knightW,
    alt: 'White Knight',
  },

  {
    id: 5,
    src: chessPieces.bishopB,
    alt: 'Black Bishop',
  },
  {
    id: 6,
    src: chessPieces.bishopW,
    alt: 'White Bishop',
  },

  {
    id: 7,
    src: chessPieces.queenB,
    alt: 'Black Queen',
  },
  {
    id: 8,
    src: chessPieces.queenW,
    alt: 'White Queen',
  },

  {
    id: 9,
    src: chessPieces.kingB,
    alt: 'Black King',
  },
  {
    id: 10,
    src: chessPieces.kingW,
    alt: 'White King',
  },

  {
    id: 11,
    src: chessPieces.pawnB,
    alt: 'Black Pawn',
  },
  {
    id: 12,
    src: chessPieces.pawnW,
    alt: 'White Pawn',
  },
];
