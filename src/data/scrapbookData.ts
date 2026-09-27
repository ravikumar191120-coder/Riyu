export interface PolaroidItem {
  id: number;
  caption: string;
  roastSubtitle: string;
  date: string;
  location: string;
  tapeColor: 'yellow' | 'pink' | 'green' | 'blue';
  rotation: string;
  themeGradient: string;
  iconName: string;
  illustrationType: string;
  reactions: {
    laughs: number;
    brains: number;
    hearts: number;
    skulls: number;
  };
  customImageUrl?: string;
  objectPosition?: string;
  fitMode?: 'cover' | 'contain';
}

export const INITIAL_POLAROIDS: PolaroidItem[] = [
  {
    id: 1,
    caption: "Belbuddhi in her natural habitat 📸",
    roastSubtitle: "Caught in 4K existing peacefully with negative 2 thoughts in that head.",
    date: "28 September Special",
    location: "Probably lost somewhere",
    tapeColor: "yellow",
    rotation: "-rotate-2",
    themeGradient: "from-amber-100 to-orange-200",
    iconName: "Camera",
    illustrationType: "nature",
    customImageUrl: "https://files.catbox.moe/yv8jn9.jpeg",
    objectPosition: "object-[center_15%]",
    fitMode: "cover",
    reactions: { laughs: 42, brains: 1, hearts: 89, skulls: 19 }
  },
  {
    id: 2,
    caption: "When 1 brain cell is working at 100% capacity 🧠",
    roastSubtitle: "Smoke literally coming out of her ears just to calculate the 10% tip.",
    date: "Exam Season / Menu Reading",
    location: "Mental Breakdown Zone",
    tapeColor: "pink",
    rotation: "rotate-3",
    themeGradient: "from-rose-100 to-pink-200",
    iconName: "Brain",
    illustrationType: "brain",
    customImageUrl: "https://files.catbox.moe/izhcai.jpeg",
    objectPosition: "object-top",
    fitMode: "contain",
    reactions: { laughs: 78, brains: 0, hearts: 45, skulls: 34 }
  },
  {
    id: 3,
    caption: "Overthinking about literally nothing at 3 AM",
    roastSubtitle: "'What if penguins secretly have knees?' — Riya at 3:17 AM on WhatsApp.",
    date: "3:00 AM Sharp",
    location: "Under the Blanket",
    tapeColor: "blue",
    rotation: "-rotate-1",
    themeGradient: "from-indigo-100 to-blue-200",
    iconName: "Moon",
    illustrationType: "night",
    customImageUrl: "https://files.catbox.moe/zkhj24.jpeg",
    reactions: { laughs: 65, brains: 2, hearts: 92, skulls: 12 }
  },
  {
    id: 4,
    caption: "Acting innocent like she didn't just roast me 2 mins ago",
    roastSubtitle: "That pure angel face right after destroying my self-esteem in front of everyone.",
    date: "Every Single Day",
    location: "Crime Scene",
    tapeColor: "green",
    rotation: "rotate-2",
    themeGradient: "from-emerald-100 to-teal-200",
    iconName: "Smile",
    illustrationType: "innocent",
    customImageUrl: "https://files.catbox.moe/0g65sw.jpeg",
    reactions: { laughs: 104, brains: 3, hearts: 56, skulls: 40 }
  },
  {
    id: 5,
    caption: "Diva mode activated 💅",
    roastSubtitle: "Walking in 45 minutes late like the event couldn't start without her.",
    date: "Always Late O'Clock",
    location: "Main Stage Entrance",
    tapeColor: "pink",
    rotation: "-rotate-3",
    themeGradient: "from-fuchsia-100 to-rose-200",
    iconName: "Sparkles",
    illustrationType: "diva",
    customImageUrl: "https://files.catbox.moe/65ofrp.jpeg",
    reactions: { laughs: 59, brains: 4, hearts: 112, skulls: 8 }
  },
  {
    id: 6,
    caption: "Taking 50 photos just to choose zero",
    roastSubtitle: "'Soyam take from this angle... no lower... wait my hair... delete all of them.'",
    date: "Any Cafe Visit",
    location: "Storage Full Alert",
    tapeColor: "yellow",
    rotation: "rotate-1",
    themeGradient: "from-amber-50 to-amber-200",
    iconName: "Image",
    illustrationType: "camera_roll",
    customImageUrl: "https://files.catbox.moe/fw5t6p.jpeg",
    reactions: { laughs: 135, brains: 1, hearts: 41, skulls: 52 }
  },
  {
    id: 7,
    caption: "The rare 10/10 aesthetic picture ✨",
    roastSubtitle: "Credit where credit is due: photographer Soyam sacrificed his knees for this shot.",
    date: "Golden Hour Miracle",
    location: "Aesthetic Sun Spot",
    tapeColor: "green",
    rotation: "-rotate-2",
    themeGradient: "from-lime-100 to-emerald-200",
    iconName: "Sun",
    illustrationType: "aesthetic",
    customImageUrl: "https://files.catbox.moe/jsmh8e.jpeg",
    reactions: { laughs: 30, brains: 7, hearts: 168, skulls: 4 }
  },
  {
    id: 8,
    caption: "Permanent confusion look 😵💫",
    roastSubtitle: "When the teacher asked a question and her soul temporarily left her body.",
    date: "Lecture Hall Trauma",
    location: "404 Not Found",
    tapeColor: "blue",
    rotation: "rotate-3",
    themeGradient: "from-sky-100 to-cyan-200",
    iconName: "HelpCircle",
    illustrationType: "confused",
    customImageUrl: "https://files.catbox.moe/7l2mfv.jpeg",
    reactions: { laughs: 98, brains: 0, hearts: 60, skulls: 29 }
  },
  {
    id: 9,
    caption: "Professional late replier badge 📱",
    roastSubtitle: "Online 2 mins ago, replies after 3 business quarters with 'lmao yeah'.",
    date: "Last seen: Yesterday",
    location: "Unopened Chats Cemetery",
    tapeColor: "pink",
    rotation: "-rotate-1",
    themeGradient: "from-purple-100 to-pink-200",
    iconName: "MessageCircle",
    illustrationType: "texting",
    customImageUrl: "https://files.catbox.moe/pbvvno.jpeg",
    reactions: { laughs: 147, brains: 1, hearts: 39, skulls: 63 }
  },
  {
    id: 10,
    caption: "Mood swings loading: 99%...",
    roastSubtitle: "From 'I love everyone' to 'If anyone breathes near me they will perish' in 4 seconds.",
    date: "Hanger Hour",
    location: "Danger Zone",
    tapeColor: "yellow",
    rotation: "rotate-2",
    themeGradient: "from-amber-100 to-red-200",
    iconName: "Zap",
    illustrationType: "moods",
    customImageUrl: "https://files.catbox.moe/p6qcle.jpeg",
    objectPosition: "object-[center_12%]",
    fitMode: "cover",
    reactions: { laughs: 88, brains: 2, hearts: 73, skulls: 45 }
  },
  {
    id: 11,
    caption: "Laughing at the dumbest things possible",
    roastSubtitle: "Making that silent dolphin wheeze laugh in a dead quiet library.",
    date: "Uncontrollable Gigglefest",
    location: "Nowhere Safe",
    tapeColor: "green",
    rotation: "-rotate-3",
    themeGradient: "from-teal-100 to-emerald-200",
    iconName: "Laugh",
    illustrationType: "laughing",
    customImageUrl: "https://files.catbox.moe/pmjg84.jpeg",
    reactions: { laughs: 172, brains: 2, hearts: 98, skulls: 15 }
  },
  {
    id: 12,
    caption: "The main character syndrome 🌟",
    roastSubtitle: "Looking out the auto/cab window pretending to be in a tragic Bollywood music video.",
    date: "Rainy Cab Ride",
    location: "Sad BGM Universe",
    tapeColor: "blue",
    rotation: "rotate-1",
    themeGradient: "from-blue-100 to-violet-200",
    iconName: "Music",
    illustrationType: "bollywood",
    customImageUrl: "https://files.catbox.moe/lqm08l.jpeg",
    reactions: { laughs: 115, brains: 3, hearts: 120, skulls: 21 }
  },
  {
    id: 13,
    caption: "Looking like a civilized human being for once",
    roastSubtitle: "Dressed up nicely so everyone thinks she has her entire life put together.",
    date: "Family Function",
    location: "Disguise Station",
    tapeColor: "pink",
    rotation: "-rotate-2",
    themeGradient: "from-rose-100 to-orange-200",
    iconName: "Award",
    illustrationType: "formal",
    customImageUrl: "https://files.catbox.moe/laa3vx.jpeg",
    reactions: { laughs: 52, brains: 8, hearts: 140, skulls: 10 }
  },
  {
    id: 14,
    caption: "The partner in all crime & bad decisions",
    roastSubtitle: "Me: 'We shouldn't do this.' Riya: 'Hold my bag, we're doing this.'",
    date: "Every Weekend",
    location: "Trouble HQ",
    tapeColor: "yellow",
    rotation: "rotate-3",
    themeGradient: "from-yellow-100 to-amber-200",
    iconName: "Flame",
    illustrationType: "crime_partner",
    customImageUrl: "https://files.catbox.moe/seinf5.jpeg",
    reactions: { laughs: 160, brains: 2, hearts: 180, skulls: 27 }
  },
  {
    id: 15,
    caption: "Happy Birthday Belbuddhi, stay exactly as weird as you are! 🎂",
    roastSubtitle: "World would be 1000x more boring without you. Never change, idiot.",
    date: "28 September (Today!) 🎉",
    location: "Best Friend Hall of Fame",
    tapeColor: "green",
    rotation: "-rotate-1",
    themeGradient: "from-amber-200 via-rose-200 to-pink-200",
    iconName: "Gift",
    illustrationType: "birthday_finale",
    customImageUrl: "https://files.catbox.moe/ev2axy.jpeg",
    reactions: { laughs: 80, brains: 100, hearts: 299, skulls: 1 }
  }
];

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
    roastNote: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When Google Maps announces 'Turn Right in 200m', what does Belbuddhi do?",
    category: "Navigation Skills 🗺️",
    options: [
      {
        label: "A",
        text: "Turns left, takes a U-turn, enters a lane, and calls Soyam for emergency rescue.",
        isCorrect: true,
        roastNote: "Spot on! Her internal compass points directly toward chaos."
      },
      {
        label: "B",
        text: "Follows directions calmly and reaches the destination on time.",
        isCorrect: false,
        roastNote: "Fake news. This has literally never happened in human history."
      },
      {
        label: "C",
        text: "Argues with the Google Maps voice about why it has an attitude.",
        isCorrect: false,
        roastNote: "Very close second, but she usually gets lost first."
      },
      {
        label: "D",
        text: "Throws the phone in her bag and follows a random butterfly.",
        isCorrect: false,
        roastNote: "Tempting, but Soyam's phone rings within 2 minutes."
      }
    ]
  },
  {
    id: 2,
    question: "What is Riya's official WhatsApp response turnaround time?",
    category: "Communication Speed 📱",
    options: [
      {
        label: "A",
        text: "Within 30 seconds with an instant reply.",
        isCorrect: false,
        roastNote: "Are you sure you're texting the real Riya?"
      },
      {
        label: "B",
        text: "Online 2 mins ago, replies after 3 business quarters with 'lmao yeah'.",
        isCorrect: true,
        roastNote: "100% Accurate! Fastest carrier pigeon in India beats her reply speed."
      },
      {
        label: "C",
        text: "Only responds via random uncaptioned Instagram reels.",
        isCorrect: false,
        roastNote: "Also true, but 'lmao yeah' 4 days later is the real signature."
      },
      {
        label: "D",
        text: "Calls back immediately.",
        isCorrect: false,
        roastNote: "Riya answering an unexpected phone call? Impossible."
      }
    ]
  },
  {
    id: 3,
    question: "If Riya's wardrobe is full of 150+ outfits, how many clothes does she have to wear?",
    category: "Diva Mathematics 👗",
    options: [
      {
        label: "A",
        text: "Enough clothes to dress a small village.",
        isCorrect: false,
        roastNote: "Technically yes, but emotionally zero."
      },
      {
        label: "B",
        text: "Exactly 0. 'Soyam I literally have zero outfits, I can't go anywhere.'",
        isCorrect: true,
        roastNote: "The Diva Paradox! Sits on the bed surrounded by clothes declaring bankruptcy."
      },
      {
        label: "C",
        text: "She borrows Soyam's oversized hoodie anyway.",
        isCorrect: false,
        roastNote: "She definitely does, but the complaint comes first!"
      },
      {
        label: "D",
        text: "Picks the first thing she sees.",
        isCorrect: false,
        roastNote: "That process takes a minimum of 45 minutes of intense contemplation."
      }
    ]
  },
  {
    id: 4,
    question: "How many active brain cells are shared between Riya and Soyam?",
    category: "Neuroscience Lab 🧠",
    options: [
      {
        label: "A",
        text: "Billions of sophisticated neural synapses.",
        isCorrect: false,
        roastNote: "Overestimation of the century."
      },
      {
        label: "B",
        text: "Exactly 1 brain cell, and it runs on a 56k dial-up modem.",
        isCorrect: true,
        roastNote: "Correct! And whoever is talking first gets custody for 10 minutes."
      },
      {
        label: "C",
        text: "Zero on weekdays, 0.5 on weekends.",
        isCorrect: false,
        roastNote: "Close, but the 1 shared brain cell works overtime during food decisions."
      },
      {
        label: "D",
        text: "It only activates when someone mentions momos or gossip.",
        isCorrect: false,
        roastNote: "That's when it overclocks, but baseline is strictly 1."
      }
    ]
  },
  {
    id: 5,
    question: "What is Rule #1 of the Soyam-Riya Friendship Constitution?",
    category: "Sacred Dosti Laws 📜",
    options: [
      {
        label: "A",
        text: "Food pictures must be sent immediately, or face a 24-hour roast penalty.",
        isCorrect: true,
        roastNote: "Article 420: Never eat good food without making your bestie jealous first."
      },
      {
        label: "B",
        text: "Soyam is allowed to be wrong (Never!).",
        isCorrect: false,
        roastNote: "Rule 2 states Soyam is always right, but Rule 1 is strictly food."
      },
      {
        label: "C",
        text: "Be polite and formal at all times.",
        isCorrect: false,
        roastNote: "Politeness? In this friendship? Absolutely not."
      },
      {
        label: "D",
        text: "Never send voice notes longer than 10 seconds.",
        isCorrect: false,
        roastNote: "We send 4-minute podcast episodes about why a pigeon looked at us funny."
      }
    ]
  },
  {
    id: 6,
    question: "What is the ultimate, most genuine Birthday wish for Riya this year?",
    category: "The Grand Finale 🎂",
    options: [
      {
        label: "A",
        text: "Endless success, radiant health, and at least 2 bonus brain cells.",
        isCorrect: false,
        roastNote: "A wonderful wish, but look at option D!"
      },
      {
        label: "B",
        text: "Trips that actually make it out of the WhatsApp group chat.",
        isCorrect: false,
        roastNote: "The dream of every bestie duo!"
      },
      {
        label: "C",
        text: "Unlimited coffee, zero stress, and staying weird together forever.",
        isCorrect: false,
        roastNote: "100% wholesome vibes!"
      },
      {
        label: "D",
        text: "ALL OF THE ABOVE + Lifetime supply of chai, laughs, and pure dosti! 💖",
        isCorrect: true,
        roastNote: "BINGO! The absolute best birthday blessing for the one and only Belbuddhi!"
      }
    ]
  }
];

