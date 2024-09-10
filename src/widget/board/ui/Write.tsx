import { useContext, useEffect } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useBoardAddDocMutation } from '@/entitie/board';
import { BoardQueryKey, BoardAddPostProps } from '@/entitie/board/model/type';
import { FeatureBoardBackButton, getImageSrcTransfer } from '@/feature/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { MainLoaderContext } from '@/shared/ui/loader';
import { QuillEditor } from '@/shared/ui/quillEditor';
import { CustomSelect } from '@/shared/ui/select/CustomSelect';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { writeStyle } from './Write.css';

import { Check, Close } from '@mui/icons-material';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const Write = ({ boardType }: OwnProps) => {
    const navigate = useNavigate();
    const { mutate: addDocQuery, isPending: isLoading } = useBoardAddDocMutation(boardType);
    const {
        control,
        register,
        handleSubmit,
        formState: { isValid, isDirty },
    } = useForm<BoardAddPostProps>();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { loaderOn, loaderOff } = useContext(MainLoaderContext);
    useEffect(() => {
        if (isLoading) {
            loaderOn(`${boardType}-Write`);
        } else {
            loaderOff(`${boardType}-Write`);
        }
    }, [isLoading]);

    const handleSave = async (data: BoardAddPostProps) => {
        loaderOn(`${boardType}-Save`);
        const newContent = await getImageSrcTransfer(data);
        addDocQuery(
            {
                docData: {
                    ...data,
                    content: newContent,
                },
            },
            {
                onSuccess: () => {
                    loaderOff(`${boardType}-Save`);
                },
            },
        );
    };

    // 모듈 제거
    useEffect(() => {
        return () => {
            loaderOff(`${boardType}-Write`);
            loaderOff(`${boardType}-Save`);
        };
    }, []);

    return (
        <>
            <FeatureBoardBackButton onClick={() => navigate(-1)} />

            <form
                onSubmit={handleSubmit(handleSave)}
                css={writeStyle as Interpolation<Theme>}
                className="writeWrap"
            >
                <div className="btns">
                    <GradientButton
                        type="submit"
                        className="isConfirm"
                        style={{ width: '4rem', height: '4rem', color: '#fff' }}
                        title="저장"
                        disabled={!isValid || !isDirty}
                    >
                        <Check sx={{ fontSize: '2rem' }} />
                    </GradientButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: '4rem', height: '4rem' }}
                        title="취소"
                        onClick={() => navigate(-1)}
                    >
                        <Close sx={{ fontSize: '2rem' }} />
                    </Button>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <Box className="inputHeader">
                        <CustomSelect<BoardAddPostProps>
                            id="type"
                            name="docType"
                            label="카테고리"
                            opts={BOARD_CONTENT_TYPES[boardType].filter(
                                item => item.name !== 'ALL',
                            )}
                            variant="filled"
                            style={{ flex: '0 0 200px' }}
                            control={control}
                            sx={{ flex: '0 0 200px' }}
                            defaultValue={BOARD_CONTENT_TYPES[boardType][1].code}
                            size={isSmallScreen ? 'small' : 'medium'}
                        />
                        <CustomTextField<BoardAddPostProps>
                            autoFocus
                            id="title"
                            label="제목"
                            fullWidth
                            variant="filled"
                            register={register}
                            rules={{
                                required: '제목은 필수입니다',
                            }}
                            size={isSmallScreen ? 'small' : 'medium'}
                        />
                    </Box>
                    {boardType === 'PF' && (
                        <Box className="inputHeader">
                            <CustomTextField<BoardAddPostProps>
                                type="number"
                                id="pl"
                                label="프로젝트 리딩"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="number"
                                id="design"
                                label="디자인"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="number"
                                id="dev"
                                label="개발"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="number"
                                id="publish"
                                label="퍼블리싱"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="string"
                                id="prjDate"
                                label="시작일"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="number"
                                id="prjRange"
                                label="작업기간(일)"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                            <CustomTextField<BoardAddPostProps>
                                type="string"
                                id="url"
                                label="링크"
                                register={register}
                                inputProps={{ min: 0, max: 100 }}
                                size="small"
                                sx={{ width: '140px' }}
                            />
                        </Box>
                    )}
                    <Controller
                        name="content"
                        control={control}
                        rules={{
                            required: '내용은 필수입니다',
                        }}
                        render={({ field }) => (
                            <QuillEditor
                                initialContent={field.value}
                                onChange={val => field.onChange(val)}
                            />
                        )}
                    />
                </Box>
            </form>
        </>
    );
};

export { Write };
