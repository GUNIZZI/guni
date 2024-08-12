import { CSSProperties, useCallback } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import MDEditor from '@uiw/react-md-editor';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { fbStorage } from '@/shared/api/firebase';

import { mdEditorStyle } from './MdEditor.css';
import { clipboardImagePaste } from './util/clipboardImagePaste';

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

    const handleImagePaste = useCallback(async (event: React.ClipboardEvent<HTMLDivElement>) => {
        try {
            const imageMarkdown = await clipboardImagePaste(event);
            if (imageMarkdown) {
                console.log(value);
                // handleChange(prev => prev + );
                // 여기서 에디터의 값을 업데이트하는 로직을 구현
                // console.log('Image markdown:', imageMarkdown);
            }
        } catch (e) {
            console.error('Failed to process pasted image:', e);
            // 사용자에게 에러 메시지 표시
        }
    }, []);

    return (
        <div
            data-color-mode={theme}
            css={mdEditorStyle as Interpolation<Theme>}
            style={{ height: '400px', ...style }}
            onPaste={handleImagePaste}
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
