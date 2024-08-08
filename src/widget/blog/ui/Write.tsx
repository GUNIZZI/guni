import { Interpolation, Theme } from '@emotion/react';

import { GradientButton } from '@/shared/ui/button/GradientButton';

import { writeStyle } from './Write.css';

import { Check, Close } from '@mui/icons-material';
import { Button } from '@mui/material';
// import { LoadingButton } from '@mui/lab/';

const Write = () => {
    return (
        <div css={writeStyle as Interpolation<Theme>}>
            <div className="btns">
                {/* <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton> */}
                <GradientButton
                    className="isConfirm"
                    style={{ color: '#fff' }}
                    title="저장"
                    size="large"
                >
                    <Check />
                </GradientButton>
                <Button
                    variant="contained"
                    color="secondary"
                    title="취소"
                    size="large"
                    onClick={() => history.back()}
                >
                    <Close />
                </Button>
            </div>
            <div>에디터</div>
        </div>
    );
};

export { Write };
