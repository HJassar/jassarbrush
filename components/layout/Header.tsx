import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Home as HomeIcon } from "@mui/icons-material";
import LinkRouter from "../LinkRouter";
import { Divider, Slide, Typography, useScrollTrigger } from "@mui/material";

const linkProps = {
  color: "inherit",
  display: "block",
  ml: 1,
};

const pages: any[] = [
  <LinkRouter sx={linkProps} underline="none" to="/#about">
    <Button color="inherit">About</Button>
  </LinkRouter>,
  <FineArt />,
  <LinkRouter
    sx={linkProps}
    underline="none"
    to="/gallery?category=illustrations"
  >
    <Button color="inherit">Illustrations</Button>
  </LinkRouter>,
  <LinkRouter
    sx={linkProps}
    underline="none"
    to="/gallery?category=caricatures"
  >
    <Button color="inherit">Caricatures</Button>
  </LinkRouter>,
  <LinkRouter
    sx={linkProps}
    target="_blank"
    rel="noopener"
    underline="none"
    to="https://displate.com/jassar?type=displates"
  >
    <Button color="inherit">Shop</Button>
  </LinkRouter>,
  <LinkRouter sx={linkProps} underline="none" to="/#contact">
    <Button color="inherit">Contact</Button>
  </LinkRouter>,
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({ threshold: 100 });

  return (
    <Slide in={!trigger}>
      <AppBar position="fixed" sx={{ background: "rgba(0,0,0,0.7)" }}>
        <Container maxWidth="xl">
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem>{page}</MenuItem>
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
              {pages.map((page) => (
                <Box ml={1}>{page}</Box>
              ))}
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
    { label: "Divers", slug: "divers" },
    { label: "Ships", slug: "ships" },
    { label: "Landscapes", slug: "landscapes" },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        sx={{ ...linkProps, cursor: "pointer" }}
        onClick={handleOpenNavMenu}
      >
        Fine Art
      </Button>
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
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
      >
        {items.map((item: IItem, index: number) => (
          <LinkRouter
            color="inherit"
            underline="none"
            to={"/gallery?category=" + item.slug}
          >
            <MenuItem key={item.slug}>{item.label}</MenuItem>
            {index < items.length - 1 && <Divider />}
          </LinkRouter>
        ))}
      </Menu>
    </Box>
  );
}
