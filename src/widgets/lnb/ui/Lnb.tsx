import { NavItem } from './NavItem';

import {
    AccessTimeFilled,
    Home,
    PersonSearch,
    TipsAndUpdates,
    WorkspacePremium,
} from '@mui/icons-material';

// 메뉴 아이템
const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/about', name: 'About G', icon: PersonSearch },
    { path: '/tech', name: 'Tech Blog', icon: TipsAndUpdates },
    { path: '/blog', name: 'Life Blog', icon: AccessTimeFilled },
    { path: '/pf', name: 'Portfolio', icon: WorkspacePremium },
];

const Lnb = () => {
    return (
        <div className="lnb">
            <div>
                <ul>
                    {navItems.map(item => (
                        <li key={item.name}>
                            <NavItem item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { Lnb };
