import React, { FC } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow, Image } from './CommonStyledComponents';

import { FaCalendarDay, FaHome } from 'react-icons/fa';
import {
  MdChatBubbleOutline,
  MdInsertDriveFile,
  MdLocalOffer,
  MdSettings
} from 'react-icons/md';
import MenuItem from './MenuItem';

const MenuWrapper = styled(FlexColumn)`
  background-color: rgba(209, 212, 243, 0.85);
`;

const UserInfo = styled(FlexColumn)`
  align-items: center;
  padding: 50px 0px 10px 0;
`;

const UserPicture = styled(Image)`
  width: 80px;
  height: 80px;
  border: 4px solid white;
  margin-bottom: 20px;
`;

const UserName = styled.div`
  //font-size: 19px;
`;

const MenuList = styled.ul`
  list-style: none;
  //font-size: 19px;
  text-transform: uppercase;
  padding: 0;
`;

// const MenuItem = styled.li`
//   padding: 20px 0;
// `;
//
// const MenuContent = styled(FlexRow)`
//   display: flex;
//   border-left: 4px solid blue;
//   align-items: center;
//   padding: 10px 50px 10px 20px;
// `;

// const MenuName = styled.div`
//   margin-left: 20px;
// `;

const menuItems: any[] = [
  {
    iconComponent: <FaHome />,
    label: 'properties'
  },
  {
    iconComponent: <MdChatBubbleOutline />,
    label: 'chat',
    active: true
  },
  {
    iconComponent: <FaCalendarDay />,
    label: 'calendar'
  },
  {
    iconComponent: <MdLocalOffer />,
    label: 'offers'
  },
  {
    iconComponent: <MdInsertDriveFile />,
    label: 'documents'
  },
  {
    iconComponent: <MdSettings />,
    label: 'settings'
  }
];

const Menu: FC = () => {
  return (
    <MenuWrapper>
      <UserInfo>
        <UserPicture src="http://magnetmagazine.com/wp-content/uploads/2018/11/Jimi-768x887.jpg" />
        <UserName>Jimi Hendrix</UserName>
      </UserInfo>
      <MenuList>
        {menuItems.map(item => (
          <MenuItem key={item.label} {...item} />
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
