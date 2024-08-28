import { useState, useEffect, useRef, useCallback } from 'react';

import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from '@draft-js-plugins/buttons';
import Editor, {
    composeDecorators,
    createEditorStateWithText,
    EditorPlugin,
} from '@draft-js-plugins/editor';
import createFocusPlugin from '@draft-js-plugins/focus';
import createImagePlugin from '@draft-js-plugins/image';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createUndoPlugin from '@draft-js-plugins/undo';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import '@draft-js-plugins/focus/lib/plugin.css';
import { AtomicBlockUtils, EditorProps, EditorState, convertToRaw } from 'draft-js';

import { style } from './DraftEditor.css';
import { uploadFile } from '../mdEditor/util/uploadFile';

interface OwnProps {
    initialContent?: string; // Draft.js raw content
    onChange?: (content: unknown) => void;
}

const toolbarPlugin = createToolbarPlugin({
    theme: {
        toolbarStyles: {
            toolbar: 'toolbar',
        },
        buttonStyles: {
            button: 'btn',
            buttonWrapper: 'btnWrap',
        },
    },
});
const { Toolbar } = toolbarPlugin;
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin({
    initialWidth: 'auto',
});
const decorator = composeDecorators(resizeablePlugin.decorator, focusPlugin.decorator);
const imagePlugin = createImagePlugin({
    decorator,
    theme: {
        image: 'editorImg',
    },
});
const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;
const linkifyPlugin = createLinkifyPlugin({
    target: 'blank',
    theme: {
        link: 'linkyLink',
    },
});
const textAlignmentPlugin = createTextAlignmentPlugin();

const plugins: EditorPlugin[] = [
    toolbarPlugin,
    imagePlugin,
    undoPlugin,
    linkifyPlugin,
    focusPlugin,
    resizeablePlugin,
    textAlignmentPlugin,
];

const DraftEditor = ({ initialContent, onChange }: OwnProps) => {
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
    const editor = useRef<Editor | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    // 최초값 셋팅
    useEffect(() => {
        setEditorState(createEditorStateWithText(initialContent || ''));
    }, []);

    // 에디터 값 바뀔 때
    const handleEditorChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
        if (onChange) onChange(JSON.stringify(convertToRaw(newEditorState.getCurrentContent())));
    };

    // 에디터 클릭시 포커스
    const handleFocus = useCallback(() => {
        editor.current?.focus();
    }, []);

    // 에디터에 이미지 저장(서버업로드)
    const handleAddImage = useCallback(
        // async (url: string) => {
        async (file: File) => {
            const imageUrl = await uploadFile(file);
            const contentState = editorState.getCurrentContent();
            const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {
                src: imageUrl?.downloadURL,
                alignment: 'center',
            });
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            const newEditorState = EditorState.set(editorState, {
                currentContent: contentStateWithEntity,
            });
            setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
        },
        [editorState],
    );

    // 에디터에 이미지 파일로 업로드
    const handlePastedFiles: EditorProps['handlePastedFiles'] = files => {
        const imageFile = files.find(file => file.type.indexOf('image/') === 0);
        if (imageFile) {
            handleAddImage(imageFile as File);
            return 'handled';
        }
        return 'not-handled';
    };

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
            <div
                css={style}
                className={`isEditMode ${isFocus ? 'isFocus' : ''}`}
                onClick={handleFocus}
            >
                <div className="toolbarContainer">
                    <div>
                        <UndoButton />
                        <RedoButton />
                    </div>
                    <hr />
                    <Toolbar>
                        {externalProps => (
                            <div>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <UnderlineButton {...externalProps} />
                                <CodeButton {...externalProps} />
                                <hr />
                                <textAlignmentPlugin.TextAlignment {...externalProps} />
                                <hr />
                                <UnorderedListButton {...externalProps} />
                                <OrderedListButton {...externalProps} />
                                <BlockquoteButton {...externalProps} />
                                <CodeBlockButton {...externalProps} />
                            </div>
                        )}
                    </Toolbar>
                </div>
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    plugins={plugins}
                    ref={editor}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    handlePastedFiles={handlePastedFiles}
                />
            </div>
        </div>
    );
};

export { DraftEditor };
