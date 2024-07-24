import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routes } from '@/shared/config/routes';
import { theme } from '@/shared/config/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([routes]);

const AppProvider = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export { AppProvider };
