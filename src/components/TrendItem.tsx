import React, { FC } from 'react';
import styled from 'styled-components';
import { FlexCenter, FlexRow } from 'components/CommonStyledComponents';

const TrendItemContainer = styled.div`
  width: 100%;
  color: rgb(137, 151, 176);
  &:not(:last-child) {
    border-bottom: 2px solid ghostwhite;
  }
`;

const InnerWrapper = styled(FlexRow)`
  padding: 35px 50px;
  justify-content: space-between;
`;
const Icon = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  box-shadow: 0 4px 10px rgba(128, 128, 134, 0.45);
  object-fit: cover;
`;

const Circle = styled(FlexCenter)`
  border-radius: 50%;
  background-color: rgb(255, 249, 195);
  width: 40px;
  height: 40px;
  color: rgb(204, 197, 145);
  font-size: 14px;
  margin-left: 20px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const Date = styled.div`
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export interface TrendItemProps {
  image: string;
  label: string;
  date: string;
  season: string;
}

const TrendItem: FC<TrendItemProps> = ({
  image,
  label,
  date,
  season
}: TrendItemProps) => {
  return (
    <TrendItemContainer>
      <InnerWrapper>
        <FlexRow>
          <Icon src={image} alt="asd" />
          <Name>{label}</Name>
        </FlexRow>
        <FlexRow>
          <Date>{date}</Date>
          <Circle>{season}</Circle>
        </FlexRow>
      </InnerWrapper>
    </TrendItemContainer>
  );
};

export default TrendItem;
