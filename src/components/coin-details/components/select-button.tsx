import React, { SyntheticEvent } from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
  selected: boolean;
  onClick: (arg0: SyntheticEvent) => void;
};

const StyledSelectButton = styled.span`
  border: 1px solid gold;
  border-radius: 5px;
  margin: 5px;
  padding: 10px 20px 0;
  font-family: Montserrat;
  cursor: pointer;
  font-weight: 500;
  width: 22%;

  &.selected {
    background-color: gold;
    color: black;
    font-weight: 700;
  }
  &:hover {
    background-color: gold;
    color: black;
  }
`;

const SelectButton = ({ children, selected, onClick }: Props) => {
  return (
    <StyledSelectButton
      className={selected ? "selected" : ""}
      onClick={onClick}>
      {children}
    </StyledSelectButton>
  );
};

export default SelectButton;
