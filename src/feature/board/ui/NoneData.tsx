import { css } from '@emotion/react';

const style = () => css`
    .wrap {
        padding: 8rem 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1em;
        font-weight: 100;
        text-align: center;
    }
`;

const NoneData = () => {
    return (
        <div css={style}>
            <div className="wrap">게시글이 없습니다.</div>
        </div>
    );
};

export default NoneData;
