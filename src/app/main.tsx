import ReactDOM from 'react-dom/client';

import { AppProvider } from './provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <AppProvider />,
    // </React.StrictMode>,
);
