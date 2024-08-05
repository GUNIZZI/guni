import { Link } from 'react-router-dom';

const List = () => {
    return (
        <>
            <div>목록</div>
            <Link to="./:123">상세</Link>
        </>
    );
};

export { List };
