import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/app/routes/routes';
import { theme } from '@/shared/config/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter(AppRoutes);
const queryClient = new QueryClient();

const AppProvider = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export { AppProvider };
