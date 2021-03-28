import React, { ChangeEvent, forwardRef } from "react";
import {
  Container,
  DetailsContainer,
  Options,
  Title,
  CloseButton,
  Details,
  ImgContainer,
  InputContainer,
  Input,
} from "./layout.styled";

type EditDetailsLayoutProps = {
  isOpen: boolean;
  handleEditDetails: (e: React.MouseEvent) => void;
  inputValue: string;
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const EditDetailsLayout = forwardRef<HTMLElement, EditDetailsLayoutProps>(
  (
    {
      isOpen,
      handleEditDetails,
      inputValue,
      handleInputValue,
      handleOnSubmit,
    }: EditDetailsLayoutProps,
    ref: any
  ) => (
    <Container isOpen={isOpen}>
      <DetailsContainer ref={ref}>
        <Options>
          <Title>Edit details</Title>
          <CloseButton onClick={handleEditDetails}>
            <i className="fas fa-times"></i>
          </CloseButton>
        </Options>
        <Details>
          <ImgContainer />
          <InputContainer onSubmit={handleOnSubmit}>
            <Input
              type="text"
              value={inputValue}
              name="playlistName"
              id="playlistName"
              onChange={handleInputValue}
              placeholder="Playlist name"
            />
            <button type="submit">SAVE</button>
          </InputContainer>
        </Details>
      </DetailsContainer>
    </Container>
  )
);
