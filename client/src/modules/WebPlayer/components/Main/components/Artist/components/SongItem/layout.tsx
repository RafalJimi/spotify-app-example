import React from "react";
import {
  SongItemContainer,
  Number,
  PlayButton,
  AlbumIMG,
  SongTitle,
  FavButton,
  Time,
  Options,
  OptionsMenu,
  Option,
  PlaylistsContainer,
  Playlist,
} from "./layout.styled";

type SongItemLayoutProps = {
  menuIsOpen: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const SongItemLayout = ({
  menuIsOpen,
  handleOnClick,
}: SongItemLayoutProps) => (
  <SongItemContainer>
    <Number className="number">1</Number>
    <PlayButton className="playButton">
      <i className="fas fa-play"></i>
    </PlayButton>
    <AlbumIMG>
      <img
        src={
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJcAlwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIFAwcE/8QAMhAAAgECAwcCBAUFAAAAAAAAAAECAxESITEEBjZBUXKzE2FxgZGhIiYyQoMFFjNTYv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRQRL/2gAMAwEAAhEDEQA/APIAAdGQAAACUr6u2QCNm83Zc3bQSWFuLtdO2Qd8Oadr9OZD66+wQBMFFySk2l1SuQAAAUAAAAAAABrbqcRbD3T8cgRupxFsPdPxyBmqygAaQAADqHZ6K3sSs7L6EBFnKLikoWfVu5UAEiYvDJPoxK37b/MgAAAFAAAAAAAAa26nEWw90/HIgbqcRbD3T8cgZqsoALVXTa9jSCTbyLOWbwqyfIh4U3hvb36EfAIAAKAAAAAAAAAAAAAAAA1d1F+Yti7p+OQJ3V4i2Hun45AzRkkzm5W9lZWViFaz1vyC5/A0gAAAACgAAAAAAAAAAAAAAANXdTiLYe6fjkBurxFsXdPxyBKrKFgCoAAAAAAAAAAAAABBIBsAAAAAau6nEWxd0/HIDdRfmLYe6fjkCVWUCY63fLMgqAAAAAAAAAAAAExWKSV0r82BBMouLtJNMvCE1JShGM7dHcvKU4KN2sbbvHqGbXAF7Rd036cuaehWUXF5/ULKgABWrupxFsPdPxyBO6nEWw90/HIGaMkAGgAAAAAAAAAAAAATGTjLEtVzLerUbspfJJFDo3KFKOHK6zaDN06RVaTtKOPrFtIpVi6M8Lzg9Uy1OpShGLjdSWuV7kPFtFRWVkvsisdcprDJroQdayi/xx0bsciOkau6nEWw90/HIDdTiLYe6fjkDNVlAA0AAAAAAAAAAAAAC0I43a9ktX0R0pzlmqUFh53OcGs4ydsS1OkVKMMM4OUG73iGMl1OfL0UztGd6eKSzj0eR8lqXKFRvoWaqSjhUVTh75FYsUjdwqZckyh3bjSpx9OWK7vKXX2OVRWqSS0vkR0xrT3V4i2Lun45AndTiLYe6fjkQZrTKAINCQQAJAAAAAAAAAAF4xShjkrq+S6l4VKqScMMYfRFbOdOOHNx1SGOM6cYzunHRoMV1VSpL9NSk2IuU5+nXhro7HHDTX72/hE6RrYVhpqTf/QTyrWgo4aUc3n99CtXOo0uWR2oU2pOUpR9S11FvMpgbedBp9cVkCVo7rQt/XthnfWU8v45gtuxJf3FsMcnaU81p/jloSStxigAqgAAAAAAAAAAAACYycZXi7M6+tFr8VKLf0IASyU9Sl/q+4da36KcY+4AJjHJu7u9Rf3AA1d1OIth7p+OQAM1X//Z"
        }
      />
    </AlbumIMG>
    <SongTitle>Nothing Else Matters</SongTitle>
    <FavButton className="favButton">
      <i className="far fa-heart"></i>
    </FavButton>
    <Time>1:00</Time>
    <Options className="options">
      <i className="fas fa-ellipsis-h" onClick={handleOnClick}></i>
      <OptionsMenu isOpen={menuIsOpen} onClick={handleOnClick}>
        <Option>Go to album</Option>
        <Option>
          <span>Add to playlist</span> <i className="fas fa-angle-right"></i>
          <PlaylistsContainer>
            <Playlist>Test</Playlist>
            <Playlist>Test 2</Playlist>
          </PlaylistsContainer>
        </Option>
      </OptionsMenu>
    </Options>
  </SongItemContainer>
);
