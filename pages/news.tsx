import { Container } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout/Layout";

const News: NextPage = () => {
  return (
    <Layout>
      <Container
        sx={{
          minHeight: "95vh",
          pt: "80px",
        }}
      >
        Good stuff
      </Container>
    </Layout>
  );
};

export default News;
