import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i0.wp.com/theunchargeables.com/wp-content/uploads/2016/03/phoenix-rising.jpg?ssl=1"
      />
    </Layout>
  )
}

export default IndexPage