import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Grid, List, Box, Button } from '@mui/material';
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
                <Grid container sx={{ height: '100vh' }} >
                    <Grid item xs='auto' container direction={'column'}>
                        <Grid item xs='auto'>
                            <Box sx={{ paddingTop: '16px', textAlign: "center" }}>
                                <img src={logo} style={{ width: '100px' }}></img>
                            </Box>
                        </Grid>
                        <Grid item xs sx={{ overflow: 'auto' }}>
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
                    </Grid>
                    <Grid item xs container direction={'column'}>
                        <Grid item xs sx={{ overflow: 'auto' }}>
                            {page}
                        </Grid>
                        <Grid >
                            <Box sx={{ margin: '8px', display: 'flex', justifyContent: "flex-end" }}>
                                <Button variant='outlined' sx={{ marginLeft: '8px' }}>关闭</Button>
                                <Button variant='contained' sx={{ marginLeft: '8px' }}>应用</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </CssBaseline>
        </ThemeProvider >
    )
}
