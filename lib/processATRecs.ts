import { CustomImage } from "../components/Gallery";

export default function processAirtableRecords(records: any[]) {
  const processedImages: CustomImage[] = records.map((image: any) => {
    const { id, fields } = image;
    const { title, featured, file, description } = fields;
    const { url, thumbnails } = file[0];
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
