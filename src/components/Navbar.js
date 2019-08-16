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
const allText = require("../copy.js")

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    backgroundColor: "#58544e",
    color: "#d3cce3",
    padding: 0,
    display: "flex"
  },
  socialButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
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
      <AppBar position="static" id="customNavBarBorder">
        <Toolbar>
          <div className="socialElementContainer">
            <div className={classes.menuButton}>
              <IconButton
                id="menu-icon-appbar"
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon id="menu-icon2-appbar" />
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
                {allText.navBar.menuItems.map((item, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      setAnchorEl(null)
                      animateScrollTo(
                        document.querySelector(item.scrollTo),
                        options
                      )
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
          <Logo />
          <div className={classes.socialButtons}>
            <div className="socialElementContainer">
              <a
                href="https://www.instagram.com/handmadecakesbyeffiemae/"
                className="fa fa-instagram"
              />
            </div>
            <div className="socialElementContainer">
              <a
                href="https://www.facebook.com/cakesbyeffiemae/"
                className="fa fa-facebook"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
