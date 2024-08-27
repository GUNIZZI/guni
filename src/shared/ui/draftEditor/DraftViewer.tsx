import { useState, useEffect, createElement } from 'react';

import Editor, { EditorPlugin } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import { EditorState, convertFromRaw } from 'draft-js';

import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { style } from './DraftEditor.css';

interface OwnProps {
    initialContent: string;
    className?: string;
}
const imagePlugin = createImagePlugin({
    decorator: component => props => {
        const { block, contentState } = props;
        const entity = contentState.getEntity(block.getEntityAt(0));
        const { alignment } = entity.getData();
        return <div style={{ textAlign: alignment || '' }}>{createElement(component, props)}</div>;
    },
});
const plugins: EditorPlugin[] = [imagePlugin];

const DraftViewer = ({ initialContent, className }: OwnProps) => {
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

    useEffect(() => {
        if (initialContent) {
            const contentState = convertFromRaw(JSON.parse(initialContent));
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [initialContent]);

    return (
        <div css={style} className={className || ''}>
            <Editor editorState={editorState} onChange={() => {}} plugins={plugins} readOnly />
        </div>
    );
};

export { DraftViewer };
