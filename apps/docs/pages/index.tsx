import { NextPageWithLayout } from "ui"
import { Layout } from "../components/Layout"

const LandingPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Docs</h1>
      <button className="btn">Boop</button>
    </div>
  )
}

LandingPage.getLayout = Layout

export default LandingPage
