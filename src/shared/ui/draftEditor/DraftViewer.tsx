import { useState, useEffect } from 'react';

import Editor from '@draft-js-plugins/editor';
import { EditorState, convertFromRaw } from 'draft-js';

import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { style } from './DraftEditor.css';

interface OwnProps {
    initialContent: string; // Draft.js raw content as string
}

const DraftViewer = ({ initialContent }: OwnProps) => {
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

    useEffect(() => {
        if (initialContent) {
            const contentState = convertFromRaw(JSON.parse(initialContent));
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [initialContent]);

    return (
        <div css={style}>
            <Editor
                editorState={editorState}
                onChange={() => {}} // 빈 함수: 변경을 허용하지 않음
                readOnly
            />
        </div>
    );
};

export { DraftViewer };
