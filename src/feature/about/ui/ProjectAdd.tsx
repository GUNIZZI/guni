import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { ProjectDialog } from './ProjectDialog';

import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

interface OwnProps {
    compId: string;
}

const ProjectAdd = ({ compId }: OwnProps) => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <>
            <Button
                variant="contained"
                fullWidth
                size="small"
                onClick={() => setIsEditMode(true)}
                title="프로젝트 추가"
                sx={{
                    minWidth: 0,
                    padding: '0.2rem',
                    borderRadius: '10rem',
                    backgroundColor: '#ffa700',
                    color: '#000',
                    '&:hover': {
                        backgroundColor: '#000',
                        color: '#ffa700',
                    },
                }}
            >
                <Add />
            </Button>
            <AnimatePresence>
                {isEditMode && (
                    <ProjectDialog setOpen={setIsEditMode} isAddMode addModeCompId={compId} />
                )}
            </AnimatePresence>
        </>
    );
};

export { ProjectAdd };
