import { Interpolation, Theme } from '@emotion/react';

import { WidgetBoardContainer } from '@/widget/board';

import { Paper } from '@mui/material';

import { boardListStyle } from '@/shared/assets/styles/Board.css';

const Blog = () => {
    return (
        <Paper className="page isCard" css={boardListStyle as Interpolation<Theme>}>
            <div className="wrap">
                <WidgetBoardContainer />
            </div>
        </Paper>
    );
};

export { Blog };
