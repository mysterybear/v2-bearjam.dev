import React from "react"
import Presence from "../components/presence"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Presence>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Presence>
)

export default NotFoundPage
