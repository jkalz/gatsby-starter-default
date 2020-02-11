import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Drei" />
    <h1>Hi from the 3 page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
