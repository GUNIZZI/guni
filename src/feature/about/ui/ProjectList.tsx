import { ProjectModel } from '@/entitie/about/model/type';

import { Project } from './Project';

interface OwnProps {
    projectDatas: ProjectModel[];
}

const ProjectList = ({ projectDatas }: OwnProps) => {
    if (!projectDatas || projectDatas.length === 0)
        return <div className="noneProject">프로젝트가 없습니다.</div>;

    return (
        <ul className="prjList">
            {projectDatas.map(project => (
                <li key={project.id}>
                    <Project projectData={project} />
                </li>
            ))}
        </ul>
    );
};

export { ProjectList };
