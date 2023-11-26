import React from 'react';
import StyleButton from './StyleButton';

const InlineStyles = (props: any) => {

    const currentStyle = props.editorState.getCurrentInlineStyle();
    var INLINE_STYLES = [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
        { label: "Monospace", style: "CODE" }
      ];

    return (
        <div>
        {INLINE_STYLES.map((type) => (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
};

export default InlineStyles;
