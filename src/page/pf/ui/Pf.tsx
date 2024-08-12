import { Interpolation, Theme } from '@emotion/react';

import { WidgetBoardContainer } from '@/widget/board';

import { Paper } from '@mui/material';

import { boardListStyle } from '@/shared/assets/styles/Board.css';

const Pf = () => {
    return (
        <Paper className="page isList" css={boardListStyle as Interpolation<Theme>}>
            <div className="wrap">
                <div className="headers">
                    <h2>Portfolio.</h2>
                    <p>만든거 이것 저것</p>
                </div>
                <WidgetBoardContainer />
            </div>
        </Paper>
    );
};

export { Pf };
