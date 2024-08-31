import { useEffect, useRef } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { style } from './Style.css';

interface OwnProps {
    initialContent?: string;
    onChange?: (val: string) => void;
}

const Editor = ({ initialContent, onChange }: OwnProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const quill = new Quill(containerRef.current, {
                theme: 'snow',
                placeholder: '본문 입력',
                modules: {
                    syntax: true,
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            [{ color: [] }, { background: [] }], // dropdown with defaults
                            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                            [{ align: [] }],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                            ['link', 'image', 'video'], // link and image, video
                            ['blockquote', 'code-block'],
                            ['clean'], // remove formatting button
                        ],
                    },
                },
            });

            if (initialContent) quill.root.innerHTML = initialContent;

            quill.on('text-change', () => {
                if (onChange) onChange(quill.root.innerHTML);
            });
        }
    }, [containerRef]);

    return (
        <div className="ql-snow" css={style as Interpolation<Theme>}>
            <div ref={containerRef} />
        </div>
    );
};

Editor.displayName = 'Editor';

export { Editor };
