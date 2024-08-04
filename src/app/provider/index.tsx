import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/app/routes/routes';
import { theme } from '@/shared/config/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([AppRoutes]);

const AppProvider = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export { AppProvider };
