import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

const BouncingArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const handleAnimationFrame = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + direction.x,
        y: prevPosition.y + direction.y,
      }));

      setDirection((prevDirection) => ({
        x: prevDirection.x * (position.x >= 300 || position.x <= 0 ? -1 : 1),
        y: prevDirection.y * (position.y >= 300 || position.y <= 0 ? -1 : 1),
      }));
    };

    const animationFrameId = requestAnimationFrame(handleAnimationFrame);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, direction]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const span = {
    display: "block",
    width: "1.5vw",
    height: "1.5vw",
    borderBottom: "5px solid white",
    borderRight: "5px solid white",
    transform: "rotate(45deg)",
    margin: "-10px",
    animation: "animate 2s infinite",
  };

  return (
    <Box
      style={{
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,

        zIndex: 2,
      }}
    >
      <span
        style={{
          ...span,
        }}
      ></span>
      <span
        style={{
          ...span,
          animationDelay: "-0.2s",
        }}
      ></span>
      <span
        style={{
          ...span,
          animationDelay: "-0.4s",
        }}
      ></span>
    </Box>
  );
};

export default BouncingArrow;
