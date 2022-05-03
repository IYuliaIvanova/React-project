import React from "react";
import { Box } from "..//../components/common-components/Box/Box";
import { FlexBox } from "..//../components/common-components/FlexBox/FlexBox";
import { Span } from "..//../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/Ul";
import { ListItem } from "..//../components/common-components/ListItem/ListItem";
import { CommentCard } from "../../components/CommentCard/CommentCard"
import { COLOR } from "../../constants/color-constants";

const comments = new Array(5).fill({
  name: "Kolya",
  text: "Привет",
});

export const ReviewPage: React.FC<ICommentCardProps> = () =>{
  
  return(
    <>
      <Box max-width="1169 px" width={100} padding="0px 16px" background-color={COLOR.silverGray}>
        <FlexBox 
        justify-content="space-between" 
        max-width="1110px" 
        background-color={COLOR.silverGray}
        >
          <Span font-size="24px" line-height="30px">
            Отзывы
          </Span>
            <Button
            width="180px" 
            height="36px" 
            background-color={COLOR.smokyBlack} 
            font-size="18px" 
            line-height="22px" 
            font-weight="400"
            >
              + Добавить отзыв
            </Button>
        </FlexBox>
        <UnorderedList max-width="1110px" background-color={COLOR.white}>
          {comments.map((comment) => (
            <ListItem margin="0 0 20px 0">
              <CommentCard 
                name={comment.name}
                key={comment.id}
                text={comment.text}
                />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
};
