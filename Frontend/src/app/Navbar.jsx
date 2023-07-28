"use client";
import { React, useContext, useState } from "react";
import AuthenticationContext from "../Store/Authentication-context";

import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
// import SearchInput from '../app/SearchInput'
import LogoutIcon from "@mui/icons-material/Logout";
// const navselectors = ['Home', 'Iterniaries', 'Deals ']
const pages = ["Home", "Pricing", "Login"];
const pageess = [
  {
    name: "Your Profile",
    logo: <HomeIcon />,
  },
  {
    name: "Manage Travels",
    logo: <MenuBookIcon />,
  },
  {
    name: "Settings",
    logo: <SettingsIcon />,
  },
  {
    name: "Logout",
    logo: <LogoutIcon />,
  },
];
const settings = ["Your Profile", "Manage Travels", "Settings", "Logout"];

const Navbar = ({ userdet }) => {
  const authenticationContextCtx = useContext(AuthenticationContext);

  const changeRoute = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "green",
        }}
      >
        <Container maxWidth="xl" sx={{}}>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              LOGO
            </Typography>
            {/* -----------------------mobile version -------------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  <MenuItem
                    key={page}
                    onClick={(e) => {
                      e.preventDefault();

                      page == "Login"
                        ? authenticationContextCtx.onShow("LogInOpen")
                        : changeRoute.push(`/${page}`);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
              LOGO
            </Typography>
            {/* ----------------desktop version---------------------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(e) => {
                    e.preventDefault();

                    page == "Login"
                      ? authenticationContextCtx.onShow("LogInOpen")
                      : changeRoute.push(`/${page}`);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {userdet ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {pageess.map((pageess) => (
                    <MenuItem key={pageess} onClick={handleCloseUserMenu}>
                      {pageess.logo}
                      <Typography
                        textAlign="center"
                        sx={{
                          justifyContent: "center",
                          ml: 1,
                        }}
                      >
                        {pageess.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
