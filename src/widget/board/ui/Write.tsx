import { useContext, useEffect } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { BoardQueryKey, BoardAddPostProps } from '@/entitie/board/model/type';
import { BOARD_CONTENT_TYPES } from '@/shared/config/constants';
import { BackButton } from '@/shared/ui/button/BackButton';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { MainLoaderContext } from '@/shared/ui/loader';
import { MdEditor } from '@/shared/ui/mdEditor/MdEditor';
import { CustomSelect } from '@/shared/ui/select/CustomSelect';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { writeStyle } from './Write.css';

import { useAddDocMutation } from '../../../entitie/board/hook/useBlog';

import { Check, Close } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const Write = ({ boardType }: OwnProps) => {
    const navigate = useNavigate();
    const { mutate: addDocQuery, isPending: isLoading } = useAddDocMutation(boardType);
    const {
        control,
        register,
        handleSubmit,
        formState: { isValid, isDirty },
    } = useForm<BoardAddPostProps>();

    const { loaderOn, loaderOff } = useContext(MainLoaderContext);
    useEffect(() => {
        if (isLoading) {
            loaderOn();
        } else {
            loaderOff();
        }
    }, [isLoading]);

    const handleSave = (data: BoardAddPostProps) => {
        addDocQuery({
            // docData: {
            //     ...data,
            // },
            docData: data,
        });
    };

    return (
        <>
            <BackButton onClick={() => navigate(-1)} />
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
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1em' }}>
                        <CustomSelect<BoardAddPostProps>
                            id="type"
                            name="docType"
                            label="카테고리"
                            opts={BOARD_CONTENT_TYPES[boardType]}
                            variant="filled"
                            style={{ flex: '0 0 200px' }}
                            control={control}
                            sx={{ flex: '0 0 200px' }}
                            defaultValue={BOARD_CONTENT_TYPES[boardType][1].code}
                        />
                        <CustomTextField<BoardAddPostProps>
                            autoFocus
                            id="title"
                            label="제목"
                            fullWidth
                            variant="filled"
                            register={register}
                        />
                    </Box>
                    <Controller
                        name="content"
                        control={control}
                        rules={{
                            required: '내용은 필수입니다',
                        }}
                        render={({ field }) => (
                            <MdEditor
                                value={field.value}
                                onChange={val => field.onChange(val)}
                                style={{ height: 'calc(100vh - 300px)' }}
                            />
                        )}
                    />
                </Box>
            </form>
        </>
    );
};

export { Write };
