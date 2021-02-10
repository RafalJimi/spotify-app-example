import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  margin-left: 230px;
  width: calc(100vw - 230px);
  min-height: 100%;
  background: rgb(22, 20, 20);
  background: linear-gradient(
    274deg,
    rgba(22, 20, 20, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  z-index: 1;
`;

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
    pointer-events: auto;
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
  }

  .react-contextmenu-item.react-contextmenu-item--active,
  .react-contextmenu-item.react-contextmenu-item--selected {
    color: ${(props) => props.theme.color.secondary};
    background-color: #ffffff10;
  }

  .react-contextmenu-item.react-contextmenu-item--disabled,
  .react-contextmenu-item.react-contextmenu-item--disabled:hover {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.15);
    color: #878a8c;
  }

  .react-contextmenu-item--divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    cursor: inherit;
    margin-bottom: 3px;
    padding: 2px 0;
  }
  .react-contextmenu-item--divider:hover {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.15);
  }

  .react-contextmenu-item.react-contextmenu-submenu {
    padding: 0;
  }

  .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item {
  }

  .react-contextmenu-item.react-contextmenu-submenu
    > .react-contextmenu-item:after {
    content: "▶";
    display: inline-block;
    position: absolute;
    right: 7px;
  }

  .example-multiple-targets::after {
    content: attr(data-count);
    display: block;
  }
`;
