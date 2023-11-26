"use client";
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  AtomicBlockUtils,
  ContentBlock,
} from "draft-js";
import React, { useState } from "react";
import style from "../../styles/Admin.module.css";
import EditorStyling from "./EditorStyling";
import { stateToHTML } from "draft-js-export-html";
import ImageComponent from "./ImageComponent";
import AddImage from "./AddImage";
import InlineStyles from "./InlineStyles";
import useNewArticle from "../hooks/useNewArticle";
import { ApolloProvider } from "@apollo/client";
import client from "../data/graphql/apolloClient";

const mediaBlockRenderer = (block: ContentBlock) => {
  if (block.getType() === "atomic") {
    return {
      component: ImageComponent,
      editable: false,
    };
  }

  return null;
};

const ArticleEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [articleProps, setArticlePropers] = useState({
    title: "",
    summary: "",
    mainImage: "",
  });
  const { loading, error, data, addNewArticle } = useNewArticle();

  const submitNewArticle = () => {
    addNewArticle({
      title: articleProps.title,
      id: "",
      summary: articleProps.summary,
      mainImage: articleProps.mainImage,
      content: stateToHTML(editorState.getCurrentContent()),
    });
  };

  const handleChange = (state: EditorState) => {
    setEditorState((prevState) => state);
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const addImage = (src: string) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
  };

  const createMarkup = () => {
    const currentContent = editorState.getCurrentContent();
    const markup = stateToHTML(currentContent);
    return { __html: markup };
  };

  const rawHtml = stateToHTML(editorState.getCurrentContent());

  return (
    <div className={style.admin}>
      <div className={style.pageTitle}>
        <h1>New Article</h1>
      </div>
      <div className={style.articleProps}>
        <form onSubmit={submitNewArticle}>
          <input
            type="text"
            value={articleProps.title}
            onChange={(e) =>
              setArticlePropers({ ...articleProps, title: e.target.value })
            }
            placeholder="Title"
          />
          <textarea
            value={articleProps.summary}
            onChange={(e) =>
              setArticlePropers({ ...articleProps, summary: e.target.value })
            }
            placeholder="Summary"
          />
          <input
            type="text"
            value={articleProps.mainImage}
            onChange={(e) =>
              setArticlePropers({ ...articleProps, mainImage: e.target.value })
            }
            placeholder="Main Image Url"
          />
          <button type="submit" disabled={loading}>
            Add Article
          </button>
        </form>
      </div>
      <div className={style.adminEditor}>
        <div>
          <InlineStyles
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </div>
        <div>
          <EditorStyling editorState={editorState} onToggle={toggleBlockType} />
        </div>
        <div>
          <AddImage addImage={addImage} />
        </div>
        <div style={{ border: "1px solid black", padding: "15px" }}>
          <Editor
            editorState={editorState}
            onChange={handleChange}
            blockRendererFn={mediaBlockRenderer}
            editorKey="editor"
          />
        </div>
        <div className={style.blog}>
          <h2>Preview</h2>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div>
          <h2>Raw HTML</h2>
          <pre>{rawHtml}</pre>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
