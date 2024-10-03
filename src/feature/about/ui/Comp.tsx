import { useState, useCallback, useEffect, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
    useAboutCompAddMutation,
    useAboutCompDeleteMutation,
    useAboutCompUpdateMutation,
} from '@/entitie/about/hook/useAboutAsync';
import { CompModel } from '@/entitie/about/model/type';
import { useAuth } from '@/entitie/auth';
import { LoaderCircle } from '@/shared/ui/loader';
import { TransitionFadeScale } from '@/shared/ui/transition';

import { ProjectList } from './ProjectList';

import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Button, Switch, TextField } from '@mui/material';

interface OwnProps {
    compData?: CompModel;
}

const Comp = ({ compData }: OwnProps) => {
    const { user } = useAuth();
    const [isEditMode, setIsEditMode] = useState(false);
    const { mutateAsync: addMutateAsync, isPending: isAddLoading } = useAboutCompAddMutation();
    const { mutateAsync: updateMutateAsync, isPending: isUpdateLoading } =
        useAboutCompUpdateMutation();
    const { mutateAsync: deleteMutateAsync } = useAboutCompDeleteMutation();
    const parseCompData = compData || {
        inOffice: false,
        startYear: '',
        endYear: '',
        name: '',
        projects: [],
    };

    // 아이템 추가 모드인 경우
    // + 버튼만 활성화 됨
    const isAddMode = useMemo(() => parseCompData.id === undefined, [parseCompData.id]);

    // 관리자 체크
    const isAdmin = useMemo(() => user?.role?.toUpperCase() === 'ADMIN', [user]);

    // Form 설정
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            inOffice: parseCompData.inOffice,
            startYear: parseCompData.startYear,
            endYear: parseCompData.endYear,
            name: parseCompData.name,
        },
    });

    // 에디트모드 활성
    const handelItemDoubleClick = useCallback(() => {
        setIsEditMode(true);
    }, []);
    useEffect(() => {
        if (!isEditMode) reset();
    }, [isEditMode]);

    // Form submit(업데이트)
    const handleUpdate: SubmitHandler<{
        startYear: number | string;
        endYear: number | string;
        name: string;
        inOffice: boolean;
    }> = useCallback(async data => {
        if (isAddMode) {
            await addMutateAsync({
                docData: {
                    name: data.name,
                    startYear: data.startYear,
                    endYear: data.endYear,
                    inOffice: data.inOffice,
                },
            });
        } else {
            await updateMutateAsync({
                docData: {
                    id: parseCompData.id,
                    name: data.name,
                    startYear: data.startYear,
                    endYear: data.endYear,
                    inOffice: data.inOffice,
                },
            });
        }
        setIsEditMode(false);
    }, []);

    const handleItemAdd = () => {
        if (isAddMode && !isEditMode) {
            setIsEditMode(true);
        }
    };

    const handleItemDelete = async () => {
        await deleteMutateAsync({
            docData: {
                id: parseCompData.id,
                name: parseCompData.name,
                startYear: parseCompData.startYear,
                endYear: parseCompData.endYear,
                inOffice: parseCompData.inOffice,
            },
        });
    };

    // ITEM 클래스명
    const getItemClassName = useMemo(
        () => `item ${isAddMode ? 'isAddMode' : ''} ${isEditMode ? 'isEditMode' : ''}`,
        [isAddMode, isEditMode],
    );
    // Title 클래스명
    const getTitleClassName = useMemo(() => `title ${isEditMode ? 'isBlur' : ''}`, [isEditMode]);
    // 최근 재직중인곳 표기 변경
    const getLastYear = useMemo(
        () => (parseCompData.inOffice ? 'Present' : parseCompData.endYear),
        [parseCompData],
    );

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={getItemClassName} onClick={() => handleItemAdd()}>
            {!isAddMode && (
                <>
                    <div className={getTitleClassName}>
                        <span className="yearFirst">{parseCompData.startYear} -</span>
                        <strong className="yearLast">{getLastYear}</strong>
                        {parseCompData.inOffice && <span className="curComp">재직중</span>}
                    </div>
                    <div className={`compPrjList ${isEditMode ? 'isBlur' : ''}`}>
                        <div className="comp">
                            {parseCompData.name}
                            {isAdmin && (
                                <div className="btns">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        title="수정"
                                        onClick={handelItemDoubleClick}
                                    >
                                        <Edit />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        title="삭제"
                                        onClick={handleItemDelete}
                                    >
                                        <Delete />
                                    </Button>
                                </div>
                            )}
                        </div>
                        {parseCompData && <ProjectList projectDatas={parseCompData} />}
                    </div>
                </>
            )}
            <AnimatePresence>
                {isEditMode && (
                    <TransitionFadeScale key="compTransition" className="editItem" duration={0.24}>
                        <form onSubmit={handleSubmit(handleUpdate)} className="wrap">
                            <Controller
                                name="inOffice"
                                control={control}
                                render={({ field }) => (
                                    <div>
                                        <Switch
                                            {...field}
                                            checked={field.value} // Switch 상태를 React Hook Form과 동기화
                                            onChange={e => field.onChange(e.target.checked)} // Switch가 변경될 때 값 전달
                                        />
                                    </div>
                                )}
                            />
                            <Controller
                                name="startYear"
                                control={control}
                                rules={{ required: '시작년도에 값이 없음' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="number"
                                        size="small"
                                        error={!!errors.startYear}
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
                            <div>
                                <span>~</span>
                            </div>
                            <Controller
                                name="endYear"
                                control={control}
                                rules={{ required: '종료년도에 값이 없음' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="number"
                                        size="small"
                                        error={!!errors.endYear}
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
                                name="name"
                                control={control}
                                rules={{ required: '회사이름에 값이 없음' }}
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
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => setIsEditMode(false)}
                            >
                                <Close />
                            </Button>
                            {isUpdateLoading || (isAddLoading && <LoaderCircle size="30px" />)}
                        </form>
                    </TransitionFadeScale>
                )}
            </AnimatePresence>
        </div>
    );
};

export { Comp };
