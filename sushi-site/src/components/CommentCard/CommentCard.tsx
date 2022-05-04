import React from "react";
import { Span } from "..//../components/common-components/Span/Span";
import { Paragraph } from "..//../components/common-components/Paragraph/Paragraph";

interface ICommentCardProps {
  name: string;
  text: string;
}

export const CommentCard: React.FC<ICommentCardProps> = (p) => {
  const { name, text } = p;

  return (
    <>
      <Span font-size="24px" line-height="30px">
        {name}
      </Span>
      <Paragraph font-weight="400" >
        {text}
      </Paragraph>
    </>
  );
};