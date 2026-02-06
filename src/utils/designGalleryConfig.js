const HOUSE_IMAGES = [
  // Массив картинок для скролла
  {
    id: 1,
    src: "/images/designGallery/galleryImagesFifty-Eighth.jpg",
    title: "1",
  },

  // {
  //   id: 2,
  //   src: "/images/designGallery/galleryImagesFifty-fourth.jpg",
  //   title: "Дом 2",
  // },
  {
    id: 3,
    src: "/images/designGallery/galleryImagesFifty-Fifth.jpg",
    title: "2",
  },
  {
    id: 4,
    src: "/images/designGallery/galleryImagesFifty-Ninth.jpg",
    title: "3",
  },
  {
    id: 5,
    src: "/images/designGallery/galleryImagesFifty-Seventh.jpg",
    title: "4",
  },
  {
    id: 15,
    src: "/images/designGallery/galleryImagesFifty-Sixth.jpg",
    title: "5",
  },
  {
    id: 21,
    src: "/images/designGallery/galleryImagesForty-seventh.jpg",
    title: "6",
  },
  {
    id: 24,
    src: "/images/designGallery/galleryImagesForty-sixth.jpg",
    title: "7",
  },
  {
    id: 42,
    src: "/images/designGallery/galleryImagesSixtieth.jpg",
    title: "8",
  },
  {
    id: 44,
    src: "/images/designGallery/galleryImagesSixty-Eighth.jpg",
    title: "9",
  },
  {
    id: 48,
    src: "/images/designGallery/galleryImagesSixty-Fifth.jpg",
    title: "10",
  },
  {
    id: 50,
    src: "/images/designGallery/galleryImagesSixty-First.jpg",
    title: "11",
  },
  {
    id: 51,
    src: "/images/designGallery/galleryImagesSixty-Fourth.jpg",
    title: "12",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Ninth.jpg",
    title: "13",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Second.jpg",
    title: "14",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Seventh.jpg",
    title: "15",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Sixth.jpg",
    title: "16",
  },
  // {
  //   id: 52,
  //   src: "/images/designGallery/galleryImagesThirtieth.jpg",
  //   title: "17",
  // },
  // {
  //   id: 52,
  //   src: "/images/designGallery/galleryImagesThirty-eighth.jpg",
  //   title: "18",
  // },
  // {
  //   id: 52,
  //   src: "/images/designGallery/galleryImagesThirty-fifth.jpg",
  //   title: "19",
  // },
  // {
  //   id: 52,
  //   src: "/images/designGallery/galleryImagesThirty-first.jpg",
  //   title: "20",
  // },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-four.jpg",
    title: "17",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-ninth.jpg",
    title: "18",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-second.jpg",
    title: "19",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-seventh.jpg",
    title: "20",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-sixth.jpg",
    title: "21",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-third.jpg",
    title: "22",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesTwenty-eight.jpg",
    title: "23",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesTwenty-ninth.jpg",
    title: "24",
  },
];
export const getHouseImages = () => HOUSE_IMAGES;

export const getHouseImageById = (id) => {
  return HOUSE_IMAGES.find((img) => img.id === id);
};

export const getTotalHouses = () => {
  return HOUSE_IMAGES.length;
};
