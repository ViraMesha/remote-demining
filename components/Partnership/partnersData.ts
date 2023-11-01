import partner from "@/public/images/partnership/img.jpg";

export interface Partner {
  _id: string;
  images: string;
  img_description: string;
}

const img_description = "logo of a partner";

const partnersData: Partner[] = [
  {
    _id: "1",
    images: partner.src,
    img_description,
  },
  {
    _id: "2",
    images: partner.src,
    img_description,
  },
  {
    _id: "3",
    images: partner.src,
    img_description,
  },
  {
    _id: "4",
    images: partner.src,
    img_description,
  },
  {
    _id: "5",
    images: partner.src,
    img_description,
  },
  {
    _id: "6",
    images: partner.src,
    img_description,
  },
  {
    _id: "7",
    images: partner.src,
    img_description,
  },
  {
    _id: "8",
    images: partner.src,
    img_description,
  },
  {
    _id: "9",
    images: partner.src,
    img_description,
  },
];

export default partnersData;
