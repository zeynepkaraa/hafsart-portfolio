const CLOUDINARY_BASE = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

export const buildUrl = (image, width) => {
  const transforms = [
    image.crop,
    image.transforms,
    `w_${width}`,
    "f_auto",
    "q_auto:good",
  ]
    .filter(Boolean)
    .join("/");

  return `${CLOUDINARY_BASE}/${transforms}/${image.id}.${image.ext ?? "jpg"}`;
};

export const getImageProps = (image, index) => ({
  src: buildUrl(image, 800),
  srcSet: `${buildUrl(image, 400)} 400w, ${buildUrl(image, 800)} 800w, ${buildUrl(image, 1200)} 1200w`,
  sizes: "(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px",
  loading: index < 2 ? "eager" : "lazy",
  decoding: "async",
  alt: `Brand event ${index + 1}`,
});
