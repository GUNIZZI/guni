import { Link } from 'react-router-dom';

import { useAuth } from '@/entitie/auth';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { LoaderCircle } from '@/shared/ui/loader';

import { TechList } from './ListTechBlog';
import { useFetchQuery } from '../hook/useBlog';

import { Add } from '@mui/icons-material';
import { Backdrop } from '@mui/material';

interface OwnProps {
    type: 'tech' | 'life' | 'pf';
}

const List = ({ type }: OwnProps) => {
    const { data: posts, isLoading } = useFetchQuery(type);
    const { isLogined, user } = useAuth();

    return (
        <>
            {isLogined && user?.role === 'ADMIN' && (
                <div className="btns">
                    <GradientButton
                        className="isConfirm"
                        component={Link}
                        to="./write"
                        style={{ color: '#fff' }}
                        title="추가"
                        size="large"
                    >
                        <Add />
                    </GradientButton>
                </div>
            )}
            {type === 'tech' && <TechList datas={posts} />}
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </>
    );
};

export { List };