export interface StickyNote {
  id: string;
  category: 'roast' | 'wholesome' | 'rules' | 'wishes';
  title: string;
  content: string;
  author: string;
  tag: string;
  colorClass: string;
  pinColor: string;
  angle: string;
}

export const STICKY_NOTES: StickyNote[] = [
  // Roast Central
  {
    id: "r1",
    category: "roast",
    title: "WiFi Brain Cell Syndrome 📡",
    content: "Scientists have officially confirmed: Riya's brain runs on 2G edge connection with 890ms packet loss. If you ask her what she wants to eat, the answer will arrive in 4-6 business weeks.",
    author: "Soyam's Daily Observation",
    tag: "#DialUpBrain",
    colorClass: "bg-amber-100 border-amber-300 text-amber-950",
    pinColor: "bg-red-500",
    angle: "-rotate-2"
  },
  {
    id: "r2",
    category: "roast",
    title: "The Google Maps Navigation Disaster 🗺️",
    content: "If Google Maps says 'Turn Left in 50 meters', Riya will make a U-turn, enter a grocery store, ask 3 random uncles, and still end up in another state. Never let her hold the GPS.",
    author: "Traumatized Passenger Soyam",
    tag: "#LostInBroadDaylight",
    colorClass: "bg-orange-100 border-orange-300 text-orange-950",
    pinColor: "bg-blue-500",
    angle: "rotate-3"
  },
  {
    id: "r3",
    category: "roast",
    title: "1% Battery Lifestyle 🔋",
    content: "Living on the edge of catastrophe. Her phone is constantly at 2%, low power mode on, 74 background apps open, and she'll still be looking for a charger like it's a scavenger hunt.",
    author: "The Emergency Contact",
    tag: "#DangerouslyLowBattery",
    colorClass: "bg-rose-100 border-rose-300 text-rose-950",
    pinColor: "bg-amber-500",
    angle: "-rotate-1"
  },
  {
    id: "r4",
    category: "roast",
    title: "The 'I Have Nothing To Wear' Crisis 👗",
    content: "Wardrobe overflowing with clothes. Can literally clothe an entire neighborhood. Yet sits on the bed staring into the abyss saying 'I have zero outfits'. Make it make sense.",
    author: "Soyam (Waiting for 2 hours)",
    tag: "#DivaParadox",
    colorClass: "bg-yellow-100 border-yellow-300 text-yellow-950",
    pinColor: "bg-emerald-500",
    angle: "rotate-2"
  },

  // Wholesome Dosti
  {
    id: "w1",
    category: "wholesome",
    title: "The 3 AM Rant Safety Net 🌙",
    content: "Jokes aside, knowing I can drop a chaotic 4-minute voice note about literally anything and you'll listen without judgment (or roast me back with accuracy) is priceless. True friendship right here.",
    author: "Grateful Soyam",
    tag: "#UnfilteredBond",
    colorClass: "bg-sky-100 border-sky-300 text-sky-950",
    pinColor: "bg-indigo-500",
    angle: "rotate-2"
  },
  {
    id: "w2",
    category: "wholesome",
    title: "Unapologetic Realness 🤝",
    content: "In a world full of fake formalities, having a best friend where we can sit in comfortable silence, share dumb memes, and tell each other the brutal truth is the biggest blessing.",
    author: "Bestie Truths",
    tag: "#ZeroPretence",
    colorClass: "bg-emerald-100 border-emerald-300 text-emerald-950",
    pinColor: "bg-rose-500",
    angle: "-rotate-2"
  },
  {
    id: "w3",
    category: "wholesome",
    title: "Partner in All Chaos 🚀",
    content: "From random spontaneous food runs to surviving life's biggest stressful milestones, there's nobody else I'd rather have in my corner as my honorary partner-in-crime.",
    author: "Soyam",
    tag: "#AlwaysGotYourBack",
    colorClass: "bg-teal-100 border-teal-300 text-teal-950",
    pinColor: "bg-amber-500",
    angle: "rotate-1"
  },

  // Golden Rules
  {
    id: "g1",
    category: "rules",
    title: "Rule #1: Food Photos are Mandatory 🍕",
    content: "Whenever you order food, an immediate aesthetic (or messy) picture must be sent to me before you take a bite. Failure to comply will result in a 24-hour roast penalty.",
    author: "The Friendship Constitution",
    tag: "#ChaiAndMomosProtocol",
    colorClass: "bg-lime-100 border-lime-300 text-lime-950",
    pinColor: "bg-red-500",
    angle: "-rotate-3"
  },
  {
    id: "g2",
    category: "rules",
    title: "Rule #2: Soyam is Right by Default ⚖️",
    content: "In any theoretical or practical debate: Soyam's logic is supreme. Even if Soyam is 100% wrong, refer to rule 2A: Soyam was merely testing your analytical capabilities.",
    author: "Soyam (Chief Executive Friend)",
    tag: "#Article420OfDosti",
    colorClass: "bg-amber-100 border-amber-300 text-amber-950",
    pinColor: "bg-blue-500",
    angle: "rotate-2"
  },
  {
    id: "g3",
    category: "rules",
    title: "Rule #3: Never Grow Up Completely 🎈",
    content: "No matter how old we get, we are legally required to laugh at silly dad jokes, play innocent pranks, and keep our goofy teenage banter alive forever. Growing old is mandatory; growing boring is forbidden.",
    author: "Forever Dosti Pact",
    tag: "#StayChildish",
    colorClass: "bg-violet-100 border-violet-300 text-violet-950",
    pinColor: "bg-emerald-500",
    angle: "-rotate-1"
  },

  // Birthday Wishes
  {
    id: "b1",
    category: "wishes",
    title: "May Your Brain Receive An Upgrade 🧠⚡",
    content: "On your birthday, my most sincere prayer to the universe is that you receive at least 2 extra brain cells this year so the current one doesn't feel so lonely. Happy Birthday Riya!",
    author: "Soyam's Blessing #1",
    tag: "#UpgradePending",
    colorClass: "bg-pink-100 border-pink-300 text-pink-950",
    pinColor: "bg-rose-500",
    angle: "rotate-3"
  },
  {
    id: "b2",
    category: "wishes",
    title: "Success, Health & Endless Chai ☕✨",
    content: "May every goal you chase turn to gold. May you conquer your career, travel to all the dreamy aesthetic cities on your Pinterest board, and stay blessed with great health and peace.",
    author: "Soyam's Blessing #2",
    tag: "#BigDreamsOnly",
    colorClass: "bg-amber-100 border-amber-300 text-amber-950",
    pinColor: "bg-amber-600",
    angle: "-rotate-2"
  },
  {
    id: "b3",
    category: "wishes",
    title: "Infinite Good Memories Ahead 🎂❤️",
    content: "Happy Birthday Belbuddhi! Here's to another year of terrible jokes, epic road trips, unlimited tea-spilling sessions, and making memories that we'll be laughing about when we're 80.",
    author: "Soyam",
    tag: "#BelbuddhiForever",
    colorClass: "bg-emerald-100 border-emerald-300 text-emerald-950",
    pinColor: "bg-purple-500",
    angle: "rotate-1"
  }
];

