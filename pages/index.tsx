import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

import Layout from "../components/layout/Layout";
import LinkRouter from "../components/LinkRouter";
import awards from "../data/awards";

import exhibitions, { IExhibit } from "../data/exhibitions";
import memberships from "../data/memberships";
import publications, { IPublication } from "../data/publications";

const bg = "/assets/home/wave_bg.jpg";
const signature = "/assets/home/signature.png";
const me = "/assets/home/me_dive.jpg";

const Home: NextPage = () => {
  const firstSection = (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: `url(${bg})`,
      }}
    >
      <div style={{ width: "60%" }}>
        <img src={signature} alt="AJ Signature" />
      </div>
    </Box>
  );

  const secondSection = (
    <Box
      sx={{
        height: "30vh",
        display: "flex",
        background: "#2e2e2e",
        color: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h5" mb={2}>
          It’s easy to make a painting look like paint, but it’s much harder to
          make a painting that pulls in a viewer so completely that he feels the
          heat of sun on his neck and the sand in his shoes.
        </Typography>
        <Typography variant="h6" color="rgba(255,255,255,.5)">
          James Gurney
        </Typography>
      </Container>
    </Box>
  );

  const sections = [
    firstSection,
    secondSection,
    <About key="About" />,
    <Exhibs key="Exhibs" />,
    <Memberships key="Memberships" />,
    <Awards key="Awards" />,
    <Publications key="Publications" />,
  ];

  return (
    <Layout>
      <>
        {sections.map((section, index) => (
          <Section key={index}>{section}</Section>
        ))}
      </>
    </Layout>
  );
};

export default Home;

function Section({ children }: { children: any }) {
  return <>{children}</>;
}

function About() {
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

function Exhibs() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4}>
          Exhibitions
        </Typography>
        <div ref={ref}>
          <Grid
            container
            gap={1}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {exhibitions.map((ex: IExhibit, index: number) => (
              <Fade
                in={inView}
                mountOnEnter={true}
                timeout={{ enter: 1000, exit: 100 }}
                key={index}
              >
                <Grid item component={Card} xs={11.5} md={3.9}>
                  <CardContent>
                    <strong>{ex.title}</strong>
                    <br />
                    {ex.url && (
                      <>
                        <LinkRouter
                          to={
                            ex.url.startsWith("http")
                              ? ex.url
                              : "https://" + ex.url
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          {ex.url}
                        </LinkRouter>
                        <br />
                      </>
                    )}
                    {ex.month}
                    {ex.city && ", " + ex.city}
                  </CardContent>
                </Grid>
              </Fade>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

function Memberships() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4}>
          Memberships &amp; Associations
        </Typography>
        <div ref={ref} />
        <Grid
          container
          gap={1}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {memberships.map((m: string, index: number) => (
            <Fade
              in={inView}
              mountOnEnter={true}
              timeout={{ enter: 1000, exit: 100 }}
              key={index}
            >
              <Grid item component={Card} xs={11.5} md={3.9}>
                <CardContent>{m}</CardContent>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Awards() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <Container sx={{ p: 2, py: 3 }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4}>
          Awards &amp; Honors
        </Typography>
        <div ref={ref} />
        <Grid
          container
          gap={1}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {awards.map((award: string, index: number) => (
            <Fade
              in={inView}
              mountOnEnter={true}
              timeout={{ enter: 1000, exit: 100 }}
              key={index}
            >
              <Grid item component={Card} xs={11.5} md={3.9}>
                <CardContent>{award}</CardContent>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Publications() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#2e2e2e",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          py: 3,
          minHeight: "80vh",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          mb={4}
          sx={{ color: "white" }}
        >
          Publications That Include My Work
        </Typography>
        <div ref={ref} />
        <Grid container gap={1}>
          {publications.map((pub: IPublication, index: number) => (
            <Fade
              in={inView}
              mountOnEnter={true}
              timeout={{ enter: 1000, exit: 100 }}
              key={index}
            >
              <Grid item sm={6 - 0.5} md={(12 - 0.5) / publications.length}>
                <LinkRouter
                  target="_blank"
                  rel="noreferrer"
                  to={pub.url}
                  color="white"
                  underline="none"
                >
                  <CardMedia
                    component="img"
                    height="120"
                    sx={{
                      objectFit: "contain",
                      mt: { sm: 0, md: 1 },
                    }}
                    image={"/assets/home/publications/" + pub.cover}
                    alt={pub.main}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <strong>{pub.main}</strong>
                    <br />
                    {pub.sub}
                  </CardContent>
                </LinkRouter>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
