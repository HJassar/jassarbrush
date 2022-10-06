import { Box, Container, Fade, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";

import awards from "../../data/awards";

export default function Awards() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <Fade
        in={inView}
        mountOnEnter={true}
        timeout={{ enter: 1000, exit: 100 }}
      >
        <Container sx={{ p: 2, py: 3 }}>
          <Typography variant="h5" component="h2" mb={4}>
            Awards &amp; Honors
          </Typography>
          <div ref={ref} />
          <ul>
            {awards.map((award: string, index: number) => (
              <li style={{ marginBottom: "0.5em" }}>{award}</li>
            ))}
          </ul>
        </Container>
      </Fade>
    </Box>
  );
}
