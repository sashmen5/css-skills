import React, { FC } from 'react';
import styled from 'styled-components';

import {
  FlexCenter,
  FlexColumn,
  FlexRow,
  Image
} from 'components/CommonStyledComponents';

export interface DialogItemProps {
  picture: string;
  name: string;
  message: string;
  date: string;
  notifications: number;
  online: boolean;
}

const DialogContainer = styled.li`
  background-color: white;
  border-radius: 3px;
  padding: 15px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

const Right = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-end;
  font-size: 11px;
`;

const ProfilePicture = styled(Image)`
  width: 45px;
  height: 45px;
`;

const ProfilePictureArea = styled.div`
  position: relative;
`;

const OnlineStatus = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgb(145, 212, 77);
  border: 2px solid white;
  width: 6px;
  height: 6px;
  right: 0;
`;

const UserName = styled.div`
  color: black;
`;

const Notifications = styled(FlexCenter)`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-weight: bold;
  background-color: rgb(249, 62, 70);
  color: white;
  font-size: 10px;
  margin-bottom: 6px;
`;

const TextArea = styled(FlexColumn)`
  margin-left: 12px;
`;

const DialogItem: FC<DialogItemProps> = ({
  picture,
  name,
  message,
  date,
  notifications,
  online
}: DialogItemProps) => {
  return (
    <DialogContainer>
      <FlexRow>
        <ProfilePictureArea>
          {online && <OnlineStatus />}
          <ProfilePicture src={picture} alt="" />
        </ProfilePictureArea>
        <TextArea>
          <UserName>{name}</UserName>
          <div>{message}</div>
        </TextArea>
      </FlexRow>
      <Right>
        <div>{date}</div>
        {notifications !== 0 && <Notifications>{notifications}</Notifications>}
      </Right>
    </DialogContainer>
  );
};

export default DialogItem;
