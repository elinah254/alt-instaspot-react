// Cards Data

// export const cardsData = [
//   {
//     imgSrc: "../../assets/images/card1.svg",
//     imgAlt: "Snow-covered mountains in Val Thorens",
//     title: "Val Thorens",
//   },
//   {
//     imgSrc: "../../assets/images/Card2.png",
//     imgAlt: "Restaurant terrace with a view",
//     title: "Restaurant terrace",
//   },
//   {
//     imgSrc: "../../assets/images/Card3.png",
//     imgAlt: "Outdoor cafe with people",
//     title: "An outdoor cafe",
//   },
//   {
//     imgSrc: "../../assets/images/Card4.png",
//     imgAlt: "A long bridge over a forest",
//     title: "A very long bridge, over the forest...",
//   },
//   {
//     imgSrc: "../../assets/images/Card5.png",
//     imgAlt: "A man walking in a tunnel with morning light shining through",
//     title: "Tunnel with morning light",
//   },
//   {
//     imgSrc: "../../assets/images/Card6.png",
//     imgAlt: "Mountain house",
//     title: "Mountain house",
//   },
// ];

// import Card1 from "../../assets/images/card1.svg";
// console.log(typeof Card1);
// console.log("Card1 import:", Card1);
// import Card2 from "../../assets/images/Card2.png";
// import Card3 from "../../assets/images/Card3.png";
// import Card4 from "../../assets/images/Card4.png";
// import Card5 from "../../assets/images/Card5.png";
// import Card6 from "../../assets/images/Card6.png";

const Card1 = new URL("../../assets/images/Card1.jpg", import.meta.url).href;
const Card2 = new URL("../../assets/images/Card2.png", import.meta.url).href;
const Card3 = new URL("../../assets/images/Card3.png", import.meta.url).href;
const Card4 = new URL("../../assets/images/Card4.png", import.meta.url).href;
const Card5 = new URL("../../assets/images/Card5.png", import.meta.url).href;
const Card6 = new URL("../../assets/images/Card6.png", import.meta.url).href;

export const cardsData = [
  {
    imgSrc: Card1,
    imgAlt: "Snow-covered mountains in Val Thorens",
    title: "Val Thorens",
  },
  {
    imgSrc: Card2,
    imgAlt: "Restaurant terrace with a view",
    title: "Restaurant terrace",
  },
  {
    imgSrc: Card3,
    imgAlt: "Outdoor cafe with people",
    title: "An outdoor cafe",
  },
  {
    imgSrc: Card4,
    imgAlt: "A long bridge over a forest",
    title: "A very long bridge, over the forest...",
  },
  {
    imgSrc: Card5,
    imgAlt: "A man walking in a tunnel with morning light shining through",
    title: "Tunnel with morning light",
  },
  {
    imgSrc: Card6,
    imgAlt: "Mountain house",
    title: "Mountain house",
  },
];
