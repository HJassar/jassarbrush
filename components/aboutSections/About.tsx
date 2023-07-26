import { Box, Container, Slide, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import LinkRouter from "../LinkRouter";

const me = "/assets/home/me_dive.jpg";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div ref={ref} id="about">
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
              alignContent: "center",
            }}
          >
            <Box
              flexGrow={1}
              minWidth="40%"
              mr={3}
              display={{ xs: "none", md: "flex" }}
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
                As an artist, Alhaitham Jassar (AKA AJ) finds inspiration and
                wonder in the natural world. From its delicate beauty to its
                intimidating mystery, AJ is drawn to the joy of capturing our
                natural heritage through works of art for others to relish.
              </Typography>
              <Typography mb={1}>
                AJ&apos;s focus lies mainly on sea life and underwater scenery,
                although he also dabbles in landscapes and fantasy
                illustrations. Art has been an essential part of AJ&apos;s life
                since childhood, but he took it seriously during his university
                years, teaching himself oil painting techniques and taking on
                commissions whenever possible. Today, AJ continues to hone his
                skills, always striving to improve.
              </Typography>
              <Typography mb={1}>
                AJ mainly works with oil colors, but he also enjoys
                experimenting with acrylics, watercolors, charcoal, ink, and
                pencils. AJ&apos;s art style can be characterized as
                representational realism.
              </Typography>
              <Typography mb={1}>
                Please enjoy the artwork presented here, and for additional
                content such as sketches, progress shots, creepy selfies and
                more, feel free to visit AJ&apos;s official{" "}
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
                  Instagram.
                </LinkRouter>{" "}
                accounts.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Slide>
    </div>
  );
}
