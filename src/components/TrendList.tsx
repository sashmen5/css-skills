import React, { FC } from 'react';
import styled from 'styled-components';

import TrendItem, { TrendItemProps } from 'components/TrendItem';
import { FlexColumnCenter } from 'components/CommonStyledComponents';

const TrendListContainer = styled(FlexColumnCenter)`
  width: 600px;
  background-color: white;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const items: TrendItemProps[] = [
  {
    date: '17 nov 2015',
    label: 'The flash',
    season: 'S2',
    image: 'https://static.next-episode.net/tv-shows-images/huge/the-flash.jpg'
  },
  {
    date: '22 nov 2015',
    label: 'Daredevil',
    season: 'S4',
    image:
      'https://nyoobserver.files.wordpress.com/2015/04/unnamed-22.jpg?quality=20'
  },
  {
    date: '16 nov 2015',
    label: 'Gotham',
    season: 'S2',
    image:
      'https://akns-images.eonline.com/eol_images/Entire_Site/201931/rs_1024x759-190401174953-1024x759.gotham-j-lp.4119.jpg?fit=inside|900:auto&output-quality=90'
  },
  {
    date: '25 nov 2015',
    label: 'Sherlock',
    season: 'S4',
    image:
      'https://www.indiewire.com/wp-content/uploads/2012/05/sherlock_benedictcumberbatch_652_gallery_primary.jpg'
  }
];

const TrendList: FC = () => {
  return (
    <TrendListContainer>
      {items.map(item => (
        <TrendItem key={item.image} {...item} />
      ))}
    </TrendListContainer>
  );
};

export default TrendList;
