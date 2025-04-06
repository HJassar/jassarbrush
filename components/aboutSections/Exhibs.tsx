import {
  Box,
  Container,
  Fade,
  LinearProgress,
  ListItem,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

import LinkRouter from "../LinkRouter";
import { IExhibit } from "../../data/exhibitions";
import useData from "../../hooks/useData";
import Layout from "../layout/Layout";

export default function Exhibs() {
  const { data: exhibitions, loading } = useData(
    "exhibitions",
    "all",
    {},
    false
  );

  console.clear();
  console.log("exhibitions", exhibitions);

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  if (loading)
    return (
      <Layout>
        <Container
          sx={{
            minHeight: "95vh",
            pt: "80px",
          }}
        >
          <LinearProgress />
        </Container>
      </Layout>
    );

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
          <Container sx={{ p: 2, pt: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              mb={4}
              textTransform="uppercase"
            >
              Exhibitions
            </Typography>
            <ul>
              {exhibitions?.map((ex: {fields: IExhibit, id: any}) => (
                <li key={ex.id} style={{ marginBottom: "1em" }}>
                  {ex.fields.Title}
                  <br />
                  {ex.fields.URL && (
                    <>
                      <LinkRouter
                        to={
                          ex.fields.URL.startsWith("http")
                            ? ex.fields.URL
                            : "https://" + ex.fields.URL
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ex.fields.URL}
                      </LinkRouter>
                      <br />
                    </>
                  )}
                  {new Date(ex.fields.Month).toLocaleString("en-US", { month: "long", year: "numeric" })}
                  {ex.fields.City && ", " + ex.fields.City}
                </li>
              ))}
            </ul>
          </Container>
        </Box>
      </Fade>
    </>
  );
}
