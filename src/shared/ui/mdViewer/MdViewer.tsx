import { Interpolation, Theme } from '@emotion/react';
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

import { mdViewerStyle } from './MdViewer.css';

// import remarkGfm from 'remark-gfm';

interface MarkdownViewProps {
    content: string;
    className?: string;
}

const MdViewer = ({ content, className }: MarkdownViewProps) => {
    // const components: Components = {
    //     code: ({ node, inline, className, children, ...props }) => {
    //         const match = /language-(\w+)/.exec(className || '');
    //         return !inline && match ? (
    //             <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
    //                 {String(children).replace(/\n$/, '')}
    //             </SyntaxHighlighter>
    //         ) : (
    //             <code className={className} {...props}>
    //                 {children}
    //             </code>
    //         );
    //     },
    // };
    // return (
    //     <div className={className} css={mdViewerStyle}>
    //         <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
    //     </div>
    // );
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
