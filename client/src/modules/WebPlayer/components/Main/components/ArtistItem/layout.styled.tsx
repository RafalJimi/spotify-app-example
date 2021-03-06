import styled from "styled-components";

export const ContextContainer = styled.div`
  margin-right: 30px;

  .react-contextmenu {
    background-color: ${(props) => props.theme.background.optionsMenu};
    border-radius: 3px;
    min-width: 200px;
    font-size: 16px;
    margin: 2px 0 0;
    outline: none;
    opacity: 0;
    padding: 5px 5px;
    pointer-events: none;
    text-align: left;
    -webkit-box-shadow: -2px 4px 20px -10px rgba(0, 0, 0, 0.8);
    box-shadow: -2px 4px 20px -10px rgba(0, 0, 0, 0.8);
  }

  .react-contextmenu.react-contextmenu--visible {
    opacity: 1;
    z-index: 9999;
  }

  .react-contextmenu-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 400;
    font-size: 1em;
    padding: 10px 10px;
    white-space: nowrap;
    color: ${(props) => props.theme.color.lightGray};
    pointer-events: all;
  }

  .react-contextmenu-item.react-contextmenu-item--active,
  .react-contextmenu-item.react-contextmenu-item--selected {
    color: ${(props) => props.theme.color.secondary};
    background-color: #ffffff10;
    pointer-events: all;
  }

  .react-contextmenu-item.react-contextmenu-item--disabled,
  .react-contextmenu-item.react-contextmenu-item--disabled:hover {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.15);
    color: #878a8c;
    pointer-events: all;
  }

  .react-contextmenu-item--divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    cursor: inherit;
    margin-bottom: 3px;
    padding: 2px 0;
    pointer-events: all;
  }
  .react-contextmenu-item--divider:hover {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.15);
    pointer-events: all;
  }

  .react-contextmenu-item.react-contextmenu-submenu {
    padding: 0;
    pointer-events: all;
  }

  .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item {
    pointer-events: all;
  }

  .react-contextmenu-item.react-contextmenu-submenu
    > .react-contextmenu-item:after {
    content: "▶";
    display: inline-block;
    position: absolute;
    right: 7px;
    pointer-events: all;
  }

  .example-multiple-targets::after {
    content: attr(data-count);
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 180px;
  background: rgb(24, 24, 24);
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(21, 21, 21, 1) 50%,
    rgba(24, 24, 24, 1) 100%
  );
  border-radius: 5px;

  :hover {
    background: rgb(40, 40, 40);
    background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 1) 0%,
      rgba(46, 46, 46, 1) 50%,
      rgba(40, 40, 40, 1) 100%
    );
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${(props) => props.theme.color.secondary};
  font-weight: 700;
  font-size: 1.2em;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
`;
