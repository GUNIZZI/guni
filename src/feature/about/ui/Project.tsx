import { useMemo, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useAboutProjectDeleteMutation } from '@/entitie/about/hook/useAboutAsync';
import { ProjectModel } from '@/entitie/about/model/type';
import { useAuth } from '@/entitie/auth';

import { ProjectDialog } from './ProjectDialog';

import { Delete, Edit } from '@mui/icons-material';
import { Button } from '@mui/material';

interface OwnProps {
    projectData: ProjectModel;
}

const Project = ({ projectData }: OwnProps) => {
    const { user } = useAuth();
    const isAdmin = useMemo(() => user?.role?.toUpperCase() === 'ADMIN', [user]);

    const [isEditMode, setIsEditMode] = useState(false);
    const { mutateAsync } = useAboutProjectDeleteMutation();

    const handleDelete = async () => {
        await mutateAsync({ docData: projectData });
    };

    if (!projectData) return null;

    return (
        <>
            <div className="prjItem">
                <strong className="prjName">{projectData?.name}</strong>
                <span className="date">{projectData?.date || '-'}</span>
                {projectData?.part && (
                    <div className="part">
                        {projectData?.part?.split(',').map(part => <span key={part}>{part}</span>)}
                    </div>
                )}
                {isAdmin && (
                    <>
                        <Button
                            className="btnEdit"
                            variant="contained"
                            size="small"
                            onClick={() => setIsEditMode(true)}
                            title="프로젝트 수정"
                        >
                            <Edit />
                        </Button>
                        <Button
                            className="btnDelete"
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={handleDelete}
                            title="프로젝트 삭제"
                        >
                            <Delete />
                        </Button>
                    </>
                )}
            </div>
            <AnimatePresence>
                {isEditMode && <ProjectDialog setOpen={setIsEditMode} projectData={projectData} />}
            </AnimatePresence>
        </>
    );
};

export { Project };
