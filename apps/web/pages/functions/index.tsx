import Link from "next/link"

import { get_functions } from "@/lib/api"
import { Error, NextPageWithLayout } from "ui"
import { useNodeStore } from "@/store/useNodeStore"
import { Layout } from "@/components/Layout"
import { NextSeo } from "next-seo"

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
    <div className="overflow-x-auto max-w-4xl mx-auto p-2">
      <NextSeo title="Functions" />
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
    </div>
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
