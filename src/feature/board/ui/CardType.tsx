import React from 'react';

import DOMPurify from 'isomorphic-dompurify';
import { find } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { BoardContentProps } from '@/entitie/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { MdViewer } from '@/shared/ui/mdViewer/MdViewer';

import {
    List,
    ListItem,
    Divider,
    Grid,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material';

interface OwnProps {
    datas: BoardContentProps[] | undefined;
}

const CardType = ({ datas }: OwnProps) => {
    const navigate = useNavigate();

    if (!datas?.length) return <div>데이터 없음</div>;

    return (
        // <List className="itemWrap">
        //     {datas.map(item => (
        //         <React.Fragment key={item.id}>
        //             <ListItem className="item" onClick={() => navigate(`seq=${item.id}`)}>
        //                 <div className="title">
        //                     <div className="type">
        //                         [{find(BOARD_CONTENT_TYPES.LIFE, { code: item.docType })?.name}]{' '}
        //                     </div>
        //                     {item.title}
        //                 </div>
        //                 <MdViewer
        //                     content={DOMPurify.sanitize(item.content || '')}
        //                     className="content"
        //                 />
        //                 <div className="infos">
        //                     <span>{item.date}</span>
        //                     <span>2개의 댓글</span>
        //                     <span>찜: 26</span>
        //                 </div>
        //             </ListItem>
        //             <Divider variant="inset" component="li" />
        //         </React.Fragment>
        //     ))}
        // </List>
        <Grid container spacing={2}>
            {datas.map(item => (
                <Grid item md={3} key={item.id}>
                    <Card>
                        <CardActionArea onClick={() => navigate(`seq=${item.id}`)}>
                            <CardContent>
                                <Typography variant="overline" color="textSecondary">
                                    {find(BOARD_CONTENT_TYPES.LIFE, { code: item.docType })?.name}
                                </Typography>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Box sx={{ maxHeight: 100, overflow: 'hidden' }}>
                                    <MdViewer content={DOMPurify.sanitize(item.content || '')} />
                                </Box>
                                <Box
                                    sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <Typography variant="body2" color="textSecondary">
                                        {item.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        2개의 댓글 • 찜: 26
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export { CardType };
