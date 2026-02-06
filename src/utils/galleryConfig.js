const HOUSE_IMAGES = [
  // Массив картинок для скролла
  {
    id: 1,
    src: "/images/designGallery/galleryImagesFifty-Eighth.jpg",
    title: "",
  },

  // {
  //   id: 2,
  //   src: "/images/designGallery/galleryImagesFifty-fourth.jpg",
  //   title: "Дом 2",
  // },
  {
    id: 3,
    src: "/images/designGallery/galleryImagesFifty-Fifth.jpg",
    title: "Дом 3",
  },
  {
    id: 4,
    src: "/images/designGallery/galleryImagesFifty-Ninth.jpg",
    title: "Дом 4",
  },
  {
    id: 5,
    src: "/images/designGallery/galleryImagesFifty-Seventh.jpg",
    title: "Дом 5",
  },
  {
    id: 15,
    src: "/images/designGallery/galleryImagesFifty-Sixth.jpg",
    title: "Дом 6",
  },
  {
    id: 21,
    src: "/images/designGallery/galleryImagesForty-seventh.jpg",
    title: "Дом 7",
  },
  {
    id: 24,
    src: "/images/designGallery/galleryImagesForty-sixth.jpg",
    title: "Дом 8",
  },
  {
    id: 42,
    src: "/images/designGallery/galleryImagesSixtieth.jpg",
    title: "Дом 9",
  },
  {
    id: 44,
    src: "/images/designGallery/galleryImagesSixty-Eighth.jpg",
    title: "Дом 10",
  },
  {
    id: 48,
    src: "/images/designGallery/galleryImagesSixty-Fifth.jpg",
    title: "Дом 11",
  },
  {
    id: 50,
    src: "/images/designGallery/galleryImagesSixty-First.jpg",
    title: "Дом 12",
  },
  {
    id: 51,
    src: "/images/designGallery/galleryImagesSixty-Fourth.jpg",
    title: "Дом 13",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Ninth.jpg",
    title: "Дом 14",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Second.jpg",
    title: "Дом 15",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Seventh.jpg",
    title: "Дом 16",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesSixty-Sixth.jpg",
    title: "Дом 17",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirtieth.jpg",
    title: "Дом 18",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-eighth.jpg",
    title: "Дом 19",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-fifth.jpg",
    title: "Дом 20",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-first.jpg",
    title: "Дом 21",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-four.jpg",
    title: "Дом 22",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-ninth.jpg",
    title: "Дом 23",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-second.jpg",
    title: "Дом 24",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-seventh.jpg",
    title: "Дом 25",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-sixth.jpg",
    title: "Дом 26",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesThirty-third.jpg",
    title: "Дом 27",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesTwenty-eight.jpg",
    title: "Дом 28",
  },
  {
    id: 52,
    src: "/images/designGallery/galleryImagesTwenty-ninth.jpg",
    title: "Дом 28",
  },
];
export const getHouseImages = () => HOUSE_IMAGES;

export const getHouseImageById = (id) => {
  return HOUSE_IMAGES.find((img) => img.id === id);
};

export const getTotalHouses = () => {
  return HOUSE_IMAGES.length;
};
