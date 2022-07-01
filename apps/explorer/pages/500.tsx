import { Layout } from "@/components/Layout"
import { Error, NextPageWithLayout } from "ui"

const Error500: NextPageWithLayout = () => (
  <Error code={500} message="Internal server error" />
)

Error500.getLayout = Layout

export default Error500
