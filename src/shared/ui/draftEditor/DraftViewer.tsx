import { useState, useEffect } from 'react';

import Editor, { EditorPlugin } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import { EditorState, convertFromRaw } from 'draft-js';

import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { style } from './DraftEditor.css';

interface OwnProps {
    initialContent: string;
}
const imagePlugin = createImagePlugin();
const plugins: EditorPlugin[] = [imagePlugin];

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
            <Editor editorState={editorState} onChange={() => {}} plugins={plugins} readOnly />
        </div>
    );
};

export { DraftViewer };
