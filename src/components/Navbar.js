import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import animateScrollTo from "animated-scroll-to"
import Logo from "./Logo"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#f1be5e8a",
    backgroundColor: "white",
    boxShadow: "none"
  },
  menuButton: {
    backgroundColor: "#f1be5e8a",
    color: "white",
    display: "flex",
    width: "13vw",
    justifyContent: "center",
    maxWidth: "97px"
  },
  socialButtons: {
    display: "flex"
  }
}))

function MenuAppBar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const options = {
    speed: 100,
    offset: -100
  }
  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static" id="customNavBarBorder">
        <Toolbar>
          <Logo />
          <div className={classes.socialButtons}>
            <a
              href="https://www.instagram.com/handmadecakesbyeffiemae/"
              className="fa fa-instagram"
            />
            <a
              href="https://www.facebook.com/cakesbyeffiemae/"
              className="fa fa-facebook"
            />

            <div className={classes.menuButton}>
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null)
                    animateScrollTo(
                      document.querySelector(".scroll-gallery"),
                      options
                    )
                  }}
                >
                  Gallery
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null)
                    animateScrollTo(
                      document.querySelector(".scroll-about"),
                      options
                    )
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null)
                    animateScrollTo(
                      document.querySelector(".scroll-insta"),
                      options
                    )
                  }}
                >
                  Social Media
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null)
                    animateScrollTo(
                      document.querySelector(".scroll-form"),
                      options
                    )
                  }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
