import { useEffect, useState, useContext } from "react";
import { LBContext } from "../LBContext";

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import useData from "../hooks/useData";
import processAirtableRecords, { CustomImage } from "../lib/processATRecs";

export default function ImageGallery({ category }: { category: string }) {
  const [images, setImages] = useState<CustomImage[]>([]);
  const [index, setIndex] = useState(-1);
  const { setIsLBOpen } = useContext(LBContext);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => {
    setIsLBOpen(true);
    setIndex(index);
  };
  const handleClose = () => {
    setIndex(-1);
    setIsLBOpen(false);
  };
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
        images={images.map((image) => ({
          ...image,
          customOverlay: (
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                maxHeight: "240px",
                overflow: "hidden",
                whiteSpace: "break-spaces",
                textOverflow: "ellipsis",
                position: "absolute",
                bottom: 0,
                width: "100%",
                color: "white",
                padding: "15px",
                fontSize: "90%",
              }}
            >
              <div>{image.caption}</div>
            </div>
          ),
        }))}
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
