import { Link } from 'react-router-dom';

import { useAuth } from '@/entitie/auth';
import { GradientButton } from '@/shared/ui/button/GradientButton';

import { Add } from '@mui/icons-material';

const AddButton = () => {
    const { isLogined, user } = useAuth();

    if (!isLogined || user?.role !== 'ADMIN') return null;

    return (
        <GradientButton
            className="btnConfirm"
            component={Link}
            to="./write"
            title="추가"
            style={{
                position: 'fixed',
                right: '2rem',
                bottom: '2rem',
                width: '4rem',
                height: '4rem',
                color: '#fff',
                zIndex: 20,
            }}
        >
            <Add sx={{ fontSize: '2rem' }} />
        </GradientButton>
    );
};

export { AddButton };
