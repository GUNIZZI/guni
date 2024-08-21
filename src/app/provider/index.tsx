import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/app/routes/routes';
import { theme } from '@/shared/config/theme';

import { CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter(AppRoutes, { basename: '/guni' });
const queryClient = new QueryClient();

const AppProvider = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                {/* <ReactQueryDevtools /> */}
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export { AppProvider };
