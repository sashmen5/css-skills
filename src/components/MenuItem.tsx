import React, { FC } from 'react';
import styled from 'styled-components';
import { FlexRow } from './CommonStyledComponents';

const MenuItemContainer = styled.li`
  padding: 20px 0;
`;

const MenuContent = styled(FlexRow)<any>`
  display: flex;
  align-items: center;
  padding: 10px 50px 10px 20px;
  border-left: ${props =>
    props.active ? '4px solid blue' : '4px solid transparent'};

  ${props => props.active && 'color: blue'};
`;

const MenuName = styled.div`
  margin-left: 20px;
`;

const MenuItem: FC = ({ iconComponent, label, active }: any) => {
  return (
    <MenuItemContainer>
      <MenuContent active={active}>
        {iconComponent}
        <MenuName>{label}</MenuName>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