export const SECRET_LETTER_CONTENT = {
  date: "September 28, 2026",
  recipient: "Dearest Belbuddhi (Riya)",
  paragraphs: [
    "If you're reading this, congratulations! You have officially survived another 365 days of walking around this planet with that single lonely brain cell, and more importantly, survived another year of tolerating my non-stop roasting.",
    "I made this digital scrapbook for you because a regular generic birthday message just wouldn't do justice to the sheer amount of chaos, laughter, and inside jokes we've accumulated. Purely 100% certified Best Friend energy, as promised.",
    "You know I give you a hard time about your late replies, your navigational disasters, and your questionable 3 AM theories. But behind all the roasting, I want you to know how genuinely lucky I feel to have a friend like you.",
    "In a world where people are constantly putting on masks, you are completely, unapologetically yourself. You're the one person I can text without filtering my thoughts, celebrate the small wins with, and rant to when everything is falling apart.",
    "This year, I wish you everything you've been working hard for: explosive success in your ambitions, unshakeable confidence, peaceful sleep, trips that actually make it out of the group chat, and an endless supply of good coffee and snacks.",
    "Keep shining, stay weird, never lose that contagious laugh, and remember: no matter how old we get or where life takes us, you will forever be my favorite Belbuddhi.",
    "Happy Birthday Riya! Go eat an obnoxious amount of cake today. 🎂🎉"
  ],
  signoff: "Your permanent best friend & roast master,",
  sender: "Soyam 👊"
};
