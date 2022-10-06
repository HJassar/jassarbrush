import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

function processAirtableRecords(records: any[]) {
  const processedImages: any[] = records.map((image: any) => {
    const { id, fields } = image;
    const { title, featured, file, description } = fields;
    const { url, thumbnails } = file[0];
    console.log(thumbnails);
    return {
      id,
      original: url,
      src: url,
      width: thumbnails.small.width,
      height: thumbnails.small.height,
      caption: title,
    };
  });
  return processedImages;
}

export default processAirtableRecords;
