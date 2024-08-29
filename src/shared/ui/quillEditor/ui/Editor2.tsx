import React, { useEffect, useRef } from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.min.css';

// Quill 모듈 import
import QuillSyntax from 'quill-syntax';

// Quill에 syntax 모듈 등록
Quill.register('modules/syntax', QuillSyntax);

const Editor2: React.FC = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillInstanceRef = useRef<Quill | null>(null);

    useEffect(() => {
        if (editorRef.current && !quillInstanceRef.current) {
            hljs.configure({
                languages: ['javascript', 'typescript', 'ruby', 'python', 'java'],
            });

            const quill = new Quill(editorRef.current, {
                modules: {
                    syntax: {
                        highlight: (text: string) => {
                            console.log('Syntax highlight called:', text);
                            return hljs.highlightAuto(text).value;
                        },
                    },
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ align: [] }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        ['link', 'image', 'video'],
                        ['blockquote', 'code-block'],
                        ['clean'],
                    ],
                },
                theme: 'snow',
            });

            quillInstanceRef.current = quill;

            // 테스트용 코드 삽입
            quill.setText(''); // 기존 내용 지우기
            quill.insertText(0, 'const test = "Hello, World!";', 'code-block', 'javascript');
        }
    }, []);

    return <div ref={editorRef} style={{ height: '400px' }} />;
};

export { Editor2 };
