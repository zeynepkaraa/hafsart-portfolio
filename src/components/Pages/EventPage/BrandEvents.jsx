import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const brandImages = [
  {
    id: "IMG_0879_wwtsev",
    crop: "c_crop,g_north_west,h_3068,w_4284,y_1698",
    alt: "Live fashion illustration portrait displayed with flowers at Tiffany & Co brand event",
  },
  {
    id: "IMG_0378_jdotqh",
    alt: "Hafsa sketching live fashion illustrations at a luxury brand event table",
  },
  {
    id: "IMG_0901_uqgxal",
    crop: "c_crop,g_north_west,h_2815,w_4284,y_1910",
    alt: "Hand-drawn fashion portrait held up at a brand activation event by Hafsa",
  },
  {
    id: "IMG_4822_rfibqw",
    alt: "Hafsa creating live fashion illustrations at Louis Vuitton brand event Toronto",
  },
  {
    id: "IMG_4874_kncjrg",
    crop: "c_crop,g_north_west,h_2877,w_4284,y_2099",
    alt: "Live illustration sketches displayed on marble table at luxury brand event",
  },
  {
    id: "IMG_4795_vmi45m",
    alt: "Hand-drawn Creed fragrance fashion illustration portrait held at brand event",
  },
  {
    id: "IMG_8380_t4q5ms",
    crop: "c_crop,g_north_west,h_2899,w_4284,y_1474",
    alt: "Guests holding live fashion illustration portraits at Melanie Lyne brand event",
  },
  {
    id: "IMG_8273_oplwk1",
    alt: "Hafsa drawing live fashion portraits at a brand activation event",
  },
  {
    id: "IMG_8298_xqejvg",
    crop: "c_crop,g_north_west,h_3152,w_4284,y_1496",
    alt: "Two guests holding their hand-drawn fashion portraits at a Toronto brand event",
  },
  {
    id: "IMG_5320_v2rvja",
    alt: "Guests posing with live fashion illustration portraits at SickKids Foundation event",
  },
  {
    id: "IMG_1864_kwtsfn",
    crop: "c_crop,g_north_west,h_2296,w_3213,y_1940",
    alt: "Hafsa illustrating live fashion sketches at a Lincoln event",
  },
  {
    id: "IMG_8538_nbugza",
    alt: "Live fashion illustration portraits spread out at a luxury brand event by Hafsa",
  },
];

const BrandEvents = () => {
  return (
    <>
      <SEO
        title="Brand Event Illustration | Hafsart Live Art"
        description="Elevate your brand event with live fashion illustration. Hafsa creates stunning hand-drawn portraits that engage guests and leave a lasting impression. Available across Toronto."
        keywords="brand event illustration, live art activation, corporate event artist, fashion illustration brand event, live sketching activation, brand experience Toronto"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <EventPage
        title="Brand Events"
        logos={true}
        images={brandImages}
        getImageProps={getImageProps}
      />
    </>
  );
};

export default BrandEvents;
