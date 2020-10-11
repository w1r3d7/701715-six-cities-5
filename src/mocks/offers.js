const getRating = () => {
  return String((Math.random() * 5).toFixed(2));
};

const getRandomItemsCount = (array) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * array.length));
};

const reviews = [
  {
    name: `Oleg`,
    id: 11,
    photoUrl: `/img/avatar-max.jpg`,
    reviewText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium tempore veritatis? A
      asperiores debitis deserunt maxime molestiae nihil obcaecati, odio officiis quos repellendus sed, sit ut veniam?
      Eligendi, illo. `,
    rating: getRating(),
    date: new Date().toDateString(),
  },
  {
    name: `Petr`,
    id: 21,
    photoUrl: `/img/avatar-max.jpg`,
    reviewText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium tempore veritatis? A
      asperiores debitis deserunt maxime molestiae nihil obcaecati, odio officiis quos repellendus sed, sit ut veniam?
      Eligendi, illo. `,
    rating: getRating(),
    date: new Date().toDateString(),
  },
  {
    name: `Max`,
    id: 31,
    photoUrl: `/img/avatar-max.jpg`,
    reviewText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium tempore veritatis? A
      asperiores debitis deserunt maxime molestiae nihil obcaecati, odio officiis quos repellendus sed, sit ut veniam?
      Eligendi, illo. `,
    rating: getRating(),
    date: new Date().toDateString(),
  },
  {
    name: `Angelina`,
    id: 41,
    photoUrl: `/img/avatar-angelina.jpg`,
    reviewText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium tempore veritatis? A
      asperiores debitis deserunt maxime molestiae nihil obcaecati, odio officiis quos repellendus sed, sit ut veniam?
      Eligendi, illo. `,
    rating: getRating(),
    date: new Date().toDateString(),
  },
];

export default [
  {
    id: 1,
    city: `Amsterdam`,
    photosUrl: [`/img/apartment-01.jpg`, `/img/apartment-small-03.jpg`, `/img/apartment-small-04.jpg`],
    type: `Apartment`,
    price: 120,
    description: `Beautiful & luxurious studio at great location`,
    isPremium: true,
    isInBookmark: false,
    facilities: [
      `Wi-Fi`,
      `Towels`,
      `Washing machine`,
      `Heating`,
    ],
    rating: getRating(),
    bedroomsCount: 3,
    maxCapacity: 4,
    hostName: `Angelina`,
    hostAvatar: `/img/avatar-angelina.jpg`,
    isHostPremium: true,
    hostDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius et facilis fuga mollitia
      praesentium quasi qui quibusdam quo recusandae repellat, repellendus rerum saepe sapiente sequi unde velit vero
      voluptatem.`,
    reviews: getRandomItemsCount(reviews),
  },
  {
    id: 2,
    city: `Amsterdam`,
    photosUrl: [`/img/apartment-02.jpg`, `/img/apartment-small-03.jpg`, `/img/apartment-small-04.jpg`],
    type: `House`,
    price: 40,
    description: `Great location`,
    isPremium: true,
    isInBookmark: true,
    facilities: [
      `Wi-Fi`,
      `Towels`,
      `Washing machine`,
      `Heating`,
    ],
    rating: getRating(),
    bedroomsCount: 1,
    maxCapacity: 2,
    hostName: `Igor`,
    hostAvatar: `/img/avatar-max.jpg`,
    isHostPremium: false,
    hostDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque in iure
      laborum magnam placeat quasi quidem quo! Assumenda error fuga iste laborum molestiae nam odit quia repellendus sed
      soluta.`,
    reviews: getRandomItemsCount(reviews),
  },
  {
    id: 3,
    city: `Amsterdam`,
    photosUrl: [`/img/apartment-03.jpg`, `/img/apartment-small-03.jpg`, `/img/apartment-small-04.jpg`],
    type: `Villa`,
    price: 4000,
    description: `Nice, cozy, warm big bed apartment`,
    isPremium: false,
    isInBookmark: false,
    facilities: [
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
    ],
    rating: getRating(),
    bedroomsCount: 4,
    maxCapacity: 5,
    hostName: `Oleg`,
    hostAvatar: `/img/avatar-max.jpg`,
    isHostPremium: true,
    hostDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque in iure
      laborum magnam placeat quasi quidem quo! Assumenda error fuga iste laborum molestiae nam odit quia repellendus sed
      soluta.`,
    reviews: getRandomItemsCount(reviews),
  },
  {
    id: 4,
    city: `Amsterdam`,
    photosUrl: [`/img/room.jpg`, `/img/apartment-small-03.jpg`, `/img/apartment-small-04.jpg`],
    type: `Private Room`,
    price: 4,
    description: `Wood and stone place`,
    isPremium: false,
    isInBookmark: true,
    facilities: [
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    rating: getRating(),
    bedroomsCount: 1,
    maxCapacity: 1,
    hostName: `Oleg`,
    hostAvatar: `/img/avatar-max.jpg`,
    isHostPremium: false,
    hostDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque in iure
      laborum magnam placeat quasi quidem quo! Assumenda error fuga iste laborum molestiae nam odit quia repellendus sed
      soluta.`,
    reviews: getRandomItemsCount(reviews),
  },
];
