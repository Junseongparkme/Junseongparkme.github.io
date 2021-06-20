import * as React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      I'm making this by following the Gatsby tutorial.
      <StaticImage src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg" alt="A puppy" />
      <StaticImage src="../images/puppy-1903313_1920.jpg" alt="A puppy" />
    </Layout>
  );
};

export default IndexPage;
