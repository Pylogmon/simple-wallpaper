import { createTheme } from '@mui/material/styles';
export const dark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4385f6'
        }
    },
});
export const light = createTheme({
    palette: {
        mode: 'light',
    },
});