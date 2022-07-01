import Link from "next/link"

import { get_functions } from "@/lib/api"
import { Error, NextPageWithLayout, Page } from "ui"
import { useNodeStore } from "@/store/useNodeStore"
import { Layout } from "@/components/Layout"

interface FunctionIndexProps {
  functions?: string[]
  error?: string
}

const FunctionsIndex: NextPageWithLayout<FunctionIndexProps> = ({
  functions,
  error,
}) => {
  if (error) return <Error message={error} />

  return (
    <Page title="Functions" className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {functions?.map((name) => (
            <tr key={name} className="hover">
              <td>{name}</td>
              <Link href={`/functions/${name}`} key={name}>
                <a className="absolute left-0 h-14 w-full cursor-pointer"></a>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

FunctionsIndex.getInitialProps = async () => {
  try {
    return {
      functions: await get_functions(useNodeStore.getState().selectedNode.url),
    }
  } catch (err) {
    return {
      error: (err as Error).message,
    }
  }
}

FunctionsIndex.getLayout = Layout

export default FunctionsIndex
