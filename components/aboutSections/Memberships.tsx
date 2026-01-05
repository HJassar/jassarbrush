import { Box, Container, Fade, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import memberships from "../../data/memberships";

export default function Memberships() {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show fade animation after mount to avoid hydration mismatch
  const shouldAnimate = mounted && inView;

  return (
    <Box
      sx={{
        background: "#00000016",
      }}
    >
      <div ref={ref} />
      <Fade
        in={shouldAnimate}
        mountOnEnter={true}
        timeout={{ enter: 1000, exit: 100 }}
      >
        <Container sx={{ p: 2 }}>
          <Typography
            variant="h5"
            component="h2"
            mb={4}
            textTransform="uppercase"
          >
            Memberships & Associations
          </Typography>
          <ul>
            {memberships.map((m: string, index: number) => (
              <li key={index} style={{ marginBottom: "0.5em" }}>
                {m}
              </li>
            ))}
          </ul>
        </Container>
      </Fade>
    </Box>
  );
}
