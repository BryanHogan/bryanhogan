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
    title: "Starting as a Software Developer",
    date: new Date("2024-01-31"),
    description: "Starting my job as a Software Developer.",
    cardButtons: [
    ]
  },
  {
    title: "New Years in Seoul",
    date: new Date("2024-01-01"),
    description: "Celebrating the start of the new year in Seoul.",
    cardButtons: [
      {
        buttonText: "Instagram Highlight",
        buttonLink: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE0MDk4NTExMDg1NTUw?igsh=eHJkNzMxNG1oODA3",
        buttonTarget: "_blank",
      },
    ]
  },
];