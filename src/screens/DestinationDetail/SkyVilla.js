import React from 'react';
import {images} from '../../../constants';
import DestinationDetail from '../../components/DestinationDetail';

const SkyVilla = ({navigation}) => {
  return (
    <DestinationDetail
      image1={images.skiVilla}
      image2={images.skiVilla}
      title="Sky Villa"
      country='Viet Nam'
      number='5'
      goBack={() => navigation.goBack()}
    />
  );
};

export default SkyVilla;
