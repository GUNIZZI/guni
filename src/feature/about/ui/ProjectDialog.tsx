import { useCallback } from 'react';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
    useAboutProjectAddMutation,
    useAboutProjectUpdateMutation,
} from '@/entitie/about/hook/useAboutAsync';
import { ProjectModel } from '@/entitie/about/model/type';
import { LoaderCircle } from '@/shared/ui/loader';
import { TransitionFadeScale } from '@/shared/ui/transition';

import { Check, Close } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';

interface OwnProps {
    setOpen: (isOpen: boolean) => void;
    projectData?: ProjectModel;
    isAddMode?: boolean;
    addModeCompId?: string | null;
}

const ProjectDialog = ({ setOpen, isAddMode = false, addModeCompId, projectData }: OwnProps) => {
    const { mutateAsync: addMutateAsync, isPending: isAddLoading } = useAboutProjectAddMutation();
    const { mutateAsync: updateMutateAsync, isPending: isUpdateLoading } =
        useAboutProjectUpdateMutation();

    // Form 설정
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: projectData?.name || '',
            date: projectData?.date || '',
            part: projectData?.part || '',
        },
    });

    // Form submit(업데이트)
    const handleUpdate: SubmitHandler<{
        name: string;
        date: string;
        part: string;
    }> = useCallback(async data => {
        if (isAddMode) {
            await addMutateAsync({
                docData: {
                    compId: addModeCompId || '',
                    name: data.name,
                    date: data.date,
                    part: data.part,
                },
            });
        } else {
            await updateMutateAsync({
                docData: {
                    compId: projectData?.compId || '',
                    id: projectData?.id,
                    name: data.name,
                    date: data.date,
                    part: data.part,
                },
            });
        }
        setOpen(false);
    }, []);

    return (
        <TransitionFadeScale key="compTransition" className="editPrjItem" duration={0.24}>
            <form onSubmit={handleSubmit(handleUpdate)} className="wrap">
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: '프로젝트명이 없음' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            error={!!errors.name}
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="date"
                    control={control}
                    rules={{ required: '프로젝트 시작일이 없음' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            error={!!errors.date}
                            InputProps={{
                                style: {
                                    width: '90px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="part"
                    control={control}
                    rules={{ required: '작업 파트가 없음' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            error={!!errors.part}
                            InputProps={{
                                style: {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                    }}
                >
                    <Check />
                </Button>
                <Button variant="contained" size="small" onClick={() => setOpen(false)}>
                    <Close />
                </Button>
                {isUpdateLoading || (isAddLoading && <LoaderCircle size="30px" />)}
            </form>
        </TransitionFadeScale>
    );
};

export { ProjectDialog };
