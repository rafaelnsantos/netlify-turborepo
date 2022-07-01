import { Layout } from "@/components/Layout"
import { Error, NextPageWithLayout } from "ui"

const Error404: NextPageWithLayout = () => (
  <Error code={404} message="The content you are looking for wasn't found." />
)

Error404.getLayout = Layout

export default Error404
