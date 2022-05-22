import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../components/common-components/Box/Box";
import { FlexBox } from "../../components/common-components/FlexBox/FlexBox";
import { ThirdLevelHeading } from "../../components/common-components/ThirdLevelHeading/ThirdLevelHeading";
import { Span } from "../../components/common-components/Span/Span";
import { Button } from "../../components/common-components/Button/Button";
import { UnorderedList } from "../../components/common-components/UnorderedList/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem/ListItem";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { Modal } from "../../containers/Modal/Modal";
import { Label } from "../../components/common-components/Label/Label"
import { Input } from "../../components/common-components/Input/Input";
import { Textarea } from "../../components/common-components/TextArea/TextArea";
import { COLOR } from "../../constants/color-constants";
import { addAsyncReviews, addReviews } from "../../redux/actions/reviewsActionCreators/actionCreators";
import { RootState } from "../../redux/reducers";

export const ReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [sizePage, setSizePage] = useState(3);

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");

  const [review, setReview] = useState("");

  const dispatch = useDispatch();

  const dispatchedAddReview = () => dispatch(addReviews({
    id: review.length+1,
    userName: name,
    reviewsText: review
  })
  );

  const dispatchedAddPosts = () => dispatch(addAsyncReviews())
  
  const { reviews } = useSelector((state: RootState) => state.reviews)

  useEffect(() => {
    dispatchedAddPosts()
  },[])

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const handleSubmit = () => {
    dispatchedAddReview();
    setIsOpen(false);
    setName(name => name="");
    setReview(review => review="");
  }

  const handleCancel = () => {
    setIsOpen(false);
  }

  const inputHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target as HTMLInputElement;
    setName(value);
  }

  const textareaHandleChange = (
    { target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = target as HTMLTextAreaElement;
    setReview(value);
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
          onClick={openModal}
        >
          + Добавить отзыв
        </Button>
      </FlexBox>
      <UnorderedList margin="0 0 30px 0">
        {
        reviews.slice(
          -(sizePage * currentPage), 
          (reviews.length - sizePage * currentPage) + sizePage
        ).map((item, index) => {
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
        })
        }
      </UnorderedList>
      <FlexBox
        maxWidth="700"
        width={100}
        margin="0 auto"
        padding="16px"
        flexDirection="column"
      >
        <Modal
          title="Ваш отзыв"
          isOpen={isOpen}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        >
          <FlexBox
            maxWidth="680"
            width={100}
            margin="0 auto"
            padding="16px"
            flexDirection="column"
          >
            <Label margin="0  0 10px 0" fontWeight="600">
              ИМЯ
            </Label>
            <Input
              margin="0 0 20px 0"
              type="text" 
              placeholder="Имя"                 
              onChange={(e) => inputHandleChange(e)}
              value={name}
            />
            <Label margin="0 0 10px 0" fontWeight="600">
              КOММЕНТАРИЙ
            </Label>
            <Textarea
              maxWidth=""
              height="150"
              placeholder="Комментарий"
              onChange={(e) => textareaHandleChange(e)}
              value={review}
            />
          </FlexBox>
        </Modal>
      </FlexBox>
    </Box>
  );
};
