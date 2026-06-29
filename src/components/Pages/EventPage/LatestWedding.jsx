import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";

const images = [
  { id: "IMG_2243_bdujgy", crop: "c_crop,g_north_west,h_3068,w_4284,y_1453" },
  { id: "IMG_2264_x1ljps" },
  { id: "IMG_0175_vuoszz" },
  { id: "IMG_0149_urgamq" },
  { id: "IMG_2282_risx2o", crop: "c_crop,g_north_west,h_2667,w_4284,y_2024" },
  { id: "IMG_2270_vsm62u" },
  { id: "IMG_2237_i3ylxj", crop: "c_crop,g_north_west,h_3195,w_4284,y_1432" },
  { id: "IMG_2233_m9qysi", ext: "webp" },
  { id: "IMG_0117_huakuq", crop: "c_crop,g_north_west,h_1211,w_1536,y_525" },
  { id: "IMG_2273_pdkz5h" },
  {
    id: "IMG_2193_qjooos",
    crop: "c_crop,g_north_west,h_2105,w_3024,y_1160",
    ext: "webp",
  },
  { id: "IMG_0076_xy4yir" },
];

const description =
  "I had the pleasure of live illustrating at Jay & Anh’s wedding alongside Zeyneb, the second artist on my team. The couple chose our 2 artist, 4 hour package, allowing us to create over 80 personalized guest illustrations. We photographed guests during cocktail hour, continued sketching throughout the evening, and carefully packaged each finished illustration for guests to take home as a keepsake.";
const LatestWedding = () => {
  return (
    <EventPage
      title="Jay & Anh's Wedding"
      description={description}
      images={images}
      getImageProps={getImageProps}
    />
  );
};

export default LatestWedding;
