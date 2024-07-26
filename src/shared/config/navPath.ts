import {
    Home,
    PersonSearch,
    TipsAndUpdates,
    AccessTimeFilled,
    WorkspacePremium,
} from '@mui/icons-material';

const navItems = [
    { seq: 0, path: '/', name: 'Home', icon: Home },
    { seq: 1, path: '/about', name: 'About G', icon: PersonSearch },
    { seq: 2, path: '/tech', name: 'Tech Blog', icon: TipsAndUpdates },
    { seq: 3, path: '/blog', name: 'Life Blog', icon: AccessTimeFilled },
    { seq: 4, path: '/pf', name: 'Portfolio', icon: WorkspacePremium },
];

export { navItems };
