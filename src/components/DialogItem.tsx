import React, { FC } from 'react';
import styled from 'styled-components';
import {
  FlexCenter,
  FlexColumn,
  FlexRow,
  Image
} from './CommonStyledComponents';

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
  justify-content: center;
  align-items: flex-end;
`;

const ProfilePicture = styled(Image)`
  width: 45px;
  height: 45px;
  margin-right: 12px;
`;

const UserName = styled.div``;

const Notifications = styled(FlexCenter)`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: rgb(249, 62, 70);
  color: white;
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
        <ProfilePicture src={picture} alt="" />
        <FlexColumn>
          <div>{name}</div>
          <div>{message}</div>
        </FlexColumn>
      </FlexRow>
      <Right>
        <div>{date}</div>
        <Notifications>{notifications}</Notifications>
      </Right>
    </DialogContainer>
  );
};

export default DialogItem;
