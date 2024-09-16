import { ProjectModel } from '@/entitie/about/model/type';

interface OwnProps {
    projectData: ProjectModel;
}

const Project = ({ projectData }: OwnProps) => {
    if (!projectData) return null;

    return (
        <div className="prjItem">
            <strong className="prjName">{projectData?.name}</strong>
            <span className="date">{projectData?.date || '-'}</span>
            {projectData?.part && (
                <div className="part">
                    {projectData?.part?.split(',').map(part => <span key={part}>{part}</span>)}
                </div>
            )}
        </div>
    );
};

export { Project };
