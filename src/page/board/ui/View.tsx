import { BoardQueryKey } from '@/entitie/board/model/type';
import { WidgetBoardView } from '@/widget/board';
import { WidgetComment } from '@/widget/comment';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const View = ({ boardType }: OwnProps) => {
    return (
        <>
            <WidgetBoardView boardType={boardType} />
            <WidgetComment />
        </>
    );
};

export { View };
