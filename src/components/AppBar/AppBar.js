import React from 'react'
import styled from 'styled-components/macro'
import { Link } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import logo from './logo.svg'
import routes from './routes'
import user from './user.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  growDivider: {
    flexGrow: 0,
    [theme.breakpoints.up('md')]: {
      flexGrow: 1
    }
  },
  search: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0
    }
  },
  accountSection: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: '#101010'
  },
  menuButton: {
    display: 'block',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:visited,
  &:link,
  &:active {
    color: #fff;
  }
`

const Logo = styled.img``

const AppBarComponent = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(!open)
  }

  return (
    <div className={classes.grow}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <StyledLink to='/' className={classes.logo}>
            <Logo src={logo} alt='BetterMeter' />
          </StyledLink>
          <div className={classes.growDivider} />
          <div className={classes.accountSection}>
            <IconButton
              aria-label='show 9 new notifications'
              color='inherit'
              className={classes.search}
            >
              <SearchIcon />
            </IconButton>
            <IconButton aria-label='show 9 new notifications' color='inherit'>
              <Badge badgeContent={9} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls='primary-search-account-menu'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={toggleDrawer}
      >
        <List>
          {routes.map(({ title, to, Icon }) => (
            <>
              <ListItem
                button
                key={title}
                component={Link}
                to={to}
                onClick={handleDrawerClose}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default AppBarComponent
