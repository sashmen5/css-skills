import React, { FC } from 'react';
import styled from 'styled-components';
import { FaLaughBeam, FaPaperclip, FaTelegramPlane } from 'react-icons/fa';

import { FlexRow } from 'components/CommonStyledComponents';

const InputAreaContainer = styled(FlexRow)`
  padding: 15px;
  background-color: white;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(60, 64, 67, 0.08);
`;

const SmileIcon = styled(FaLaughBeam)`
  margin-right: 10px;
  font-size: 30px;
`;

const Input = styled.input`
  background: none;
  border: none;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const ClipIcon = styled(FaPaperclip)``;

const SendIcon = styled(FaTelegramPlane)``;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: none;
  font-size: 20px;
  outline: none;

  background: rgba(156, 188, 246, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(156, 188, 246, 1),
    rgba(68, 134, 255, 1)
  );
  background: -moz-linear-gradient(
    top,
    rgba(156, 188, 246, 1),
    rgba(68, 134, 255, 1)
  );
  background: linear-gradient(
    to bottom,
    rgba(156, 188, 246, 1),
    rgba(68, 134, 255, 1)
  );
  color: white;

  box-shadow: 0 10px 14px rgba(68, 134, 255, 0.7);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const InputArea: FC = () => {
  return (
    <InputAreaContainer>
      <FlexRow>
        <SmileIcon />
        <Input placeholder="Type a message..." />
      </FlexRow>
      <FlexRow>
        <ClipIcon />
        <SendButton>
          <SendIcon />
        </SendButton>
      </FlexRow>
    </InputAreaContainer>
  );
};

export default InputArea;
