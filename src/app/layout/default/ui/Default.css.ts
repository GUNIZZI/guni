import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const containerStyle = (theme: Theme) => css`
    width: 100vw;
    min-height: 100vh;
    padding: ${theme.spacing(0)};
`;

export { containerStyle };
