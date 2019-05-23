import React, { FC } from 'react';
import styled from 'styled-components';
import { FaTelegramPlane, FaPlusCircle } from 'react-icons/fa';
import { MdPanoramaWideAngle } from 'react-icons/md';

import {
  FlexCenter,
  FlexColumnCenter,
  FlexRow
} from 'components/CommonStyledComponents';

const TopTrendsContainer = styled(FlexColumnCenter)`
  width: 370px;
  background-color: rgb(143, 133, 216);
  padding-top: 70px;
  padding-bottom: 110px;
  position: relative;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 10px 10px 15px rgba(120, 109, 202, 0.35),
    -10px 10px 15px rgba(120, 109, 202, 0.35);
`;

const TopHeader = styled(FlexRow)`
  margin-bottom: 45px;
  font-size: 35px;
`;

const MainIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 12px;
  box-shadow: 0 7px 13px rgb(90, 79, 168);
  object-fit: cover;
`;

const TrendName = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;

const TrendIcon = styled(MdPanoramaWideAngle)`
  margin-bottom: 6px;
  color: rgb(110, 102, 175);
  font-size: 50px;
`;

const Day = styled.div`
  font-size: 37px;
`;

const MmYy = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`;

const Circle = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 89, 74);
  border-radius: 50%;
  position: absolute;
  bottom: -50px;

  color: rgb(213, 76, 62);
  font-size: 50px;
  box-shadow: 0 10px 20px rgba(213, 76, 62, 0.35);
`;

const TrendPicture = styled.div`
  position: relative;
`;

const Notification = styled(FlexCenter)`
  position: absolute;
  width: 27px;
  height: 27px;
  background-color: rgb(255, 68, 114);
  bottom: 16px;
  right: 7px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 5px 5px 25px rgb(255, 68, 114);
`;

const TrendsSpan = styled.span`
  font-weight: 100;
  font-family: sans-serif;
`;

const TopLabel = styled.div`
  margin-right: 10px;
  position: relative;
`;
const Top = styled.div`
  position: relative;
  z-index: 1;
`;

const TopIcon = styled(FaPlusCircle)`
  color: rgb(110, 102, 175);
  font-weight: bold;
  font-size: 47px;
  position: absolute;
  z-index: 0;
  top: -3px;
  left: calc(50% - 25px);
`;

const TopTrends: FC = () => {
  return (
    <TopTrendsContainer>
      <TopHeader>
        <TopLabel>
          <TopIcon />
          <Top>Top</Top>
        </TopLabel>

        <TrendsSpan>Trends</TrendsSpan>
      </TopHeader>
      <TrendPicture>
        <MainIcon
          src="https://resizing.flixster.com/T2IX-FxKUw-b7UHeIWhtwV_-R-E=/206x305/v1.dDs5ODk3MDtqOzE4MDQ2OzEyMDA7MTUwMDsyMDAw"
          alt=""
        />
        <Notification>1</Notification>
      </TrendPicture>
      <TrendName>arrow s4</TrendName>
      <TrendIcon />
      <Day>18</Day>
      <MmYy>nov 2015</MmYy>
      <Circle>
        <FaTelegramPlane />
      </Circle>
    </TopTrendsContainer>
  );
};

export default TopTrends;
