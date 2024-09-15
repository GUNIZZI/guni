import { useAboutCompQuery } from '@/entitie/about/hook/useAboutAsync';
import { LoaderCircle } from '@/shared/ui/loader';

import { Comp } from './Comp';

const CompList = () => {
    const { data, isFetching } = useAboutCompQuery();

    if (isFetching) return <LoaderCircle size="50px" />;

    return data?.map(comp => <Comp key={comp.name} compData={comp} />);
};

export { CompList };
