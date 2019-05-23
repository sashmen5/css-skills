import React, { FC } from 'react';
import styled from 'styled-components';

import { FlexRow } from 'components/CommonStyledComponents';

const MenuItemContainer = styled.li`
  padding: 15px 0;
`;

const MenuContent = styled(FlexRow)<any>`
  display: flex;
  align-items: center;
  padding: 10px 50px 10px 20px;
  border-left: ${props =>
    props.active ? '3px solid rgba(68, 134, 255, 1)' : '4px solid transparent'};
  ${props => props.active && 'color: rgba(68, 134, 255, 1)'};
`;

const MenuName = styled.div`
  margin-left: 20px;
`;
const IconSize = styled.div`
  font-size: 20px;
  line-height: 1px;
`;

const MenuItem: FC = ({ iconComponent, label, active }: any) => {
  return (
    <MenuItemContainer>
      <MenuContent active={active}>
        <IconSize>{iconComponent}</IconSize>
        <MenuName>{label}</MenuName>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
