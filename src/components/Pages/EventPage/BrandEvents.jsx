import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const brandImages = [
  { id: "IMG_0879_wwtsev", crop: "c_crop,g_north_west,h_3068,w_4284,y_1698" },
  { id: "IMG_0378_jdotqh" },
  { id: "IMG_0901_uqgxal", crop: "c_crop,g_north_west,h_2815,w_4284,y_1910" },
  { id: "IMG_4822_rfibqw" },
  { id: "IMG_4874_kncjrg", crop: "c_crop,g_north_west,h_2877,w_4284,y_2099" },
  { id: "IMG_4795_vmi45m" },
  { id: "IMG_8380_t4q5ms", crop: "c_crop,g_north_west,h_2899,w_4284,y_1474" },
  { id: "IMG_8273_oplwk1" },
  { id: "IMG_8298_xqejvg", crop: "c_crop,g_north_west,h_3152,w_4284,y_1496" },
  { id: "IMG_5320_v2rvja" },
  { id: "IMG_1864_kwtsfn", crop: "c_crop,g_north_west,h_2296,w_3213,y_1940" },
  { id: "IMG_8538_nbugza" },
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
