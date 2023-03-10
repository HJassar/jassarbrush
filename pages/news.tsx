import { Container } from "@mui/material";
import type { NextPage } from "next";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import useData from "../hooks/useData";

const News: NextPage = () => {
  const { data, loading } = useData("news", "all", {}, false);

  // Add them to the array
  useEffect(() => {
    if (data) console.log(data);
    console.log("nice");
  }, [data]);

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
