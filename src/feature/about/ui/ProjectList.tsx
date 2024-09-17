import { useMemo } from 'react';

import { CompModel } from '@/entitie/about/model/type';
import { useAuth } from '@/entitie/auth';

import { Project } from './Project';
import { ProjectAdd } from './ProjectAdd';

interface OwnProps {
    projectDatas: CompModel;
}

/**
 * 날짜 데이터로 정렬
 * 날짜 데이터가 '2010.04' 형식의 문자열 데이터 이므로 이를 Date객체로 변환 후 비교하여 정렬
 */
const getDataSort = (data: CompModel) => {
    return data.projects?.sort((a, b) => {
        if (!a.date || !b.date) return 0;

        const dateA = new Date(
            parseInt(a.date.split('.')[0], 10),
            parseInt(a.date.split('.')[1], 10) - 1 || 0,
        ); // 월은 0부터 시작하므로 -1
        const dateB = new Date(
            parseInt(b.date.split('.')[0], 10),
            parseInt(b.date.split('.')[1], 10) - 1 || 0,
        );

        // Date 객체를 비교하여 정렬
        return dateA > dateB ? -1 : 1;
    });
};

const ProjectList = ({ projectDatas }: OwnProps) => {
    const { user } = useAuth();
    const isAdmin = useMemo(() => user?.role?.toUpperCase() === 'ADMIN', [user]);
    const parseData = useMemo(() => getDataSort(projectDatas), [projectDatas]);

    if (!parseData) return null;

    return (
        <ul className="prjList">
            {isAdmin && (
                <li key="projectAdd">
                    <ProjectAdd compId={projectDatas.id || ''} />
                </li>
            )}
            {parseData?.map(project => (
                <li key={project.id}>
                    <Project projectData={{ ...project, compId: projectDatas.id || '' }} />
                </li>
            ))}
        </ul>
    );
};

export { ProjectList };
