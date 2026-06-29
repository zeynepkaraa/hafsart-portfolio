import EventPage from "../EventPage/EventPage";

const images = [
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0879_wwtsev.jpg",
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0378_jdotqh.jpg",
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0901_uqgxal.jpg",
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0949_ox7ufx.jpg",
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0966_k32zty.jpg",
  "https://res.cloudinary.com/dtowqekrg/image/upload/f_webp/q_auto:eco/cs_tinysrgb/dpr_1.0/w_1000/IMG_0929_qzcuta.jpg",
];

const description =
  "I had the privilege of collaborating with Tiffany & Co. for their exclusive Mother’s Day event, where I created live fashion illustrations for guests throughout the celebration. From mothers and their children to family portraits, each illustration was drawn on-site and personalized for every guest. It was a wonderful experience to be part of such a meaningful event, creating one-of-a-kind keepsakes for families to take home.";

const TiffanyCo = () => {
  return (
    <EventPage
      title="Tiffany&Co Mother's Day Event"
      description={description}
      images={images}
    />
  );
};

export default TiffanyCo;
