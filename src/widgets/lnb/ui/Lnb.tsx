import { useLnbMove } from '@/features/lnb/model/useLnbMove';
import { navItems } from '@/shared/config/navPath';
import { theme } from '@/shared/config/theme';

import { lnbStyle } from './Lnb.css';
import { NavItem } from './NavItem';

const Lnb = () => {
    // const { selIdx } = useLnbMove();

    return (
        <div css={lnbStyle(theme)}>
            {/* {selIdx} */}
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
