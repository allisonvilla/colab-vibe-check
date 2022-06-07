const questionBank = {
  // Questions that are consistently asked at the beginning of the quiz
  consistent: {
    q1: {
      question: "Which of these options would you prefer for a first date?",
      options: [
        {
          option: "Going for a walk.",
          value: "goWithTheFlow",
          weight: 1
        },
        {
          option: "Watching a movie.",
          value: "goWithTheFlow",
          weight: 1
        },
        {
          option: "A quick coffee date.",
          value: "workingOnMyself",
          weight: 1
        },
        {
          option: "Going out to a bar.",
          value: "casualDater",
          weight: 1
        }
      ]
    },
    q2: {
      question: "What are you looking for most right now?",
      options: [
        {
          option: "Casual fun, no commitments.",
          value: "casualDater",
          weight: 3
        },
        {
          option: "Not actively looking for anything, too busy right now.",
          value: "workingOnMyself",
          weight: 3
        },
        {
          option: "Open to meeting people and seeing where things go!",
          value: "goWithTheFlow",
          weight: 3
        },
        {
          option: "Forming a meaningful romantic connection.",
          value: "seriousDater",
          weight: 3
        }
      ]
    },
    q3: {
      question: "What do you need most from a potential partner?",
      options: [
        {
          option: "Connection and love.",
          value: "seriousDater",
          weight: 1
        },
        {
          option: "Support and mutual growth.",
          value: "workingOnMyself",
          weight: 1
        },
        {
          option: "Humour and fun.",
          value: "casualDater",
          weight: 1
        },
        {
          option: "Mystery and variety.",
          value: "goWithTheFlow",
          weight: 1
        }
      ]
    },
    q4: {
      question: "What type of goal are you trying to accomplish most right now?",
      options: [
        {
          option: "Personal Development",
          value: "workingOnMyself",
          weight: 1
        },
        {
          option: "Relationship",
          value: "seriousDater",
          weight: 1
        },
        {
          option: "Career or Financial",
          value: "workingOnMyself",
          weight: 1
        },
        {
          option: "Spiritual or Societal",
          value: "casualDater",
          weight: 1
        }
      ]
    },
    q5: {
      question: "Assuming you met someone you like here, what would be your next preferred step?",
      options: [
        {
          option: "Learning a specific skill.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Skydiving.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Climbing Mount Everest.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Moving to a favourite city.",
          value: "noEffect",
          weight: 0
        }
      ]
    }
  },
  // Questions that will be randomized
  random: {
    q6: {
      question: "Choose one thing you want to have on your bucket list:",
      showTextInput: true,
      options: [
        {
          option: "Learning a specific skill.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Skydiving.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Climbing Mount Everest.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Moving to a favourite city.",
          value: "noEffect",
          weight: 0
        }
      ]
    },
    q7: {
      question: "If all animals were the same size, who would win in a fight?",
      showTextInput: true,
      options: [
        {
          option: "Hippos",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Ostriches",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Spiders",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Pirañas",
          value: "noEffect",
          weight: 0
        }
      ]
    },
    q8: {
      question: "What is your favourite smell?",
      showTextInput: true,
      options: [
        {
          option: "Fire at a campsite.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Summertime rain.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Fresh laundry.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "My favourite meal.",
          value: "noEffect",
          weight: 0
        }
      ]
    },
    q9: {
      question: "What superpower would you want to have?",
      showTextInput: true,
      options: [
        {
          option: "Time travel",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Super strength",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Invisibility",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Teleportation",
          value: "noEffect",
          weight: 0
        }
      ]
    },
    q10: {
      question: "What would you do with 1 million dollars?",
      showTextInput: true,
      options: [
        {
          option: "Travel the world.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Buy a nice house.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Invest it.",
          value: "noEffect",
          weight: 0
        },
        {
          option: "Donate to friends, family, and those in need.",
          value: "noEffect",
          weight: 0
        }
      ]
    }
  }
};

export default questionBank;
