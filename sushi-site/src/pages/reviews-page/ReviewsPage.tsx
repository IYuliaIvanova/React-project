import React from "react";
import { Box } from "..//../components/common-components/Box/Box";
import { FlexBox } from "..//../components/common-components/FlexBox/FlexBox";
import { Span } from "..//../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "..//../components/common-components/ListItem/ListItem";
import { Paragraph } from "..//../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";

const comments = new Array(5).fill({
  name: "Kolya",
  text: "Привет",
});

interface ICommentCardProps {
  name: string;
  text: string;
};

export const ReviewsPage: React.FC<ICommentCardProps> = ({ name, text }) =>{
  return (
    <Box
      maxWidth="1169"
      width={100}
      minHeight="945"
      padding="50px 30px"
      background={COLOR.silverGray}
    >
      <FlexBox
        justifyContent="space-between" 
        maxWidth="1110px"
        width={100}
        bgColor={COLOR.silverGray}
      >
        <Span fontSize="24" lineHeight="30px">
          Отзывы
        </Span>
        <Button
          width="180"
          height="36"
          fontSize="18px" 
          lineHeight="22px"
          color={COLOR.white}
          bgColor={COLOR.smokyBlack}
        >
          + Добавить отзыв
        </Button>
      </FlexBox>
      <UnorderedList>
        {comments.map((comment) => (
          <ListItem margin="0 0 20px 0" key={comment.id}>
            <Span margin="0 0 20px 0" fontSize="24" lineHeight="30">
              {name}
            </Span>
            <Paragraph fontWeight="400">
              {text}
            </Paragraph>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
