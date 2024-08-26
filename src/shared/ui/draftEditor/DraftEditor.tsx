import { useState, useEffect, useRef, useCallback } from 'react';

import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    // HeadlineOneButton,
    // HeadlineTwoButton,
    // HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from '@draft-js-plugins/buttons';
import Editor, { createEditorStateWithText, EditorPlugin } from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { EditorState, convertToRaw } from 'draft-js';

import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import { style } from './DraftEditor.css';

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
const plugins: EditorPlugin[] = [toolbarPlugin];

const DraftEditor = ({ initialContent, onChange }: OwnProps) => {
    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
    const editor = useRef<Editor | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        setEditorState(createEditorStateWithText(initialContent || ''));
    }, []);

    const handleEditorChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
        if (onChange) onChange(JSON.stringify(convertToRaw(newEditorState.getCurrentContent())));
    };

    const handleFocus = useCallback(() => {
        editor.current?.focus();
    }, []);

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
            <div
                css={style}
                className={`isEditMode ${isFocus ? 'isFocus' : ''}`}
                onClick={handleFocus}
            >
                <Toolbar>
                    {externalProps => (
                        <div>
                            <BoldButton {...externalProps} />
                            <ItalicButton {...externalProps} />
                            <UnderlineButton {...externalProps} />
                            <CodeButton {...externalProps} />
                            <UnorderedListButton {...externalProps} />
                            <OrderedListButton {...externalProps} />
                            <BlockquoteButton {...externalProps} />
                            <CodeBlockButton {...externalProps} />
                        </div>
                    )}
                </Toolbar>
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    plugins={plugins}
                    ref={editor}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
            </div>
        </div>
    );
};

export { DraftEditor };
