import React from 'react';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import Layout from '../components/Layout.js';
import Main from '../components/Main.js';
import {lifecycle} from 'recompose';
import {withTranslations} from 'fusion-plugin-i18n-react';


function Home({translate}) {
  return (
    <Layout
      helmet={
        <Helmet>
          <title>{translate('test', {name: 'world'})}</title>
          <link rel="canonical" href="https://www.tanphong.org/" />
        </Helmet>
      }
    >
      <Main />
    </Layout>      
  );
}
const TranslatedHome = withTranslations(['test'])(Home);

const WrappedHome = lifecycle({
  componentDidMount() {
    console.log('hello');
  },  
})(TranslatedHome);

export default WrappedHome;
