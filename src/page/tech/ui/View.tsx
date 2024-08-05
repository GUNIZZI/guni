import { Link, useParams } from 'react-router-dom';

const View = () => {
    const { seq } = useParams();

    console.log('WidgetTechBoardView rendered with seq:', seq);

    return (
        <div>
            상세
            <div>Tech Board View: {seq}</div>
            <Link to="../">목록</Link>
        </div>
    );
};

export { View };
