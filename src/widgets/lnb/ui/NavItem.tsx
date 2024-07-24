import { NavLink } from 'react-router-dom';

import { SvgIconComponent } from '@mui/icons-material';

interface OwnProps {
    item: {
        path: string;
        icon: SvgIconComponent;
        name: string;
    };
}

const NavItem = ({ item: { path, icon: Icon, name } }: OwnProps) => {
    return (
        <NavLink to={path}>
            <span className="title">{name}</span>
            <Icon className="icon" fontSize="small" />
        </NavLink>
    );
};

export { NavItem };
