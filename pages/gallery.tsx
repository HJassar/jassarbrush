import { Container } from "@mui/system";

import useParams from "../hooks/useParams";
import Layout from "../components/layout/Layout";
import Gallery from "../components/Gallery";
import { Box } from "@mui/material";
import Image from "next/image";

export default function GalleryPage() {
  const category = useParams("category");
  if (!category) return <Layout loading />;
  if (typeof category === "string")
    return (
      <Layout>
        <Container
          sx={{
            minHeight: "95vh",
            pt: "80px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={`/assets/categories/${category}.png`}
              alt={category}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Box>
          <Gallery category={category} />
        </Container>
      </Layout>
    );
  return null;
}