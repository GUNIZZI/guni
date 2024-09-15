import { useQuery } from '@tanstack/react-query';

import { fetchComps } from '../api/about';

const useAboutCompQuery = () => {
    return useQuery({
        queryKey: ['compList'],
        queryFn: () => fetchComps(),
    });
};

export { useAboutCompQuery };
