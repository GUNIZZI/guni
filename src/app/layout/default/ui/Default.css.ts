import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const containerStyle = (theme: Theme) => css`
    display: flex;
    padding: ${theme.spacing(0)};
`;

export { containerStyle };
