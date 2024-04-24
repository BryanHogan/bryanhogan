interface LifeUpdate {
  title: string;
  date: Date;
  description: string;
  cardButtons: Array<CardLUButton>;
}
export interface CardLUButton {
  buttonText: string;
  buttonLink: string;
  buttonTarget?: string;
}

export const LifeUpdates: LifeUpdate[] = [
  {
    title: "New Post: Code & Context Final Project Dev Diary - Live Post",
    date: new Date("2024-04-24"),
    description: "About my final project at Code & Context.",
    cardButtons: [
      {
        buttonText: "Read Post",
        buttonLink: "/blog/coco-final-dev-diary"
      }
    ]
  },
  {
    title: "New Post: Why Koreans Ask What Year You Were Born",
    date: new Date("2024-04-23"),
    description: "A shorter post on one of the interesting cultural experiences I had while in South Korea.",
    cardButtons: [
      {
        buttonText: "Read Post",
        buttonLink: "/blog/korean-age"
      }
    ]
  },
  {
    title: "New Post: Show Your Work - Summary, Review & Thoughts",
    date: new Date("2024-04-14"),
    description: "Made a new blog post, this time on a book that has changed my life quite a bit. Share Your Work is an amazing book I can highly recommend.",
    cardButtons: [
      {
        buttonText: "See Post",
        buttonLink: "/blog/show-your-work"
      },
      {
        buttonText: "All Posts Tagged With 'Book'",
        buttonLink: "/tags/book"
      }
    ]
  },
  {
    title: "Bryan's Briefing February Edition",
    date: new Date("2024-03-13"),
    description: "Published the second edition of my monthly newsletter, February 2024 - Bryan's Briefing.",
    cardButtons: [
      {
        buttonText: "Read It",
        buttonLink: "https://buttondown.email/BryanHogan/archive/february-2024-bryans-briefing/",
        buttonTarget: "_blank",
      },
    ]
  },
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
    title: "Back in Germany",
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