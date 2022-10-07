import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";

import { useInView } from "react-intersection-observer";

import LinkRouter from "../../components/LinkRouter";
import publications, { IPublication } from "../../data/publications";

export default function Publications() {
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
              <Grid item xs={12} md={(12 - 0.5) / publications.length}>
                <LinkRouter
                  target="_blank"
                  rel="noreferrer"
                  to={pub.url}
                  sx={{ color: "white" }}
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
