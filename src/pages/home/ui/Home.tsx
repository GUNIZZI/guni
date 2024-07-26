import { useEffect, useTransition } from 'react';

const Home = () => {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            console.log('asdasd');
        });
    }, []);
    return <div>Home - {isPending}</div>;
};

export { Home };
