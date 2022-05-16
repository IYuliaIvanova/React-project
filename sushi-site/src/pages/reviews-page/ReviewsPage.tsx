import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";


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
        {[{
            name: "Kolya",
            text: "Являюсь постоянным клиентом этой конторы. Только положительные впечатления",
            id: 1
          },
          {
            name: "Kolya",
            text: "Привет",
            id: 1
          },
          {
            name: "Kolya",
            text: "Привет",
            id: 1
          }
        ].map(item => (
          <ListItem margin="0 0 20px 0" key={item.id}>
            <Span margin="0 0 20px 0" fontSize="24" lineHeight="30">
              {item.name} 
            </Span>
            <Paragraph fontWeight="400">
              {item.text} 
            </Paragraph>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
