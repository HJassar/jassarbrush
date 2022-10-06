import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

import Layout from "../components/layout/Layout";

const bg = "/assets/home/wave_bg.jpg";
const signature = "/assets/home/signature.png";

const Home: NextPage = () => {
  const firstSection = (
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
        <img src={signature} alt="AJ Signature" />
      </div>
    </Box>
  );

  const secondSection = (
    <Box
      sx={{
        height: "30vh",
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

  const sections = [firstSection, secondSection];

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
