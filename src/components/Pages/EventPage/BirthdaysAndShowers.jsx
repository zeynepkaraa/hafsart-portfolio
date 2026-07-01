import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const birthdayImages = [
  {
    id: "Tezza-1889_tjj0cf",
    alt: "3 women with long dresses live fashion illustration at a bridal shower",
  },
  {
    id: "DSC06647_cyednq",
    alt: "Hafsa at a Love in Bloom themed bridal shower in Toronto ",
  },
  {
    id: "DSC06672_j3jkde",
    crop: "c_crop,g_north_west,h_3068,w_4000,y_2083",
    alt: "Hafsa illustrating guests at a bridal shower event",
  },
  {
    id: "IMG_1610_qbc0jm",
    alt: "3 guests holding a live fashion sketch of a guest at a bridal shower party",
  },
  {
    id: "IMG_9883_zrdbwl",
    crop: "c_crop,g_north_west,h_2274,w_3213,y_1612",
    alt: "Hand-drawn fashion portraits at a Vaughan bridal shower celebration",
  },
  {
    id: "IMG_9805_yrw5ez",
    alt: "Live illustration artist drawing guests at a bridal shower",
  },
  {
    id: "IMG_9689_awaeqg",
    crop: "c_crop,g_north_west,h_3270,w_4284,y_1612",
    alt: "Elegant hand-drawn portrait from a birthday party ",
  },
  {
    id: "IMG_9847_qnn5le",
    alt: "Live sketching at a bridal shower in Toronto",
  },
  {
    id: "DSC04438_el1ef1",
    crop: "c_crop,g_north_west,h_2745,w_4000,y_2168",
    ext: "webp",
    alt: "Fashion illustration of a guest at a special occasion event",
  },
  {
    id: "B44A9916-ED67-4995-8E0D-C1FE103B9EFB_lsmw3s",
    alt: "Hand-drawn portrait at a Toronto bridal shower",
  },
  {
    id: "2DF4E435-C0A4-4E55-8734-94439076613D_rafikz",
    crop: "c_crop,g_north_west,h_526,w_646,y_321",
    alt: "Live fashion illustration sketch at a birthday celebration",
  },
  {
    id: "IMG_0240_peruol",
    alt: "Hafsart creating a live portrait at a birthday event",
  },
];

const BirthdaysAndShowers = () => {
  return (
    <>
      <SEO
        title="Birthdays & Bridal Showers | Hafsart Live Illustration"
        description="Make your birthday, bridal shower or special occasion unforgettable with live fashion illustration. Hafsa creates beautiful hand-drawn portraits your guests will treasure."
        keywords="birthday illustration, bridal shower artist, live illustration party, special occasion artist, bridal shower Toronto, birthday fashion illustration"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <EventPage
        title="Birthday & Showers"
        images={birthdayImages}
        getImageProps={getImageProps}
      />
    </>
  );
};

export default BirthdaysAndShowers;
