import { ArrowBack } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';

const BackButton = ({ ...restProps }: ButtonProps) => {
    return (
        <Button {...restProps} sx={{ position: 'fixed', top: '1vh', left: '1vw' }}>
            <ArrowBack sx={{ fontSize: '6rem' }} />
        </Button>
    );
};

export { BackButton };
