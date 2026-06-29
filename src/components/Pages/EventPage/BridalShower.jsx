import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";

const images = [
  { id: "IMG_9750_arfhp7" },
  { id: "IMG_9847_qnn5le" },
  { id: "IMG_9805_rrzgx8" },
  { id: "IMG_9883_zrdbwl" },
  { id: "IMG_9839_bqhbks" },
  { id: "IMG_9757_by9xhy" },
];

const description =
  "Jasmine chose my 2 hour package for her bridal shower, making live illustration a special part of the celebration. Throughout the event, I created personalized fashion illustrations for each guest, adding a thoughtful and interactive touch to the afternoon.";
const BridalShower = () => {
  return (
    <EventPage
      title="Jasmine's Bridal Shower"
      description={description}
      images={images}
      getImageProps={getImageProps}
    />
  );
};

export default BridalShower;
