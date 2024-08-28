import { Interpolation, Theme } from '@emotion/react';
import hljs from 'highlight.js';
import Quill from 'quill';
import { useQuill } from 'react-quilljs';
// import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';

// import 'highlight.js/styles/atom-one-dark.min.css';
import 'highlight.js/styles/monokai-sublime.min.css';

import { style } from './Style.css';

const Editor = () => {
    hljs.configure({
        languages: ['javascript', 'ruby', 'python', 'java'], // 필요한 언어만 포함
    });

    const modules = {
        // syntax: {
        //     highlight: (text: string) => hljs.highlightAuto(text).value,
        // },
        syntax: { hljs },
        toolbar: [
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
    };

    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'code-block',
        'header',
        'list',
        'script',
        'indent',
        'direction',
        'size',
        'color',
        'background',
        'font',
        'align',
        'link',
        'image',
        'video',
    ];

    const { quill, quillRef } = useQuill({ modules, formats });

    const Delta = Quill.import('delta');
    if (quill) {
        quill.setContents(
            new Delta()
                .insert('const language = "JavaScript";')
                .insert('\n', { 'code-block': 'javascript' })
                .insert('console.log("I love " + language + "!");')
                .insert('\n', { 'code-block': 'javascript' }),
        );
    }

    console.log(quill);

    return (
        <div css={style as Interpolation<Theme>}>
            {/* <div> */}
            <div ref={quillRef} />
        </div>
    );
};

export { Editor };
