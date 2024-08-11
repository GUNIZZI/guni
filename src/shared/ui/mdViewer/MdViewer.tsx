import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

interface MarkdownViewProps {
    content: string;
    className?: string;
}

const MdViewer = ({ content, className }: MarkdownViewProps) => {
    return (
        <div className={className}>
            <ReactMarkdown
            // remarkPlugins={[remarkGfm]}
            // components={{
            //     code({ node, inline, className, children, ...props }) {
            //         const match = /language-(\w+)/.exec(className || '');
            //         return !inline && match ? (
            //             <SyntaxHighlighter
            //                 style={vscDarkPlus}
            //                 language={match[1]}
            //                 PreTag="div"
            //                 {...props}
            //             >
            //                 {String(children).replace(/\n$/, '')}
            //             </SyntaxHighlighter>
            //         ) : (
            //             <code className={className} {...props}>
            //                 {children}
            //             </code>
            //         );
            //     },
            // }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export { MdViewer };
