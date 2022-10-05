import {
  FacebookRounded as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import LinkRouter from "../LinkRouter";

export default function Footer() {
  return (
    <Box sx={{ color: "white", background: "#000000" }}>
      <Container
        sx={{
          p: 2,
          py: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
        id="contact"
      >
        <Box
          minHeight={400}
          width={{ xs: "100%", sm: "60%" }}
          sx={{
            mr: { xs: 0, sm: 5 },
            p: { xs: 1, sm: 3 },
            borderRadius: 5,
            background: "#FFFFFF",
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            label="Your Name"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Your Email"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="filled"
            multiline
            rows={4}
          />
          <Button color="primary" fullWidth variant="contained">
            Submit
          </Button>
        </Box>
        <Box
          width={{ xs: "100%", sm: "40%" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box>
            To check for the availability of any of my paintings, please feel
            free to send me a message, or you may also contact me, should you
            prefer, via{" "}
            <LinkRouter
              target="_blank"
              to="https://web.facebook.com/JassarBrush"
              rel="noreferrer"
            >
              Facebook
            </LinkRouter>{" "}
            and{" "}
            <LinkRouter
              target="_blank"
              to="https://www.instagram.com/jassar_brush/"
              rel="noreferrer"
            >
              Instagram&apos;s
            </LinkRouter>{" "}
            direct messaging.
          </Box>
          <Box mt={2} display="flex" justifyContent="space-around">
            <LinkRouter
              target="_blank"
              to="https://web.facebook.com/JassarBrush"
              rel="noreferrer"
              color="inherit"
              sx={{ "&:hover": { color: "#3b5998" }, "transition": ".3s" }}
            >
              <FacebookIcon fontSize="large" />
            </LinkRouter>
            <LinkRouter
              target="_blank"
              to="https://www.instagram.com/jassar_brush/"
              rel="noreferrer"
              color="inherit"
              sx={{ "&:hover": { color: "#3b5998" }, "transition": ".3s" }}
            >
              <InstagramIcon fontSize="large" />
            </LinkRouter>
            <LinkRouter
              target="_blank"
              to="https://www.youtube.com/channel/UCSoZteOTIlCssxEtkhcUmIw/featured"
              rel="noreferrer"
              color="inherit"
              sx={{ "&:hover": { color: "#3b5998" }, "transition": ".3s" }}
            >
              <YouTubeIcon fontSize="large" />
            </LinkRouter>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          background: "#2e2e2e",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            textAlign: "center",
            p: 2,
          }}
        >
          All artwork &#169; {new Date().getFullYear()} Alhaitham Jassar
        </Container>
      </Box>
    </Box>
  );
}
