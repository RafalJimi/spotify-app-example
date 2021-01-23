import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  padding: 50px 0px 50px 0px;

  @media ${width[990]} {
    margin-top: 30px;
    padding: 40px 0px 40px 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media ${width[1200]} {
    width: 990px;
  }

  @media ${width[990]} {
    width: 750px;
  }

  @media ${width[750]} {
    width: 100%;
  }
`;

export const Row1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${width[990]} {
    flex-direction: column;
    width: 95%;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 170px;
    filter: brightness(100);
  }

  img:hover {
    cursor: pointer;
  }

  @media ${width[1200]} {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }

  @media ${width[990]} {
    margin-bottom: 40px;
  }

  @media ${width[990]} {
    img {
      width: 110px;
      filter: brightness(100);
    }
  }
`;

export const Row2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialMediaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 54px;
  background-color: ${(props) => props.theme.background.socialMedia};
  margin: 0px 10px;
  border-radius: 27px;

  i {
    font-size: 1.5em;
    color: ${(props) => props.theme.background.main};
  }

  :hover {
    cursor: pointer;
  }

  :hover > i {
    color: ${(props) => props.theme.color.lightGreen};
  }

  @media ${width[990]} {
    width: 40px;
    height: 40px;
    border-radius: 20px;

    i {
      font-size: 1.2em;
    }
  }
`;

export const RedirectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 30px;

  @media ${width[750]} {
    justify-content: flex-start;
  }
`;

export const RedirectsItem = styled.span`
  color: ${(props) => props.theme.color.tertiary};
  font-size: 0.75em;
  text-align: center;
  margin: 0px 13px;

  :hover {
    color: ${(props) => props.theme.color.lightGreen};
    cursor: pointer;
  }

  @media ${width[750]} {
    white-space: nowrap;
    font-size: 0.6em;
    margin: 0px 15px 10px 15px;
  }
`;

export const Copyright = styled.span`
  color: ${(props) => props.theme.color.tertiary};
  font-size: 0.9em;
  text-align: center;
  margin-right: 13px;
  white-space: nowrap;

  @media ${width[750]} {
    white-space: nowrap;
    font-size: 0.75em;
  }
`;
