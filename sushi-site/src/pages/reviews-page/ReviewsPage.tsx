import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { dataReviews } from "../../mock-data/mockData";
import { COLOR } from "../../constants/color-constants";


export const ReviewsPage: React.FC = () => {
  return (
    <Box
      maxWidth="1169"
      width={100}
      minHeight="945"
      padding="50px 30px"
      background={COLOR.gray95}
    >
      <FlexBox
        justifyContent="space-between"
        maxWidth="1110"
        width={100}
        margin="0 0 35px 0"
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
        {dataReviews.map(item => (
          <ListItem margin="0 0 22px 0" padding="10" bgColor={COLOR.white} key={item.id}>
            <Span fontSize="24" lineHeight="30">
              {item.name} 
            </Span>
            <Paragraph margin="20px 0 0 0" fontWeight="400">
              {item.text} 
            </Paragraph>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
