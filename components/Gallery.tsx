import { useEffect, useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import useData from "../hooks/useData";
import processAirtableRecords from "../lib/processATRecs";

export interface CustomImage extends Image {
  original: string;
}

export default function ImageGallery({ category }: { category: string }) {
  const [images, setImages] = useState<CustomImage[]>([]);
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // Load the photos
  const { data, loading } = useData(
    "images",
    "all",
    { category_slug: category },
    false,
  );

  // Add them to the array
  useEffect(() => {
    if (data) setImages(() => processAirtableRecords(data));
  }, [data]);

  // Handle loading and errors
  if (loading) return <div>Loading...</div>;
  if (images.length === 0)
    return <div>No images found for the selected category</div>;

  // Handle the gallery
  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
