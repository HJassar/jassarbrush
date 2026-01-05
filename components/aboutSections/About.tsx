import { Box, Container, Slide, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import LinkRouter from "../LinkRouter";

const me = "/assets/home/me.jpg";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div ref={ref} id="about" style={{ background: "black", color: "white" }}>
      <Slide mountOnEnter in={inView} direction="left" timeout={500}>
        <Box
          sx={{
            position: "relative",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "56px",
          }}
        >
          <Container
            sx={{
              p: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <Box
              flexGrow={1}
              minWidth="40%"
              width={{ xs: "100%" }}
              mr={3}
              justifyContent="center"
            >
              <img
                style={{
                  objectFit: "cover",
                  borderRadius: 15,
                  width: "100%",
                  height: "100%",
                }}
                src={me}
                alt="About"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  component="h2"
                  textAlign={{ sm: "center", md: "left" }}
                  textTransform="uppercase"
                  mb={1}
                >
                  About
                </Typography>
                <Typography mb={1}>
                  Alhaitham Jassar (AJ) finds endless inspiration in the natural
                  world, captivated by its delicate beauty and profound mystery.
                  Through his art, he seeks to celebrate and share the wonder of
                  our natural heritage, creating pieces that others can admire
                  and enjoy.
                </Typography>
                <Typography mb={1}>
                  AJ's artistic focus spans sea life, underwater scenes,
                  landscapes, and imaginative fantasy illustrations. While art
                  has been a lifelong passion, it was during his university
                  years that he began to take it seriously, mastering oil
                  painting techniques on his own and accepting commissions
                  whenever possible.
                </Typography>
                <Typography mb={1}>
                  Primarily working with oil paints, AJ also enjoys
                  experimenting with a variety of mediums, including acrylics,
                  watercolors, charcoal, ink, and pencils. His art is best
                  described as representational realism.
                </Typography>
                <Typography mb={1}>
                  Please enjoy the artwork presented here, and for additional
                  content such as sketches, progress shots, creepy selfies and
                  more, feel free to visit AJ's official{" "}
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
                    to="https://web.instagram.com/jassar_brush/"
                    rel="noreferrer"
                  >
                    Instagram
                  </LinkRouter>{" "}
                  accounts.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Slide>
    </div>
  );
}
