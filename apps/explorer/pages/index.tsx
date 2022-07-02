import { NextPageWithLayout, Page } from "ui"
import { Card } from "ui/homepage"
import { Layout } from "../components/Layout"
import { GetStaticProps } from "next"
import { get_github_info, GithubInfo } from "api/github"

interface LandingPageProps {
  kind: GithubInfo
  hvm: GithubInfo
}

const LandingPage: NextPageWithLayout<LandingPageProps> = ({ kind, hvm }) => {
  return (
    <Page
      title="Home"
      description="Kindelia Explorer landing page"
      className="max-w-none p-0"
    >
      <div className="hero min-h-85-screen md:min-h-70-screen">
        <div className="hero-content text-center">
          <div className="max-w-md prose">
            <h1 className="text-5xl">Kindelia</h1>
            <p>
              A global virtual machine powered by blockchain technology whose
              goal is to solve the{" "}
              <span className="underline">{`Zooko's triangle trillema`}</span>.
            </p>
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-2 space-y-10 md:space-y-0 min-h-100-screen md:min-h-70-screen flex flex-col justify-evenly pb-10 md:pb-0">
        <Card
          title="Cheap state and computation"
          description="By storing the global state as reversible runtime heaps, it can run highly dynamic applications with massively reduced costs, making layer 1 virtual worlds economically viable."
          repo={hvm}
          color="#7A0410"
        />
        <Card
          title="0-bug contracts"
          description="By leveraging a functional virtual machine, the HVM, Kindelia is able to run formally verified DApps cheaply and efficiently, making it the most secure peer-to-peer computer."
          repo={kind}
          reverse
          color="#CA1E8E"
        />
      </div>
    </Page>
  )
}

LandingPage.getLayout = Layout

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const kind = await get_github_info("kindelia", "kind")
  const hvm = await get_github_info("kindelia", "hvm")

  kind.language = "Kind"

  return { props: { kind, hvm } }
}

export default LandingPage
