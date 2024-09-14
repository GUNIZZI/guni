import { useContext, useEffect, useState } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useBoardAddDocMutation } from '@/entitie/board';
import { BoardQueryKey, BoardAddPostProps } from '@/entitie/board/model/type';
import { FeatureBoardBackButton, getImageSrcTransfer } from '@/feature/board';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { MainLoaderContext } from '@/shared/ui/loader';
import { PfTextfield } from '@/shared/ui/pfTextfield';
import { QuillEditor } from '@/shared/ui/quillEditor';
import { CustomSelect } from '@/shared/ui/select/CustomSelect';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { writeStyle } from './Write.css';

import { Check, Close } from '@mui/icons-material';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

interface PfTextfieldProps {
    text: string;
    percent?: number;
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

    const [pl, setPl] = useState<PfTextfieldProps>({
        text: '',
        percent: 0,
    });
    const [design, setDesign] = useState<PfTextfieldProps>({
        text: '',
        percent: 0,
    });
    const [dev, setDev] = useState<PfTextfieldProps>({
        text: '',
        percent: 0,
    });
    const [publish, setPublish] = useState<PfTextfieldProps>({
        text: '',
        percent: 0,
    });
    const [prjDate, setPrjdate] = useState<PfTextfieldProps>({
        text: '',
    });
    const [prjRange, setRange] = useState<PfTextfieldProps>({
        text: '',
    });
    const [url, setUrl] = useState<PfTextfieldProps>({
        text: '',
    });

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
        const params = {
            ...data,
            content: newContent,
            info: {
                pl,
                design,
                dev,
                publish,
                prjDate,
                prjRange,
                url,
            },
        };
        addDocQuery(
            {
                docData: params,
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
                        <Box className="inputHeader inputPrjInfos">
                            <PfTextfield id="pl" placeholder="프로젝트 리딩" vmodel={[pl, setPl]} />
                            <PfTextfield
                                id="design"
                                placeholder="디자인"
                                vmodel={[design, setDesign]}
                            />
                            <PfTextfield id="dev" placeholder="개발" vmodel={[dev, setDev]} />
                            <PfTextfield
                                id="publish"
                                placeholder="퍼블리싱"
                                vmodel={[publish, setPublish]}
                            />
                            <PfTextfield
                                id="prjDate"
                                placeholder="프로젝트날짜"
                                vmodel={[prjDate, setPrjdate]}
                            />
                            <PfTextfield
                                id="prjRange"
                                placeholder="작업기간"
                                vmodel={[prjRange, setRange]}
                            />
                            <PfTextfield id="url" placeholder="URL" vmodel={[url, setUrl]} />
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
