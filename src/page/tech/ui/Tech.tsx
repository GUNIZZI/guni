import { Interpolation, Theme } from '@emotion/react';

import { WidgetBoard } from '@/widget/board';

import { Paper } from '@mui/material';

import { boardListStyle } from '@/shared/assets/styles/Board.css';

const Tech = () => {
    return (
        <Paper className="page isList" css={boardListStyle as Interpolation<Theme>}>
            <div className="wrap">
                <div className="headers">
                    <h2>Tech Blog.</h2>
                    <p>
                        일하다가, 문득
                        <br />
                        공부하다가 문득
                        <br />
                        생각나는 것들, 찾아본 것들.
                        <br />
                        언젠가 도움이 될 것들.
                        <br />
                        잊지 말아야 할 것들.
                    </p>
                </div>
                <WidgetBoard />
            </div>
        </Paper>
    );
};

export { Tech };
