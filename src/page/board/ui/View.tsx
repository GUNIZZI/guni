import { BoardQueryKey } from '@/entitie/board/model/type';
import { WidgetBoardView } from '@/widget/board';
import { WidgetComment } from '@/widget/comment';

interface OwnProps {
    boardType: BoardQueryKey['type'];
}

const View = ({ boardType }: OwnProps) => {
    console.log(' 요기선 아나?');
    return (
        <>
            <WidgetBoardView boardType={boardType} />
            <WidgetComment boardType={boardType} />
        </>
    );
};

export { View };
