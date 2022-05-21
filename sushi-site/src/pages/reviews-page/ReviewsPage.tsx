import React, {useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataReviews } from "../../mock-data/mockData"
import { Box } from "../../components/common-components/Box/Box";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants";
import { addAsyncReviews } from "../../redux/actions/reviewsActionCreators/actionCreators";
import { RootState } from "../../redux/reducers";

export const ReviewsPage = () => {

  const dispatch = useDispatch();
  const dispatchedAddPosts = () => dispatch(addAsyncReviews())
  
  const { reviews } = useSelector((state: RootState) => state.reviews)

  useEffect(() => {
    dispatchedAddPosts()
  },[])

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
        {reviews.map((item, index) => {
          if(index < 3) {
            console.log(index);
              return (
                <ListItem margin="0 0 22px 0" padding="10" bgColor={COLOR.white} key={item.id}>
                  <Span fontSize="24" lineHeight="30">
                    {item.userName}
                  </Span>
                  <Paragraph margin="20px 0 0 0" fontWeight="400">
                    {item.reviewsText}
                  </Paragraph>
                </ListItem>
              )
          }
        }
        )
        }
      </UnorderedList>
    </Box>
  );
};
