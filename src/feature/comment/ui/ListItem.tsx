import { useContext, useMemo } from 'react';

import { useAuth } from '@/entitie/auth';
import { BoardCommentProps, useCommentDeleteDocMutation } from '@/entitie/comment';
import { NAV_PATH } from '@/shared/config/navPath';
import { timestampConversion } from '@/shared/util';
import { CommentContext } from '@/widget/comment/provider/Comment';

import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

interface OwnProps {
    data: BoardCommentProps;
}

const arrColors = NAV_PATH.map(item => item.color);
const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};
const getRndColor = (name: string) => {
    if (name === 'GUEST') return 'rgba(255,255,255,0.4)';
    const randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
    const rgb = hexToRgb(randomColor);
    return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : 'rgba(0, 0, 0, 1)'; // 기본값 설정
};

const ListItem = ({ data }: OwnProps) => {
    const { boardType, postId } = useContext(CommentContext);
    const { user } = useAuth();
    const isMyComment = useMemo(() => user?.email === data.authorId, [user]);
    const { mutate: delDocQuery } = useCommentDeleteDocMutation(boardType, postId);

    const handleDelete = async () => {
        delDocQuery(data.id);
    };

    return (
        <div className="comment">
            <div className="iconWrap">
                <span
                    className={`icon ${data.authorId === import.meta.env.VITE_FB_ADMIN_ID && 'isAdmin'}`}
                    style={{
                        color: getRndColor(data.authorName),
                        borderColor: `${data.authorName === 'ADMIN' && '#fff'}`,
                    }}
                >
                    {data.authorName}
                </span>
                <span className="date">{timestampConversion(data.date)}</span>
            </div>
            <div className="content">{data.content}</div>
            {isMyComment && (
                // 작성자만 보임
                <div className="btns">
                    <Button
                        className="btnDelete"
                        variant="contained"
                        title="삭제"
                        color="error"
                        onClick={handleDelete}
                        // disabled={isPending}
                    >
                        <Delete sx={{ fontSize: '1rem' }} />
                        {/* {isPending && (
                            <CircularProgress
                                size="3.6em"
                                sx={{
                                    position: 'absolute',
                                    color: '#fff',
                                }}
                            />
                        )} */}
                    </Button>
                </div>
            )}
        </div>
    );
};

export { ListItem };
