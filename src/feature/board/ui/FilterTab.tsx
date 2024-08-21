import { useCallback, useState } from 'react';

import { Opt } from '@/shared/type/common';

import { Tab, Tabs } from '@mui/material';

interface OwnProps {
    value: string | number;
    opts: Opt[];
    onChange: (value: string | number) => void;
}

const FilterTab = ({ opts, value = opts[0].code || '', onChange }: OwnProps) => {
    const [tab, setTab] = useState(value);

    const handleChange = useCallback((event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
        onChange(newValue);
    }, []);

    return (
        <Tabs
            value={tab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
            {opts.map(item => (
                <Tab key={item.code} value={item.code} label={item.name} />
            ))}
        </Tabs>
    );
};

export { FilterTab };
