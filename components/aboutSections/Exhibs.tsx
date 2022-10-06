import { Box, Container, Fade, ListItem, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

import LinkRouter from "../LinkRouter";
import exhibitions, { IExhibit } from "../../data/exhibitions";

export default function Exhibs() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <>
      <div ref={ref} />
      <Fade
        in={inView}
        mountOnEnter={true}
        timeout={{ enter: 1000, exit: 100 }}
      >
        <Box
          sx={{
            background: "#00000016",
          }}
        >
          <Container sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" mb={4}>
              Exhibitions
            </Typography>
            <ul>
              {exhibitions.map((ex: IExhibit, index: number) => (
                <li key={index} style={{ marginBottom: "0.5em" }}>
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
                </li>
              ))}
            </ul>
          </Container>
        </Box>
      </Fade>
    </>
  );
}
