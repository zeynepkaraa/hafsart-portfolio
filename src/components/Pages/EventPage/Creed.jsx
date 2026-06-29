import EventPage from "../EventPage/EventPage";
import { getImageProps } from "../../../utils/cloudinary";

const images = [
  { id: "IMG_4795_vmi45m" },
  { id: "IMG_4822_rfibqw" },
  { id: "IMG_4874_kncjrg" },
  { id: "IMG_4779_gyt8cp" },
  { id: "IMG_4903_qc2267" },
  { id: "IMG_4862_qm7xa2" },
];

const description =
  "I had the pleasure of live illustrating guests at Creed Fragrances’ Yorkdale boutique during the holiday season, creating personalized fashion illustrations throughout the event. The activation added an interactive and personal touch to the holiday shopping experience, giving clients something unique to enjoy during their visit.";
const Creed = () => {
  return (
    <EventPage
      title="Creed Fragrances Holiday Event"
      description={description}
      images={images}
      getImageProps={getImageProps}
    />
  );
};

export default Creed;
