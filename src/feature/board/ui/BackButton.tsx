import { Interpolation, Theme } from '@emotion/react';

import { style } from './BackButton.css';

import { ArrowBack } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';

const BackButton = ({ ...restProps }: ButtonProps) => {
    return (
        <Button {...restProps} css={style as Interpolation<Theme>}>
            <ArrowBack
                sx={{
                    fontSize: {
                        xs: '3rem', // extra-small devices (phones)
                        sm: '4rem', // small devices (tablets)
                        md: '5rem', // medium devices (landscape tablets)
                        lg: '6rem', // large devices (laptops/desktops)
                    },
                }}
            />
        </Button>
    );
};

export { BackButton };
