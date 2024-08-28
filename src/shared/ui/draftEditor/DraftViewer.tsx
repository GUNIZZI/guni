import { useState, useEffect, createElement } from 'react';

import Editor, { EditorPlugin } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import { EditorState, RawDraftContentBlock, convertFromRaw, convertToRaw } from 'draft-js';

import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { style } from './DraftEditor.css';

interface OwnProps {
    initialContent: string;
    className?: string;
    limit?: number;
    useAtomic?: boolean;
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

const DraftViewer = ({ initialContent, limit, className, useAtomic = true }: OwnProps) => {
    const [viewerState, setViewerState] = useState(() =>
        EditorState.createWithContent(convertFromRaw(JSON.parse(initialContent))),
    );

    useEffect(() => {
        if (limit && limit > 0) {
            const blockContent = convertToRaw(viewerState.getCurrentContent());
            const limitBlocks = blockContent.blocks
                .filter(block => useAtomic || block.type !== 'atomic')
                .reduce<RawDraftContentBlock[]>((acc, block: RawDraftContentBlock) => {
                    const len = acc.reduce(
                        (sum, b: RawDraftContentBlock) => sum + b.text.length,
                        0,
                    );
                    if (len < limit) return [...acc, block];
                    return acc;
                }, []);

            const newContent = {
                ...blockContent,
                blocks: limitBlocks,
            };
            const newContentState = convertFromRaw(newContent);
            setViewerState(EditorState.createWithContent(newContentState));
        }
    }, []);

    return (
        <div css={style} className={className || ''}>
            <Editor
                // editorState={limit > 0 ? limitedState : initalState}
                editorState={viewerState}
                onChange={() => {}}
                plugins={plugins}
                readOnly
            />
        </div>
    );
};

export { DraftViewer };
