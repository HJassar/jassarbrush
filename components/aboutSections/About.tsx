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
                Nature is full of inspiration and wonder. It is delicate and yet
                intimidating, familiar and yet mysterious. Our natural heritage
                is a joy to paint and I feel honored to have the ability to
                transfer that beauty and record it into works of art for the
                viewer to enjoy.
              </Typography>
              <Typography mb={1}>
                My works are mainly focused on sea life and underwater scenery
                even though I dabble into landscapes and fantasy illustrations
                every now and then. Art has been a huge part of my life growing
                up, but I took art seriously during college by teaching myself
                oil painting and taking on commissions whenever I could, and the
                journey of learning new techniques and improving my own skills
                continues today. One of the personal highlights of my artistic
                career is having a work of mine - HIV in Plasma - included in
                the New York State Museum’s permanent collection.
              </Typography>
              <Typography mb={1}>
                In regards to mediums and tools that I use for creating my art,
                oil colors are the main medium of choice. Other favorites
                include Acrylics, watercolors, charcoal, ink, and pencils. My
                art style can be categorized as representational realism. I hope
                that my art brings you pleasure and joy, and please don’t
                hesitate to contact me for any enquiries. If you are interested
                in extra content like sketches, progress shots, creepy selfies
                and more you may visit my social media accounts on{" "}
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
                </LinkRouter>
              </Typography>
              <Typography mb={2}>- AJ</Typography>
            </Box>
          </Container>
        </Box>
      </Slide>
    </div>
  );
}
