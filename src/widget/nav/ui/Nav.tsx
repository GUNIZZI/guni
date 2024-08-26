import { Interpolation, Theme } from '@emotion/react';

import { NAV_PATH } from '@/shared/config/navPath';

import { navStyle } from './Nav.css';
import { NavItem } from './NavItem';

const Nav = () => {
    // useNavMove();

    return (
        <nav css={navStyle as Interpolation<Theme>}>
            <ul>
                {NAV_PATH.map(item => (
                    <li key={item.name}>
                        <NavItem item={item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
