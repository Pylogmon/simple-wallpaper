import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Grid, List, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useRoutes } from 'react-router-dom';
import { nanoid } from "nanoid";
import logo from '../../../assets/logo.png';
import { dark } from './themes';
import LayoutItem from '../LayoutItem';
import routes, { list } from '../../../pages/_routes';

export default function Layout() {
    const page = useRoutes(routes)

    return (
        <ThemeProvider theme={dark}>
            <CssBaseline>
                <Grid container sx={{ height: '100vh' }}>
                    <Grid item xs='auto' sx={{ position: 'fixed' }}>
                        <Box sx={{ paddingTop: '16px', textAlign: "center" }}>
                            <img src={logo} style={{ width: '100px' }}></img>
                        </Box>
                        <List sx={{ width: '150px' }}>
                            {
                                list.map(
                                    x => {
                                        return <LayoutItem key={nanoid()} to={x.path}>{x.label}</LayoutItem>
                                    }
                                )
                            }
                        </List>
                    </Grid>
                    <Grid item xs sx={{ 'marginLeft': '150px' }}>
                        {page}
                    </Grid>
                </Grid>
            </CssBaseline>
        </ThemeProvider >
    )
}
