import { useState } from "react";
import Masonry from "react-masonry-css";
import styles from "./MasonryGrid.module.css";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function MasonryGrid({ images, getImageProps }) {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image, i) => {
        const props = getImageProps
          ? getImageProps(image, i)
          : { src: image, alt: "", loading: i < 2 ? "eager" : "lazy" };

        return <MasonryItem key={i} {...props} />;
      })}
    </Masonry>
  );
}

function MasonryItem({ src, srcSet, sizes, loading, decoding, alt }) {
  const [orientation, setOrientation] = useState("vertical");

  return (
    <div
      className={`${styles.masonryItem} ${
        orientation === "horizontal" ? styles.horizontal : styles.vertical
      }`}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? ""}
        loading={loading}
        decoding={decoding}
        className={styles.image}
        onLoad={(e) => {
          const { naturalWidth, naturalHeight } = e.target;
          if (naturalWidth > naturalHeight) {
            setOrientation("horizontal");
          }
        }}
      />
    </div>
  );
}
