import { Interpolation, Theme } from '@emotion/react';
import MDEditor from '@uiw/react-md-editor';

import { mdViewerStyle } from './MdViewer.css';

interface MarkdownViewProps {
    content: string;
    className?: string;
}

const MdViewer = ({ content, className }: MarkdownViewProps) => {
    return (
        <div
            data-color-mode="dark"
            css={mdViewerStyle as Interpolation<Theme>}
            className={className}
        >
            <MDEditor.Markdown style={{ padding: 10 }} source={content} />
        </div>
    );
};

export { MdViewer };
