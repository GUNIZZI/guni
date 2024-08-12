import { BoardQueryKey } from '@/entitie/board/model/type';
import { WidgetBoardWrite } from '@/widget/board';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const Write = ({ boardType }: OwnProps) => {
    return <WidgetBoardWrite boardType={boardType} />;
};

export { Write };
