import React from 'react';
import { ContentState, ContentBlock } from 'draft-js';

type ImageComponentProps = {
  contentState: ContentState;
  block: ContentBlock;
};

const ImageComponent: React.FC<ImageComponentProps> = ({ contentState, block }) => {
  const entityKey = block.getEntityAt(0);
  if (!entityKey) return null;

  const entity = contentState.getEntity(entityKey);
  const { src } = entity.getData();
  
  return <img src={src} alt="" />;
};

export default ImageComponent;