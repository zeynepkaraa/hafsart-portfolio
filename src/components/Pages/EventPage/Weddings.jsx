import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const weddingsImages = [
  {
    id: "IMG_2264_x1ljps",
    crop: "c_crop,g_north_west,h_3083,w_4284,y_1267",
    ext: "webp",
  },
  { id: "IMG_3322_mezyki", ext: "webp" },
  { id: "DSC04394_ze4q4z", ext: "webp" },
  { id: "IMG_2233_m9qysi", ext: "webp" },
  {
    id: "IMG_6054_hpl1xs",
    crop: "c_crop,g_north_west,h_2963,w_4284,y_1717",
    ext: "webp",
  },
  { id: "IMG_0658_udbkiu", ext: "webp" },
  {
    id: "IMG_0211_xegbno",
    crop: "c_crop,g_north_west,h_2532,w_3670,y_1209",
    ext: "webp",
  },
  { id: "IMG_3385_yt2eum", ext: "webp" },
  {
    id: "IMG_8858_pcflwk",
    crop: "c_crop,g_north_west,h_3111,w_4284,y_1665",
    ext: "webp",
  },
  { id: "IMG_1514_ar7var", ext: "webp" },
  { id: "IMG_8975_aupgkj", ext: "webp" },
  { id: "IMG_5173_mwz5rw", ext: "webp" },
];

const Weddings = () => {
  return (
    <>
      {" "}
      <SEO
        title="Wedding Illustration | Hafsart Live Fashion Art"
        description="Live fashion illustration at your wedding day. Hafsa creates elegant hand-drawn portraits of your guests as a unique and memorable wedding experience. Based in Toronto."
        keywords="wedding live illustration, wedding artist Toronto, live sketching wedding, wedding fashion illustration, bridal live art, wedding guest portraits"
        image="https://res.cloudinary.com/dtowqekrg/image/upload/v1782880004/hafsart_thumbnail_simf0y.jpg"
      />
      <EventPage
        title="Weddings"
        images={weddingsImages}
        getImageProps={getImageProps}
      />
    </>
  );
};

export default Weddings;
