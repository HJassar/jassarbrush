import { Container } from "@mui/system";

import useParams from "../hooks/useParams";
import Layout from "../components/layout/Layout";
import Gallery from "../components/Gallery";
import { Box } from "@mui/material";

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
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img
              src={`/assets/categories/${category}.png`}
              alt={category}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Box>
          <Box mb={2}>
            <Gallery category={category} />
          </Box>
        </Container>
      </Layout>
    );
  return null;
}
