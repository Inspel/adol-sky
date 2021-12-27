import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import React from 'react';
import { DrawerHeader, SideBar } from '../Components/SideBar';
import { DRAWER_WIDTH } from '../Constants/Constants';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  //@ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//@ts-ignore
export const BaseLayout = ({ logo, mainMenu, userMenu, content }) => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                //@ts-ignore
                open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {logo}
                    </Typography>
                    <Typography variant="h6" noWrap component="div" style={{position: 'absolute', right: '16px'}}>
                        {userMenu}
                    </Typography>
                </Toolbar>
               
            </AppBar>

            <SideBar theme={theme} open={open} handleDrawerClose={handleDrawerClose} mainMenu={mainMenu}/>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph>
                    {content}
                </Typography>
                
            </Box>
        </Box>
    )
}