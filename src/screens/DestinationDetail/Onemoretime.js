import React from 'react';
import {images} from '../../../constants';
import DestinationDetail from '../../components/DestinationDetail';

const Onemoretime = ({navigation}) => {
  return (
    <DestinationDetail
      image1={images.frozenHills}
      image2={images.frozenHills}
      title="One More Time"
      country='USA'
      number='4'
      goBack={() => navigation.goBack()}
    />
  );
};

export default Onemoretime;
