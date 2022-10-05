import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IError } from "../../interfaces/error.interface";
import LinkRouter from "../LinkRouter";
import Layout from "./Layout";

export default function ErrorLayout({ error }: { error: IError }) {
  return (
    <Layout
      metatags={{ title: error.message }}
      subtitle={error.message}
      main={
        <Box>
          <Typography variant="body1">
            {error.code && <>Error code: {error.code}</>}
          </Typography>
          {(error.code === 401 || error.code === 403) && (
            <>
              <br />
              <LinkRouter to="/" sx={{ my: 2 }}>
                Click here to sign in
              </LinkRouter>
              <br />
              <br />
            </>
          )}
          <Typography variant="body1">
            Please <LinkRouter to="/contact">contact us</LinkRouter> if this
            issue persists.
          </Typography>
        </Box>
      }
    />
  );
}
