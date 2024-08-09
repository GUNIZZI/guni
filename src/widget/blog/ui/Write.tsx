import { Interpolation, Theme } from '@emotion/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { BlogAddPostProps } from '@/entitie/blog/model/type';
import { GradientButton } from '@/shared/ui/button/GradientButton';
import { LoaderCircle } from '@/shared/ui/loader';
import { MdEditor } from '@/shared/ui/mdEditor/MdEditor';
import { CustomTextField } from '@/shared/ui/textfield/CustomTextField';

import { writeStyle } from './Write.css';
import { useAddDocMutation } from '../hook/useBlog';

import { Check, Close } from '@mui/icons-material';
import { Backdrop, Box, Button } from '@mui/material';

const Write = () => {
    const navigate = useNavigate();
    const { mutate: addDocAuery, isPending } = useAddDocMutation();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm<BlogAddPostProps>();

    const handleSave = (data: BlogAddPostProps) => {
        addDocAuery({
            collectionName: 'tech',
            docData: {
                ...data,
                type: 'react',
            },
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleSave)} css={writeStyle as Interpolation<Theme>}>
                <div className="btns">
                    <GradientButton
                        type="submit"
                        className="isConfirm"
                        style={{ color: '#fff' }}
                        title="저장"
                        size="large"
                        disabled={!isValid || !isDirty}
                    >
                        <Check />
                    </GradientButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        title="취소"
                        size="large"
                        onClick={() => navigate(-1)}
                    >
                        <Close />
                    </Button>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <div>
                        <CustomTextField<BlogAddPostProps>
                            autoFocus
                            id="title"
                            label="제목"
                            fullWidth
                            variant="filled"
                            register={register}
                            error={errors.title}
                            rules={{
                                required: '제목은 필수입니다',
                            }}
                        />
                    </div>
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
                                error={errors.content?.message}
                                style={{ height: 'calc(100vh - 300px)' }}
                            />
                        )}
                    />
                </Box>
            </form>
            <Backdrop open={isPending}>
                <LoaderCircle size="3em" color="#000" />
            </Backdrop>
        </div>
    );
};

export { Write };
