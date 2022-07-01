import Link from "next/link"

import { get_functions } from "@/lib/api"
import { Error, NextPageWithLayout, Page } from "ui"
import { useNodeStore } from "@/store/useNodeStore"
import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"

interface FunctionIndexProps {
  functions?: string[]
  error?: string
}

const FunctionsIndex: NextPageWithLayout<FunctionIndexProps> = ({
  functions,
  error,
}) => {
  const router = useRouter()

  if (error) return <Error message={error} />

  return (
    <Page title="Functions">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {functions?.map((name) => (
            <tr
              key={name}
              className="hover cursor-pointer"
              onClick={() => router.push(`/functions/${name}`)}
            >
              <td>
                <Link href={`/functions/${name}`} key={name}>
                  <a className="flex">{name}</a>
                </Link>
              </td>
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
