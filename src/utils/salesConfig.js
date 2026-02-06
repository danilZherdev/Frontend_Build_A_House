const SALE_HOUSE_iMAGES = [
  {
    id: 1,
    src: "/images/imagesHousesForSale/first-on-sale.jpg",
    drawing: "/images/imagesHousesForSale/housePlan/plan-grandDeluxe.png",
    prefix: "проект",
    title: "GrandDeluxe",
    textContent: `-Участок 4,5 сотки,\n
                  -Общая площадь дома 243кв.м \n
                  -Цокольный этаж с бассейном 113кв.м\n
                  -Первый этаж 130кв.м,\n
                  -Кухня совмещенная с гостиной 33 кв и выходом на террасу,\n
                  -3 спальни, 2 санузла.`,
  },
  {
    id: 2,
    src: "/images/imagesHousesForSale/second-one-on-sale.jpg",
    drawing: "/images/imagesHousesForSale/housePlan/plan-olivia.png",
    prefix: "проект",
    title: "Olivia",
    textContent: `-Участок 4 сотки,\n
                  -Общая площадь дома 124кв.м \n
                  -Кухня раздельна от гостиной и с выходом на террасу\n
                  -3 спальни, 1 санузел.`,
  },
  {
    id: 3,
    src: "/images/imagesHousesForSale/third-copy-on-sale.jpg",
    drawing: "/images/imagesHousesForSale/housePlan/plan-Japandi.png",
    prefix: "проект",
    title: "Japandi",
    textContent: `-Дом с отделкой и мебелью\n
                  -Участок 4.8 сотки,\n
                  -Общая площадь дома 130кв.м \n
                  -Кухня-гостиная 37кв \n
                  -2 санузла, 3 спальни \n
                  -Терраса  18кв.`,
  },
];

export const getSaleHouseImages = () => SALE_HOUSE_iMAGES;

export const getSaleHouseImageById = (id) => {
  return SALE_HOUSE_iMAGES.find((img) => img.id === id);
};

export const getFirstSaleHouseImage = () => {
  return SALE_HOUSE_iMAGES[0] || null;
};

export const getTotalSaleHouses = () => {
  return SALE_HOUSE_iMAGES.length;
};
