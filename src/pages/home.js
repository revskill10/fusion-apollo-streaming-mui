import React from 'react';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import Layout from '../components/Layout.js';
import Main from '../components/Main.js';
import {lifecycle} from 'recompose';

const WrappedMain = lifecycle({
  componentDidCatch(error, info) {
    console.log(error);
  },
})(Main);

function Home() {
  return (
    <Layout
      helmet={
        <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tanphong.org/" />
      </Helmet>}>
      <WrappedMain />
    </Layout>      
  );
}
const WrappedHome = lifecycle({
  componentDidMount() {
    console.log(this.props.theme.direction);
  },  
})(Home);

export default WrappedHome;
