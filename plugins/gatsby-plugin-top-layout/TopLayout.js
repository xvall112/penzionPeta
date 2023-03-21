import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@fontsource/darker-grotesque';
import '@fontsource/darker-grotesque/300.css';
import '@fontsource/darker-grotesque/400.css';
import '@fontsource/darker-grotesque/500.css';
import '@fontsource/darker-grotesque/700.css';
export default function TopLayout(props) {
  return (
    <React.Fragment>
      <form method="POST" data-netlify="true" name="RezervacniFormular" hidden>
        <input type="hidden" name="pokoj" value="recenze" />
        <input type="date" name="prijezd" value="recenze" />
        <input type="date" name="odjezd" value="recenze" />
        <input type="text" name="name" value="recenze" />
        <input type="tel" name="tel" value="recenze" />
        <input type="email" name="email" value="recenze" />
        <textarea name="message" value="recenze"></textarea>
      </form>
      <Page>{props.children}</Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
