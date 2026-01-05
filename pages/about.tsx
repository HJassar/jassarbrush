import { NextPage } from "next";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";
import Layout from "../components/layout/Layout";

import About from "../components/aboutSections/About";
// Use dynamic import with ssr: false to avoid hydration mismatch for client-side fetched data
const Exhibs = dynamic(() => import("../components/aboutSections/Exhibs"), {
  ssr: false,
});
import Memberships from "../components/aboutSections/Memberships";
import Awards from "../components/aboutSections/Awards";
import Publications from "../components/aboutSections/Publications";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Box>
        <About key="About" />
        <Exhibs key="Exhibs" />
        {/* <Memberships key="Memberships" />
         <Awards key="Awards" /> */}
        <Publications key="Publications" />
      </Box>
    </Layout>
  );
};

export default AboutPage;
