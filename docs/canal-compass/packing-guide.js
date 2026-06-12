const PACKING_GUIDE = {
  overview: {
    family: "2 adults (49, 48) + 3 boys (16, 12, 10)",
    dates: "July 7–16, 2026 (10 days)",
    accommodation: [
      "7 nights in Medemblik (July 7–13 morning)",
      "3 nights in Amsterdam (July 13–16)",
    ],
    transport: [
      "Rental car from Schiphol for Medemblik days and transfer via Walibi to Amsterdam",
      "Public transport and walking/cycling in Amsterdam",
    ],
    interests:
      "Outdoor activities, theme parks, villages, canals, urban sightseeing, oddities/interactive museums; minimal art and heavy history; skip zoo.",
  },
  days: [
    {
      day: 1,
      heading: "Day 1 – Tuesday, July 7: Arrival & Medemblik",
      blocks: [
        { type: "item", text: "Arrive at Schiphol around noon, collect luggage." },
        { type: "item", text: "Pick up rental car at Schiphol." },
        { type: "item", text: "Drive to Medemblik (about 1.5 hours, depending on traffic)." },
        { type: "item", text: "Check in to the Medemblik accommodation and settle in." },
        { type: "group", label: "Late afternoon:", items: [
          "Walk around Medemblik harbor and waterfront.",
          "See the castle exterior (Kasteel Radboud) from outside.",
          "Optional short boat ride on Lake IJsselmeer if available.",
        ]},
        { type: "item", text: "Evening: Casual dinner in Medemblik and early night to recover from travel." },
      ],
    },
    {
      day: 2,
      heading: "Day 2 – Wednesday, July 8: Giethoorn & Dwarsgracht",
      blocks: [
        { type: "item", text: "Early departure from Medemblik (around 07:30) to Giethoorn (about 1.5–2 hours' drive)." },
        { type: "item", text: "Arrive in Giethoorn around 09:30–10:00, park in one of the main parking areas." },
        { type: "group", label: "Late morning in Giethoorn:", items: [
          "Walk through the village: canals, thatched-roof houses, small bridges.",
          "Enjoy the scenery and take photos.",
        ]},
        { type: "group", label: "Late morning / midday:", items: [
          "Rent a small electric boat in Giethoorn and do a 60–90 minute canal cruise.",
        ]},
        { type: "item", text: "Lunch in Giethoorn (12:30–13:30) at one of the cafes or restaurants by the water." },
        { type: "option", title: "Option A – Extra Boat Time", items: [
          "Drive from Giethoorn to Dwarsgracht (about 5 minutes).",
          "Rent a boat in or near Dwarsgracht (or follow a boat route from Giethoorn that allows going toward Dwarsgracht).",
          "Explore the quiet village canal of Dwarsgracht by boat (about 60–90 minutes).",
          "Short walk along the canal if you like the scenery.",
        ]},
        { type: "option", title: "Option B – More Walking/Nature, Less Boat", items: [
          "Drive from Giethoorn to Dwarsgracht.",
          "Walk along the canal in Dwarsgracht (around 30–45 minutes).",
          "Optionally follow part of a local walking route that passes through village and wetland areas (short section, not the full long route).",
        ]},
        { type: "item", text: "Mid/late afternoon: Drive back from the Dwarsgracht/Giethoorn area to Medemblik (aim to arrive by around 17:30)." },
        { type: "item", text: "Evening in Medemblik: Relax and dinner." },
      ],
    },
    {
      day: 3,
      heading: "Day 3 – Thursday, July 9: Efteling (Full-Day Theme Park)",
      blocks: [
        { type: "item", text: "Early departure from Medemblik (around 07:30) to Efteling (about 2.5–3 hours' drive)." },
        { type: "item", text: "Arrive at Efteling around 10:30–11:00, park and enter the park." },
        { type: "group", label: "Spend the day at Efteling (roughly 11:00–18:00):", items: [
          "Focus on outdoor rides and attractions that fit the kids' ages.",
          "Explore areas like Fairy Tale Forest, Droomvlucht, roller coasters, etc.",
        ]},
        { type: "item", text: "Dinner in or near Efteling (around 18:30–19:30)." },
        { type: "item", text: "Optional: Stay for the evening water show (Aquanura) if everyone has enough energy." },
        { type: "item", text: "Depart Efteling around 20:30 (earlier if tired)." },
        { type: "item", text: "Late drive back to Medemblik; arrive around 23:00–23:30." },
      ],
    },
    {
      day: 4,
      heading: "Day 4 – Friday, July 10: Edam, Volendam, Marken & Zaanse Schans",
      blocks: [
        { type: "item", text: "Morning: Depart Medemblik around 08:00." },
        { type: "item", text: "Drive to Edam (cheese village) – about 1–1.5 hours." },
        { type: "group", label: "Edam (09:30–10:30):", items: [
          "Walk the old town center.",
          "Visit cheese shops and see the atmosphere of the cheese village.",
        ]},
        { type: "item", text: "Drive from Edam to Volendam (about 15 minutes)." },
        { type: "group", label: "Volendam (11:00–13:00):", items: [
          "Walk along the harbor and marina.",
          "See traditional houses and fishing village atmosphere.",
          "Optional short visit to a small local museum if you feel like it.",
        ]},
        { type: "item", text: "Lunch in Volendam (around 13:00–14:00)." },
        { type: "item", text: "Drive from Volendam to Marken (around 20 minutes)." },
        { type: "group", label: "Marken (14:30–16:00):", items: [
          "Walk through the village with its wooden houses and harbor.",
          "Enjoy views and take photos; relaxed, not museum-heavy.",
        ]},
        { type: "item", text: "Drive from Marken to Zaanse Schans (around 25–30 minutes)." },
        { type: "group", label: "Zaanse Schans (16:30–18:30):", items: [
          "Walk among windmills and traditional houses.",
          "Visit a few workshops (clogs, cheese, crafts) if you want.",
          "Focus on outdoor walking and views rather than detailed history.",
        ]},
        { type: "item", text: "Early evening: Quick dinner near Zaanse Schans or on the way back." },
        { type: "item", text: "Drive back to Medemblik; arrive around 20:00–20:30." },
      ],
    },
    {
      day: 5,
      heading: "Day 5 – Saturday, July 11: Medemblik Local Day",
      blocks: [
        { type: "item", text: "Relaxed day with no long driving." },
        { type: "group", label: "Morning:", items: [
          "Walk around Medemblik harbor and waterfront.",
          "See the castle exterior again or explore another corner of town.",
        ]},
        { type: "group", label: "Optional activities:", items: [
          "Another short boat ride on IJsselmeer.",
          "Short walk or bike ride in nearby countryside.",
        ]},
        { type: "group", label: "Afternoon:", items: [
          "Rest at the accommodation.",
          "Light local exploring, café break, or a small nearby outing.",
        ]},
        { type: "item", text: "Evening: Dinner and relax." },
      ],
    },
    {
      day: 6,
      heading: "Day 6 – Sunday, July 12: Medemblik Local & Prep Day",
      blocks: [
        { type: "item", text: "Another light day in Medemblik before leaving for Amsterdam." },
        { type: "group", label: "Morning:", items: [
          "Optional local walk, bike ride, or short outing.",
        ]},
        { type: "group", label: "Afternoon:", items: [
          "Pack luggage.",
          "Final look around Medemblik, maybe a café by the water.",
        ]},
        { type: "group", label: "Evening:", items: [
          "Early dinner.",
          "Rest and prepare for check-out the next morning.",
        ]},
      ],
    },
    {
      day: 7,
      heading: "Day 7 – Monday, July 13: Medemblik → Walibi World → Amsterdam",
      blocks: [
        { type: "group", label: "Morning:", items: [
          "Check out of Medemblik accommodation (aim around 08:00–09:00).",
        ]},
        { type: "item", text: "Drive from Medemblik to Walibi World (about 1.5–2 hours)." },
        { type: "group", label: "Walibi World (late morning and afternoon):", items: [
          "Arrive around 11:00–11:30.",
          "Spend several hours enjoying rides and water attractions suitable for all three boys.",
          "Have lunch in the park.",
        ]},
        { type: "group", label: "Mid/late afternoon:", items: [
          "Leave Walibi around 16:00–16:30.",
          "Drive from Walibi to Amsterdam (about 1 hour).",
        ]},
        { type: "group", label: "Late afternoon / early evening:", items: [
          "Arrive in Amsterdam, park the car if needed (you won't use it inside the city after this).",
          "Check into the Amsterdam accommodation.",
        ]},
        { type: "group", label: "Evening in Amsterdam:", items: [
          "Light walk around Damrak and Dam Square.",
          "See some canals and the Royal Palace exterior.",
          "Dinner near the hotel.",
        ]},
      ],
    },
    {
      day: 8,
      heading: "Day 8 – Tuesday, July 14: NEMO, National Maritime Museum & City Walk",
      blocks: [
        { type: "group", label: "Morning:", items: [
          "Take public transport to NEMO Science Museum (near Central Station, at Oosterdok).",
          "Spend the morning (roughly 10:00–12:30) at NEMO:",
          "Focus on the large outdoor rooftop terrace with experiments and water-play elements.",
          "Explore hands-on science exhibits that are fun for kids and teens.",
        ]},
        { type: "item", text: "Lunch (around 12:30–13:30) near NEMO or Central Station." },
        { type: "group", label: "Early afternoon:", items: [
          "Walk from NEMO to the nearby National Maritime Museum (Nationaal Scheepvaartmuseum).",
          "Spend around 14:00–16:30 at the Maritime Museum:",
          "Explore ship-related exhibits and interactive displays.",
          "Go outside to see the historic ship and courtyard areas.",
          "Focus on the visual, interactive side rather than deep historical detail.",
        ]},
        { type: "group", label: "Late afternoon / evening:", items: [
          "Walk back via Oosterdok and Central Station toward Dam Square.",
          "Optional 1-hour canal boat tour starting near Central Station or Damrak.",
          "Dinner in central Amsterdam (De Pijp, Oud-West, or near Dam Square).",
          "Evening stroll along the canals, then return to the hotel.",
        ]},
      ],
    },
    {
      day: 9,
      heading: "Day 9 – Wednesday, July 15: Ripley's Believe It or Not! & Shopping",
      blocks: [
        { type: "group", label: "Morning:", items: [
          "Walk or take public transport to Ripley's Believe It or Not! at Dam 21 (about 1.5–2 hours inside).",
          "Explore five floors of oddities, illusions, and world records.",
        ]},
        { type: "item", text: "Lunch around Dam Square (11:30–12:30)." },
        { type: "group", label: "Afternoon shopping (12:30–16:00):", items: [
          "Damrak / Nieuwendijk — souvenirs",
          "Kalverstraat — clothing and general stores",
          "Leidseplein — cafés and entertainment",
          "De Bijenkorf — department store on Dam Square",
        ]},
        { type: "item", text: "Return to the hotel and pack for the flight." },
        { type: "item", text: "Early dinner and optional final canal walk." },
      ],
    },
    {
      day: 10,
      heading: "Day 10 – Thursday, July 16: Departure",
      blocks: [
        { type: "item", text: "Breakfast and final room check." },
        { type: "item", text: "Public transport to Schiphol (train/metro)." },
        { type: "item", text: "Return rental car if not dropped earlier." },
        { type: "item", text: "Check in, security, and gate." },
        { type: "item", text: "Fly home." },
      ],
    },
  ],
};
