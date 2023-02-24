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
                alt="About Me"
              />
            </Box>
            <Box>
              <Typography
                variant="h5"
                component="h2"
                textAlign={{ sm: "center", md: "left" }}
                mb={1}
              >
                About Me
              </Typography>
              <Typography mb={1}>
                As an artist, I find inspiration and wonder in the natural
                world. From its delicate beauty to its intimidating mystery, our
                natural heritage is a joy to paint, and I feel honored to record
                its beauty in my works of art for others to relish.
              </Typography>
              <Typography mb={1}>
                My focus lies mainly on sea life and underwater scenery,
                although I also dabble in landscapes and fantasy illustrations.
                Art has been an essential part of my life since childhood, but I
                took it seriously during college, teaching myself oil painting
                and taking on commissions whenever possible. Today, I continue
                to learn new techniques and hone my skills, always striving to
                improve.
              </Typography>
              <Typography mb={1}>
                Below, you&apos;ll find a list of all my previous shows and
                activities, but one of my proudest achievements is having a work
                of mine, &quot;HIV in Plasma,&quot; included in the New York
                State Museum&apos;s permanent collection. I work mainly with oil
                colors, although I also enjoy using acrylics, watercolors,
                charcoal, ink, and pencils. My art style can be characterized as
                representational realism.
              </Typography>
              <Typography mb={1}>
                I hope my art brings you pleasure and joy, and I invite you to
                contact me with any inquiries. For those interested in
                additional content such as sketches, progress shots, creepy
                selfies, and more, please visit my{" "}
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
              <Typography mb={2}>- AJ</Typography>
            </Box>
          </Container>
        </Box>
      </Slide>
    </div>
  );
}
