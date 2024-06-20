import { GTM_ID } from '../../../constants/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import React from 'react';

const GA4TagCatto = () => {
  return <GoogleAnalytics gaId={GTM_ID} />;
};
export default GA4TagCatto;
