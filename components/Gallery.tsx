import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useData from "../hooks/useData";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  DialogTitle,
} from "@mui/material";
import {
  NavigateNext as NextIcon,
  NavigateBefore as PrevIcon,
} from "@mui/icons-material";
import Image from "next/image";

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1,
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery({ category }: { category: string }) {
  const { data, error, loading } = useData(
    "images",
    "all",
    { category_slug: category },
    false,
  );

  const [images, setImages] = useState<any[]>([]);
  const [openImage, setOpenImage] = useState<number | null>(null);

  function processAirtableRecords(records: any[]) {
    const processedImages = records.map((image: any) => {
      const { id, fields } = image;
      const { title, featured, file, description } = fields;
      const { url, thumbnails } = file[0];
      return {
        id,
        title,
        featured,
        url,
        thumbnails,
        description,
      };
    });
    setImages(() => processedImages);
  }

  useEffect(() => {
    if (data) processAirtableRecords(data);
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (images.length === 0) return <div>No images found</div>;
  return (
    <>
      <ImageDialog
        setOpenImage={setOpenImage}
        openImage={openImage}
        images={images}
      />
      <ImageList
        sx={{
          transform: "translateZ(0)",
          mb: 4,
        }}
        // gap={0}
      >
        {images.map((image: any, index: number) => {
          const cols = image.featured ? 3 : 1;
          const rows = image.featured ? 1.5 : 1;
          return (
            <ImageListItem
              key={image.id}
              cols={cols}
              rows={rows}
              sx={{ cursor: "pointer", boxShadow: "0 3px 5px rgba(0,0,0,0.5)" }}
              onClick={() => {
                setOpenImage(index);
              }}
            >
              <img
                src={
                  image.featured
                    ? image.thumbnails.full.url
                    : image.thumbnails.large.url
                }
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: rows * 300,
                }}
                alt={image.title}
              />
              {image.title && (
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    opacity: 1,
                    transition: "opacity 0.5s",
                  }}
                  title={image.title}
                  position="bottom"
                />
              )}
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
}

function ImageDialog({
  openImage,
  setOpenImage,
  images,
}: {
  openImage: number | null;
  setOpenImage: (index: number | null) => void;
  images: any[];
}) {
  if (openImage === null) return null;
  return (
    <Dialog
      maxWidth="xl"
      open={openImage !== null}
      onClose={() => {
        setOpenImage(null);
      }}
    >
      {!images[openImage]?.description && images[openImage]?.title && (
        <DialogTitle textAlign="center">{images[openImage]?.title}</DialogTitle>
      )}
      <DialogContent
        sx={{
          maxHeight: "90vh",
          width: "70vw",
          display: "flex",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 1,
          }}
        >
          <IconButton
            onClick={() => {
              if (openImage === 0) setOpenImage(images.length - 1);
              else setOpenImage(openImage - 1);
            }}
          >
            <PrevIcon />
          </IconButton>
        </Box>
        <Box>
          <img
            alt={images[openImage]?.title || "Image"}
            src={images[openImage].url}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              objectPosition: "center",
              height: "auto",
              width: "100%",
            }}
          />
        </Box>
        {images[openImage]?.description && (
          <Box
            sx={{
              width: "35vw",
              px: 2,
            }}
          >
            <Typography variant="h5">{images[openImage]?.title}</Typography>
            <Typography mt={2} variant="body1">
              {images[openImage]?.description}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 1,
          }}
        >
          <IconButton
            onClick={() => {
              if (openImage === images.length - 1) setOpenImage(0);
              else setOpenImage(openImage + 1);
            }}
          >
            <NextIcon />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
