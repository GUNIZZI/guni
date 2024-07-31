import { NavLink } from 'react-router-dom';

import { SvgIconComponent } from '@mui/icons-material';

interface OwnProps {
    item: {
        path: string;
        icon: SvgIconComponent;
        name: string;
        color: string;
    };
}

const NavItem = ({ item: { path, icon: Icon, name, color } }: OwnProps) => {
    return (
        <NavLink to={path} style={{ '--color': color } as React.CSSProperties}>
            <span className="title">{name}</span>
            <Icon className="icon" fontSize="small" />
        </NavLink>
    );
};

export { NavItem };
