import { NextPageWithLayout, Page } from "ui"
import { Layout } from "../components/Layout"

const LandingPage: NextPageWithLayout = () => {
  return (
    <Page title="Home" description="Home Page Sale">
      <h1>Sale</h1>
    </Page>
  )
}

LandingPage.getLayout = Layout

export default LandingPage
