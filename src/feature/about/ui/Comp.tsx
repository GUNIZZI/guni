import { CompModel } from '@/entitie/about/model/type';

import { ProjectList } from './ProjectList';

interface OwnProps {
    compData: CompModel;
}

const Comp = ({ compData }: OwnProps) => {
    return (
        <div className="item">
            <div className="title">
                <span className="yearFirst">{compData.startYear} -</span>
                <strong className="yearLast">{compData.endYear}</strong>
                {compData.inOffice && <span className="curComp">재직중</span>}
            </div>
            <div className="compPrjList">
                <div className="comp">{compData.name}</div>
                <ProjectList projectDatas={compData.projects} />
            </div>
        </div>
    );
};

export { Comp };
