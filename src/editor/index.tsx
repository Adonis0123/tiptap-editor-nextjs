import React, { useEffect, useState } from "react";
import { presetMarkdown } from "./default-content";
import { EditorContent, useEditor } from "@tiptap/react";
import { TiptapExtensions } from "./extensions";
import { TiptapEditorProps } from "./props";
import { markdown2Html } from "./utils";

export interface IEditorProps {}

const Editor: React.FC<IEditorProps> = (props) => {
  const [markdown, setMarkdown] = useState(presetMarkdown);
  /* 初始化editor */
  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    content: "",
    autofocus: "end",
    onUpdate: (e) => {},
  });

  useEffect(() => {
    if (editor && markdown) {
      const html = markdown2Html(markdown);
      editor.commands.setContent(html);
    }
  }, [editor, markdown]);

  return (
    <>
      {editor ? (
        <div
          style={{
            boxShadow: "0px 4px 9px rgba(11, 45, 96, 0.16)",
          }}
          className="w-full h-full bg-white rounded-lg p-6 overflow-y-auto"
        >
          <div>
            <EditorContent className={` `} editor={editor} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Editor;