import React, { FC } from 'react';
import styled from 'styled-components';
import { FaCalendarDay, FaHome, FaChevronDown } from 'react-icons/fa';
import {
  MdChatBubbleOutline,
  MdInsertDriveFile,
  MdLocalOffer,
  MdSettings
} from 'react-icons/md';

import MenuItem from 'components/MenuItem';
import { FlexColumn, FlexRow, Image } from 'components/CommonStyledComponents';

const MenuWrapper = styled(FlexColumn)`
  background-color: rgba(209, 212, 243, 0.85);
`;

const UserInfo = styled(FlexColumn)`
  align-items: center;
  padding: 50px 0px 10px 0;
  color: black;
`;

const UserPicture = styled(Image)`
  width: 70px;
  height: 70px;
  border: 4px solid white;
  margin-bottom: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.19), 0 6px 12px rgba(0, 0, 0, 0.23);
`;

const UserName = styled.div`
  font-size: 17px;
  margin-right: 7px;
`;

const MenuList = styled.ul`
  list-style: none;
  text-transform: uppercase;
  padding: 0;
  font-weight: bold;
`;

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
        <UserPicture src="https://img.discogs.com/SLLPFJ_vMX9ZrhktQjO_nS_-iqg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-110593-1449578430-6807.jpeg.jpg" />
        <FlexRow>
          <UserName>Jimi Hendrix</UserName>
          <FaChevronDown />
        </FlexRow>
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
