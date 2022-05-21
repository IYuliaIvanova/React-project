import React, {useEffect, useCallback, useState} from "react";
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
import { Modal } from "../../containers/Modal/Modal";
import { COLOR } from "../../constants/color-constants";
import { addAsyncReviews } from "../../redux/actions/reviewsActionCreators/actionCreators";
import { RootState } from "../../redux/reducers";

export const ReviewsPage  = () => {
  const dispatch = useDispatch();

  const dispatchedAddPosts = () => dispatch(addAsyncReviews())
  
  const { reviews } = useSelector((state: RootState) => state.reviews)

  useEffect(() => {
    dispatchedAddPosts()
  },[])

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('open!');
    setIsOpen(true);
  }

  const handleSubmit = () => {
    console.log('Submit function!');
    setIsOpen(false);
  }

  const handleCancel = () => {
    console.log('Cancel function!');
    setIsOpen(false);
  }

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
      <UnorderedList margin="0 0 30px 0">
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
      <FlexBox
        maxWidth="600"
        width={100}
        margin="0 auto"
        padding="16px"
        flexDirection="column"
        columnGap="20"
      >
        <Modal
          title="Ваш отзыв"
          isOpen={isOpen}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        >
          
        </Modal>
      </FlexBox>
    </Box>
  );
};
