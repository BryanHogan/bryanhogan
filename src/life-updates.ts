interface LifeUpdate {
  title: string;
  date: Date;
  description: string;
  cardButtons: Array<CardLUButton>;
}
export interface CardLUButton {
  buttonText: string;
  buttonLink: string;
  buttonTarget: string;
}

export const LifeUpdates: LifeUpdate[] = [
  {
    title: "Started My Personal Mail Newsletter",
    date: new Date("2024-02-02"),
    description: "Sharing life updates, content that has helped me and content that I have made.",
    cardButtons: [
      {
        buttonText: "Receive Bryan's Briefing",
        buttonLink: "/follow",
        buttonTarget: "_self",
      },
    ]
  },
  {
    title: "Starting as a Software Developer",
    date: new Date("2024-02-01"),
    description: "Starting my job as a Software Developer.",
    cardButtons: []
  },
  {
    title: "Back In Germany",
    date: new Date("2024-01-27"),
    description: "Back in Germany after a year abroad in South Korea as an exchange student.",
    cardButtons: [
      {
        buttonText: "Instagram Highlights",
        buttonLink: "https://www.instagram.com/bryanhoganme/",
        buttonTarget: "_blank",
      },
    ]
  },
  {
    title: "New Years in Seoul",
    date: new Date("2024-01-01"),
    description: "Celebrating the start of the new year in Seoul.",
    cardButtons: [
      {
        buttonText: "Instagram Highlight",
        buttonLink: "https://www.instagram.com/stories/highlights/18014098511085550/",
        buttonTarget: "_blank",
      },
    ]
  },
];