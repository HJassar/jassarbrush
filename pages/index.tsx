import { useState, useEffect } from "react";

import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

import Layout from "../components/layout/Layout";
import useData from "../hooks/useData";
import LinkRouter from "../components/LinkRouter";

import ReactMarkdown from "react-markdown";

const bg = "/assets/home/wave_bg.jpg";
const signature = "/assets/home/signature.png";

const Home: NextPage = () => {
  const wavyBackground = (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "60%", maxWidth: "849px" }}>
        <img src={signature} alt="AJ Signature" style={{ width: "100%" }} />
      </div>
    </Box>
  );

  const quoteSection = (
    <Box
      sx={{
        minHeight: "30vh",
        display: "flex",
        background: "#2e2e2e",
        color: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h5" mb={2}>
          It’s easy to make a painting look like paint, but it’s much harder to
          make a painting that pulls in a viewer so completely that he feels the
          heat of sun on his neck and the sand in his shoes.
        </Typography>
        <Typography variant="h6" color="rgba(255,255,255,.5)">
          James Gurney
        </Typography>
      </Container>
    </Box>
  );

  const sections = [
    wavyBackground,
    quoteSection,
    <FeaturedImage key="featured" />,
  ];

  return (
    <Layout>
      <>
        {sections.map((section, index) => (
          <Section key={index}>{section}</Section>
        ))}
      </>
    </Layout>
  );
};

export default Home;

function Section({ children }: { children: any }) {
  return <>{children}</>;
}

function FeaturedImage() {
  const { data, loading } = useData(
    "images",
    "all",
    { featured: "yes" },
    false,
  );

  const [theFeatured, setTheFeatured] = useState<any>(null);

  useEffect(() => {
    if (data) setTheFeatured(data[0]);
  }, [data]);

  if (loading) return <CircularProgress />;

  if (!theFeatured) return null;

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        background: "#4e4e4e",
        color: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h4" my={2}>
          Featured Artwork
        </Typography>
        <Box sx={{ width: "80%" }}>
          <img
            src={theFeatured.fields.file[0].url}
            alt="Featured Artwork"
            style={{
              width: "100%",
              objectFit: "contain",
              borderRadius: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,.3)",
            }}
          />
          <Typography component="h3" variant="h5" my={1}>
            {theFeatured.fields.title}
          </Typography>
          {theFeatured.fields.description && (
            <ReactMarkdown>{theFeatured.fields.description}</ReactMarkdown>
          )}
          <LinkRouter
            underline="hover"
            to={`/gallery?category=${theFeatured.fields.category_slug[0]}`}
          >
            More like this
          </LinkRouter>
        </Box>
      </Container>
    </Box>
  );
}
