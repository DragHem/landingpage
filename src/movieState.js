import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus massa sit amet mollis scelerisque. Aliquam non ultrices nisi. Sed porttitor tellus ut consequat mollis. Vivamus in urna velit. Suspendisse cursus metus eu fermentum euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mauris diam, tempus quis ipsum quis, tempor faucibus augue. Fusce a mi in neque tempus finibus quis at mauris.",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus massa sit amet mollis scelerisque. Aliquam non ultrices nisi. Sed porttitor tellus ut consequat mollis. Vivamus in urna velit. Suspendisse cursus metus eu fermentum euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mauris diam, tempus quis ipsum quis, tempor faucibus augue. Fusce a mi in neque tempus finibus quis at mauris.",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus massa sit amet mollis scelerisque. Aliquam non ultrices nisi. Sed porttitor tellus ut consequat mollis. Vivamus in urna velit. Suspendisse cursus metus eu fermentum euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mauris diam, tempus quis ipsum quis, tempor faucibus augue. Fusce a mi in neque tempus finibus quis at mauris.",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
