import { useContext, useEffect } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import imageCompression from 'browser-image-compression';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { uploadFile, useBoardAddDocMutation } from '@/entitie/board';
import { BoardQueryKey, BoardAddPostProps } from '@/entitie/board/model/type';
import { FeatureBoardBackButton } from '@/feature/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { MainLoaderContext } from '@/shared/ui/loader';
import { QuillEditor } from '@/shared/ui/quillEditor';
import { CustomSelect } from '@/shared/ui/select/CustomSelect';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';
import { base64ToFile } from '@/shared/util';

import { writeStyle } from './Write.css';

import { Check, Close } from '@mui/icons-material';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}
interface UploadPromise {
    success: boolean;
    imgBlock: HTMLImageElement;
    result?: {
        fileName: string;
        downloadURL: string;
    } | null;
    e?: unknown;
}

/**
 * 에디터 데이터에서 img태그를 찾아 blob으로 되어 잇으면 firebase에 업로드 후 path로 변경 후 전달
 * @param data 태그 문자열 데이터
 * @returns 태그 문자열 데이터
 */
const getImageSrcTransfer = async (data: BoardAddPostProps) => {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = data.content.trim();
    const imgBlocks = Array.from(tmpDiv.querySelectorAll('img'));
    const uploadPromises: Promise<UploadPromise>[] = imgBlocks.map(
        async (imgBlock): Promise<UploadPromise> => {
            if (imgBlock.src.startsWith('data:image/')) {
                const options = {
                    maxSizeMB: 1, // 최대 파일 크기를 1MB로 설정
                    maxWidthOrHeight: 2048, // 최대 너비 또는 높이를 1024px로 설정
                    useWebWorker: true, // 웹 워커 사용
                };

                try {
                    const imgFile = base64ToFile(
                        imgBlock.src,
                        `img_${new Date().getTime()}_${Math.round(Math.random() * 99999999999)}`,
                    );
                    const compressedFile = await imageCompression(imgFile, options);
                    const result = await uploadFile(compressedFile);
                    if (result) imgBlock.setAttribute('src', result.downloadURL);
                    return { success: true, imgBlock, result };
                } catch (e) {
                    // 에러
                    console.log(e);
                    return { success: false, imgBlock, e };
                }
            }
            return { success: true, imgBlock };
        },
    );
    await Promise.all(uploadPromises);
    return tmpDiv.innerHTML;
};

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
