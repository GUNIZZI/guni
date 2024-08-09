import { CSSProperties } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import MDEditor from '@uiw/react-md-editor';

import { mdEditorStyle } from './MdEditor.css';

import { Tooltip } from '@mui/material';

interface OwnProps {
    theme?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    style?: CSSProperties;
}

const MdEditor = ({ theme = 'dark', value, onChange, error, style }: OwnProps) => {
    const handleChange = (newValue: string | undefined) => {
        if (typeof newValue === 'string') {
            onChange(newValue);
        }
    };

    return (
        <div
            data-color-mode={theme}
            css={mdEditorStyle as Interpolation<Theme>}
            style={{ height: '500px', ...style }}
        >
            <Tooltip
                title={error || ''}
                open={!!error}
                arrow
                placement="right"
                classes={{
                    tooltip: 'isError', // 툴팁 클래스 적용
                }}
            >
                <span className="tooltipDummy" />
            </Tooltip>
            <MDEditor value={value} onChange={handleChange} />
        </div>
    );
};

export { MdEditor };
