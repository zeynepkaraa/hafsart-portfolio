import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";
import SEO from "../../SEO.jsx";

const weddingsImages = [
  {
    id: "IMG_2264_x1ljps",
    crop: "c_crop,g_north_west,h_3083,w_4284,y_1267",
    ext: "webp",
    alt: "Wedding couple holding their live fashion illustration portrait by Hafsart Toronto",
  },
  {
    id: "IMG_3322_mezyki",
    ext: "webp",
    alt: "Hafsa setting up live illustration station at an outdoor wedding venue",
  },
  {
    id: "DSC04394_ze4q4z",
    ext: "webp",
    alt: "Live illustration display setup with fashion portraits at a wedding reception",
  },
  {
    id: "IMG_2233_m9qysi",
    ext: "webp",
    alt: "Hand-drawn wedding couple portrait illustration by Hafsart",
  },
  {
    id: "IMG_6054_hpl1xs",
    crop: "c_crop,g_north_west,h_2963,w_4284,y_1717",
    ext: "webp",
    alt: "Hafsart sketching live fashion illustrations at a wedding table",
  },
  {
    id: "IMG_0658_udbkiu",
    ext: "webp",
    alt: "Bride and groom holding their hand-drawn fashion portrait at Toronto wedding",
  },
  {
    id: "IMG_0211_xegbno",
    crop: "c_crop,g_north_west,h_2532,w_3670,y_1209",
    ext: "webp",
    alt: "Live illustration display of wedding guest portraits at an outdoor ceremony",
  },
  {
    id: "IMG_3385_yt2eum",
    ext: "webp",
    alt: "Hand-drawn fashion portraits of wedding party displayed on table by Hafsa",
  },
  {
    id: "IMG_8858_pcflwk",
    crop: "c_crop,g_north_west,h_3111,w_4284,y_1665",
    ext: "webp",
    alt: "Indian wedding couple holding live fashion illustration portrait by Hafsa",
  },
  {
    id: "IMG_1514_ar7var",
    ext: "webp",
    alt: "Hafsa creating live illustrations at an elegant candlelit wedding reception",
  },
  {
    id: "IMG_8975_aupgkj",
    ext: "webp",
    alt: "Hafsa holding live fashion illustration sketches at an outdoor wedding",
  },
  {
    id: "IMG_5173_mwz5rw",
    ext: "webp",
    alt: "Live fashion illustration portraits displayed at a Toronto wedding by Hafsa",
  },
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
