import React from "react";

import { Box, Breadcrumbs, LinearProgress, Typography } from "@mui/material";

import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import Metatags from "../Metatags";

import LinkRouter from "../LinkRouter";

export default function Layout({
  loading,
  children,
  subtitle,
  breadcrumbs,
  metatags,
}: {
  loading?: boolean;
  children?: any; // JSX.Element | JSX.Element[] | string;
  subtitle?: string | React.ReactNode;
  breadcrumbs?: { path: string | false; label: string }[];
  metatags?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}) {
  const route = useRouter();

  const contentMarkup = (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {breadcrumbs && (
        <Breadcrumbs>
          {breadcrumbs.map(
            (breadcrumb: { path: string | false; label: string }) => (
              <LinkRouter to={breadcrumb.path} key={breadcrumb.label}>
                {breadcrumb.label}
              </LinkRouter>
            ),
          )}
        </Breadcrumbs>
      )}
      <Typography component="h1" variant="h4">
        {subtitle}
      </Typography>
      {children}
    </Box>
  );

  const loadingMarkup = (
    <Box flexGrow={1}>
      <LinearProgress />
    </Box>
  );

  return (
    <>
      <Metatags
        title={metatags?.title && `${metatags.title} | AJ`}
        {...metatags}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        {loading ? loadingMarkup : contentMarkup}
        <Footer />
      </Box>
    </>
  );
}
