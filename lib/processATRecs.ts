import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  title: string;
  original: string;
  subtitle: string;
}

function processAirtableRecords(records: any[]) {
  const processedImages: any[] = records.map((image: any) => {
    const { id, fields } = image;
    const { title, featured, file, description, subtitle } = fields;
    const { url, thumbnails } = file[0];
    return {
      id,
      original: url,
      src: url,
      width: thumbnails.small.width,
      height: thumbnails.small.height,
      title,
      caption: description,
      subtitle,
    };
  });
  return processedImages;
}

export default processAirtableRecords;
