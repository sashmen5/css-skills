import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  align-items: center;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`;

export const UpperCase = styled.div`
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;

export const Divider = styled.hr``;
