import { NextPageWithLayout } from "ui"
import { Layout } from "../components/Layout"
import { NextSeo } from "next-seo"

const LandingPage: NextPageWithLayout = () => {
  return (
    <div>
      <NextSeo title="Home" />
      <h1>Docs</h1>
      <button className="btn">Boop</button>
    </div>
  )
}

LandingPage.getLayout = Layout

export default LandingPage
