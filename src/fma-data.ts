export type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

export const data: Character[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
  },
  {
    name: "Alfonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "https://i.pinimg.com/originals/a3/36/d9/a336d950f1bbea9b464ffc50e8e0df79.jpg",
  },
  {
    name: "Edward Elrich",
    nickName: "The Fullmetal Alchemist",
    skillset: ["Human Transmutation", "Alchemy", "Being Short"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
  },
  {
    name: "Greed",
    nickName: "Greed",
    votes: 45,
    skillset: ["Skin Hardening", "Homunculii"],
    imageUrl:
      "http://images3.wikia.nocookie.net/__cb20121003143236/fullmetal-alchemist-database/images/6/61/GreedEp13.png",
    background:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/fullmetal-alchemist-nina-tucker.jpg",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Loyal AF", "Sniper"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.b7cIrzG-xvCn2VkryfZWRAHaIH&pid=Api",
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    votes: -9000,
    skillset: ["Being a piece of sh*t", "Alchemy"],
    background: "Kimblee suckkkkkssss, seriously he's not very nice",
    imageUrl:
      "https://vignette.wikia.nocookie.net/fullmetal-alchemist-database/images/9/94/SolfJKimbleeEp37.png/revision/latest?cb=20121003101919",
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    votes: 40,
    skillset: ["Healing Alchemy", "Making Philospher Stones"],
    background:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    imageUrl:
      "http://vignette1.wikia.nocookie.net/fullmetal-alchemist-database/images/d/dd/TimMarcohEp06.png/revision/latest?cb=20121003100124",
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Delivering Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl:
      "http://vignette2.wikia.nocookie.net/p__/images/e/ef/Winry_Rockbell.png/revision/latest?cb=20150326174819&path-prefix=protagonist",
  },
];
