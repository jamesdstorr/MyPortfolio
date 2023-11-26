"use client"
import React from 'react';
import style from "../../styles/StyleButton.module.css"

type StyleButtonProps = {
    onToggle?: (style: string) => void;
    active?: boolean;
    className?: string;
    style?: string;
    label: string;
  };

const StyleButton = (props: StyleButtonProps) => {

    const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        props?.onToggle!(props.style || "");
      };

      const buttonClass = props.active ? 
      `${style.blockButton} ${style.activeButton}` : 
      style.blockButton;

    return (
        <button onMouseDown={handleMouseDown} className={buttonClass}>
            {props.label}
        </button>
    );
};

export default StyleButton;
