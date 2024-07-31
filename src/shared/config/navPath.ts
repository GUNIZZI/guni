import {
    Home,
    PersonSearch,
    TipsAndUpdates,
    AccessTimeFilled,
    WorkspacePremium,
} from '@mui/icons-material';

const NAV_PATH = [
    { seq: 0, path: '/', name: 'Home', icon: Home, color: '#ff7ac3' },
    { seq: 1, path: '/about', name: 'About G', icon: PersonSearch, color: '#ffa700' },
    { seq: 2, path: '/tech', name: 'Tech Blog', icon: TipsAndUpdates, color: '#ca5eff' },
    { seq: 3, path: '/blog', name: 'Life Blog', icon: AccessTimeFilled, color: '#ceff00' },
    { seq: 4, path: '/pf', name: 'Portfolio', icon: WorkspacePremium, color: '#00d9ff' },
];

export { NAV_PATH };
