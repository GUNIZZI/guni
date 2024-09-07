import { useCallback, useMemo, useState } from 'react';

import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

import { NAV_PATH } from '@/shared/config/navPath';
import { Opt } from '@/shared/type/common';

import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Tab,
    Tabs,
    useMediaQuery,
    useTheme,
} from '@mui/material';

interface OwnProps {
    value: string | number;
    opts: Opt[];
    onChange: (value: string | number) => void;
}

const style = () => css`
    .MuiSelect-select {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

const FilterTab = ({ opts, value = opts[0].code || '', onChange }: OwnProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const curBgColor = useMemo<string>(
        () =>
            NAV_PATH.find(item => item.path === `/${location.pathname.split('/')[1]}`)?.color ||
            '#000000',
        [location],
    );
    const [tab, setTab] = useState<string | number | undefined>(value);

    const handleChange = useCallback((_event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
        onChange(newValue);
    }, []);
    const handleSelectChange = useCallback((event: SelectChangeEvent) => {
        setTab(event.target.value);
        onChange(event.target.value);
    }, []);

    return (
        <div css={style}>
            {!isMobile ? (
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: {
                            height: '100%',
                            borderRadius: '10em',
                            backgroundColor: curBgColor,
                            opacity: 0.05,
                        }, // indicator 색상 변경
                    }}
                >
                    {opts.map(item => (
                        <Tab
                            key={item.code}
                            value={item.code}
                            label={item.name}
                            sx={{
                                color: 'rgba(255,255,255,0.5)', // 기본 탭 텍스트 색상
                                '&.Mui-selected': {
                                    color: curBgColor, // 선택된 탭 텍스트 색상
                                },
                            }}
                        />
                    ))}
                </Tabs>
            ) : (
                <FormControl variant="filled" fullWidth>
                    <Select
                        labelId="brdTabLabel"
                        id="brdTab"
                        value={tab as string}
                        onChange={handleSelectChange}
                        sx={{
                            color: curBgColor,
                            // border: `1px solid ${curBgColor}`,
                        }}
                    >
                        {opts.map(item => (
                            <MenuItem key={item.code} value={item.code}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        </div>
    );
};

export { FilterTab };
