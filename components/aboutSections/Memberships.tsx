import { Box, Container, Fade, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";

import memberships from "../../data/memberships";

export default function Memberships() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <div ref={ref} />
      <Fade
        in={inView}
        mountOnEnter={true}
        timeout={{ enter: 1000, exit: 100 }}
      >
        <Container sx={{ p: 2 }}>
          <Typography variant="h5" component="h2" mb={4}>
            Memberships &amp; Associations
          </Typography>
          <ul>
            {memberships.map((m: string, index: number) => (
              <li style={{ marginBottom: "0.5em" }}>{m}</li>
            ))}
          </ul>
        </Container>
      </Fade>
    </Box>
  );
}
