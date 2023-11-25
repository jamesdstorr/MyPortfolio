"use client";

import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import style from "../../styles/Admin.module.css";

const Admin = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (state: EditorState) => {
    setEditorState(state);
    console.log(state)
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div className={style.admin}>
      <div className={style.pageTitle}>
        <h1>Admin</h1>
      </div>
      <div className={style.adminEditor}>
        <div style={{ border: "1px solid black", padding: "15px" }}>
          <Editor editorState={editorState} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
