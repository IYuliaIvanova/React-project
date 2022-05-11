import React from "react";
import { Box } from "..//../components/common-components/Box/Box";
import { FlexBox } from "..//../components/common-components/FlexBox/FlexBox";
import { ThirdLevelHeading } from "..//../components/common-components/TirdLevelHeading/ThirdLevelHeading"; 
import { Span } from "..//../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "..//../components/common-components/ListItem/ListItem";
import { Paragraph } from "..//../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";

const comments = new Array(5).fill({
  name: "Kolya",
  text: "Привет",
  id: 1,
});

interface ICommentCardProps {
  name: string;
  text: string;
};

export const ReviewsPage: React.FC = () => {
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
        maxWidth="1110"
        width={100}
        bgColor={COLOR.silverGray}
      >
        <ThirdLevelHeading fontSize="24" lineHeight="30">
          Отзывы
        </ThirdLevelHeading>
        <Button
          width="180"
          height="36"
          fontSize="18" 
          lineHeight="22"
          color={COLOR.white}
          bgColor={COLOR.smokyBlack}
        >
          + Добавить отзыв
        </Button>
      </FlexBox>
      <UnorderedList>
        {comments.map((comment) => (
          <ListItem margin="0 0 20px 0" key={comment.id}> // поле id мы вытащим из объекта, обратившись к массиву в https://jsonplaceholder.typicode.com/comments
            <Span margin="0 0 20px 0" fontSize="24" lineHeight="30">
              {name} // переменная name придет из https://jsonplaceholder.typicode.com/comments
            </Span>
            <Paragraph fontWeight="400">
              {text} // вместо переменной text будем использовать переменную body из из https://jsonplaceholder.typicode.com/comments
            </Paragraph>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
