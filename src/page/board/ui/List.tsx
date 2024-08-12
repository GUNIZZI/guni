import { BoardQueryKey } from '@/entitie/board/model/type';
import { WidgetBoardList } from '@/widget/board';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const List = ({ boardType }: OwnProps) => {
    return <WidgetBoardList boardType={boardType} />;
};

export { List };
