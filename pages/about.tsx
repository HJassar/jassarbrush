import { NextPage } from "next";

import { Box } from "@mui/material";
import Layout from "../components/layout/Layout";

import About from "../components/aboutSections/About";
import Exhibs from "../components/aboutSections/Exhibs";
import Memberships from "../components/aboutSections/Memberships";
import Awards from "../components/aboutSections/Awards";
import Publications from "../components/aboutSections/Publications";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Box>
        <About key="About" />
        <Exhibs key="Exhibs" />
        <Memberships key="Memberships" />
        <Awards key="Awards" />
        <Publications key="Publications" />
      </Box>
    </Layout>
  );
};

export default AboutPage;
