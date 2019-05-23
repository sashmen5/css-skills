import React, { FC } from 'react';
import styled from 'styled-components';
import { FaRegBell } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';

import {
  Divider,
  FlexColumn,
  FlexRow,
  Image
} from 'components/CommonStyledComponents';
import InputArea from 'components/InputArea';

const DialogWindowContainer = styled(FlexColumn)`
  padding: 30px 70px 40px 10px;
  background-color: rgb(244, 244, 250);
  justify-content: space-between;
`;

const Suggestion = styled.div`
  padding: 10px 15px;
  background-color: white;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(139, 145, 153);
  box-shadow: 0 2px 2px 0 rgba(60, 64, 67, 0.08);
`;

const StatusLine = styled(FlexRow)`
  justify-content: flex-end;
  color: black;
`;

const BellIcon = styled(FaRegBell)`
  margin-left: 30px;
  font-size: 18px;
`;

const ArrowIcon = styled(TiArrowSortedDown)`
  margin-left: 5px;
`;

const MessageArea = styled(FlexColumn)`
  height: -webkit-fill-available;
  margin-top: 14px;
  padding-top: 15px;
  padding-right: 10px;
`;

const ParticipantMessageArea = styled(FlexRow)`
  align-items: flex-start;
  margin-bottom: 15px;
  color: rgb(95, 96, 114);
`;

const Message = styled(FlexRow)`
  padding: 13px 15px;
  border-radius: 20px;
`;

const OwnMessage = styled(Message)`
  color: white;
  background: rgba(68, 134, 255, 1);
  align-self: flex-end;
  margin-bottom: 25px;
`;

const ParticipantMessage = styled(Message)`
  background: rgb(231, 228, 234);
  margin-left: 10px;
  margin-top: 10px;
`;

const ImageArea = styled(FlexColumn)`
  align-items: center;
`;

const ProfilePicture = styled(Image)`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const ChatName = styled.div`
  margin-top: 75px;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

const FromName = styled.div`
  font-size: 11px;
  margin-bottom: 21px;
  font-weight: bold;
`;

const Time = styled.div`
  font-size: 10px;
`;

const DialogWindow: FC = () => {
  return (
    <DialogWindowContainer>
      <StatusLine>
        <div>Status: Sale</div>
        <ArrowIcon />
        <BellIcon />
      </StatusLine>
      <FlexRow>
        <FlexColumn>
          <ChatName>Gold Coast</ChatName>
          <FromName>From: Johny Ivy</FromName>
        </FlexColumn>
      </FlexRow>

      <Divider />

      <MessageArea>
        <ParticipantMessageArea>
          <ImageArea>
            <ProfilePicture
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt=""
            />
            <Time>10:00</Time>
          </ImageArea>
          <ParticipantMessage>
            We invite you at our office for visit
          </ParticipantMessage>
        </ParticipantMessageArea>
        <OwnMessage>It's like dream come true you so much</OwnMessage>
        <ParticipantMessageArea>
          <ImageArea>
            <ProfilePicture
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt=""
            />
            <Time>10:05</Time>
          </ImageArea>
          <ParticipantMessage>Welcome</ParticipantMessage>
        </ParticipantMessageArea>
      </MessageArea>
      <FlexRow>
        <Suggestion>request visit</Suggestion>
        <Suggestion>make offer</Suggestion>
      </FlexRow>
      <InputArea />
    </DialogWindowContainer>
  );
};

export default DialogWindow;
