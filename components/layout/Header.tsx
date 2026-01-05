import { useContext, useState, useEffect } from "react";
import { LBContext } from "../../LBContext";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Divider,
  Slide,
  useScrollTrigger,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  FacebookRounded as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

import LinkRouter from "../LinkRouter";

const linkProps = {
  textTransform: "uppercase",
  p: 1,
  display: "flex",
  color: "white",
  fontWeight: 600,
};

const pages: any[] = [
  <LinkRouter key="0" sx={linkProps} underline="none" to="/about">
    About
  </LinkRouter>,
  <LinkRouter key="1" sx={linkProps} underline="none" to="/news">
    News
  </LinkRouter>,
  <FineArt key="fa" />,
  <LinkRouter
    key="2"
    sx={linkProps}
    underline="none"
    to="/gallery?category=murals"
  >
    Murals
  </LinkRouter>,
  <LinkRouter
    key="3"
    sx={linkProps}
    underline="none"
    to="/gallery?category=illustrations"
  >
    Illustrations
  </LinkRouter>,
  <LinkRouter
    key="4"
    sx={linkProps}
    underline="none"
    to="/gallery?category=caricatures"
  >
    Caricatures
  </LinkRouter>,
  <LinkRouter
    key="5"
    sx={linkProps}
    target="_blank"
    rel="noopener"
    to="https://displate.com/jassar?type=displates"
  >
    Displate
  </LinkRouter>,
  <LinkRouter
    key="6"
    sx={linkProps}
    target="_blank"
    rel="noopener"
    to="https://pixels.com/profiles/alhaitham-jassar/shop"
  >
    Merch
  </LinkRouter>,
  <LinkRouter key="7" sx={linkProps} underline="none" to="#contact">
    Contact
  </LinkRouter>,
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { isLBOpen } = useContext(LBContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(window.scrollY > 100);
    };
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = (
    <Box display="flex" alignItems="center" ml={2}>
      <LinkRouter
        target="_blank"
        to="https://web.facebook.com/JassarBrush"
        rel="noreferrer"
        sx={{ ml: 2, color: "white" }}
      >
        <FacebookIcon />
      </LinkRouter>
      <LinkRouter
        target="_blank"
        to="https://www.instagram.com/jassar_brush/"
        rel="noreferrer"
        sx={{ ml: 2, color: "white" }}
      >
        <InstagramIcon />
      </LinkRouter>
      <LinkRouter
        target="_blank"
        to="https://www.youtube.com/channel/UCSoZteOTIlCssxEtkhcUmIw/featured"
        rel="noreferrer"
        sx={{ ml: 2, color: "white" }}
      >
        <YouTubeIcon />
      </LinkRouter>
    </Box>
  );

  return (
    <Slide in={!trigger && !isLBOpen}>
      <AppBar position="fixed" sx={{ background: "rgba(0,0,0,0.7)" }}>
        <Container>
          <Toolbar disableGutters>
            <LinkRouter
              variant="h6"
              underline="none"
              color="inherit"
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </LinkRouter>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="Side Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  "& .MuiPaper-root": { background: "rgba(0,0,0,0.7)" },
                  "display": { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem sx={{ color: "white" }} key={index}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LinkRouter
              variant="h5"
              noWrap
              to="/"
              underline="none"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <HomeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            </LinkRouter>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page, index) => (
                <Box key={index} ml={1}>
                  {page}
                </Box>
              ))}
              {socialLinks}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

function FineArt() {
  interface IItem {
    label: string;
    slug: string;
  }
  const items: IItem[] = [
    { label: "Water Worlds", slug: "water-worlds" },
    { label: "Ocean Noir", slug: "ocean-noir" },
    { label: "Divers", slug: "divers" },
    { label: "Ships", slug: "ships" },
    { label: "Landscapes", slug: "landscapes" },
    { label: "Figurative", slug: "figurative" },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <LinkRouter to="#" sx={{ ...linkProps }} onClick={handleOpenNavMenu}>
        Fine Art
      </LinkRouter>
      <Menu
        id="fine-art-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ "& .MuiPaper-root": { background: "rgba(0,0,0,0.7)" } }}
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
      >
        {items.map((item: IItem) => (
          <LinkRouter
            key={item.slug}
            underline="none"
            to={"/gallery?category=" + item.slug}
            sx={{ color: "white" }}
          >
            <MenuItem>{item.label}</MenuItem>
          </LinkRouter>
        ))}
      </Menu>
    </Box>
  );
}
