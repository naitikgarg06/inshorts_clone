import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

import categories  from '../data/categories';
import { Category } from '@mui/icons-material';

export default function SwipeableTemporaryDrawer({setCategory, setLoadMore}) {
  const [state, setState] = React.useState({
    left: false,    
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 220,
        paddingLeft: 1.5,
        paddingRight: 1,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem>Categories</ListItem>         
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem 
          key={text} 
          disablePadding>
            <ListItemButton onClick={() => {setCategory(text)
            setLoadMore(20)}
            }
             style={{height:40, borderRadius:4}}>
              <ListItemText primary={text} />
              {/* {console.log()} */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>    
       
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
            

    </div>
  );
}
