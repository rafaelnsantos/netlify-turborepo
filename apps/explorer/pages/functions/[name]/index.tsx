import { FC, ReactNode } from "react"

import { get_function, get_function_state } from "@/lib/api"
import { FunctionId, TermJson } from "@/lib/types"
import { Error, NextPageWithLayout, Page } from "ui"
import { read_term } from "@/lib/hvm"
import { Term } from "@/components/Statement"
import { Layout } from "@/components/Layout"
import { useNodeStore } from "@/store/useNodeStore"

interface BlockProps {
  title: string
  children: ReactNode
}

const Block: FC<BlockProps> = ({ title, children }) => (
  <div className="mt-5">
    <h3 className="text-xl">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
)

interface SingleFunctionProps {
  state?: TermJson
  fun?: any
  error?: string
  name: FunctionId
}

const SingleFunction: NextPageWithLayout<SingleFunctionProps> = ({
  fun,
  state,
  error,
  name,
}) => {
  if (error) return <Error message={error} />

  return (
    <Page title={`Function ${name}`} className="flex flex-col">
      <h2 className="text-2xl">{name?.toString()}</h2>
      WIP {JSON.stringify(fun)}
      {state && (
        <Block title="State">
          <Term {...read_term(state, 0)} />
        </Block>
      )}
      <Block title="History">WIP</Block>
    </Page>
  )
}

SingleFunction.getInitialProps = async (ctx) => {
  const name = ctx.query.name as FunctionId
  try {
    const node = useNodeStore.getState().selectedNode.url
    const state = await get_function_state(name, node)
    const fun = await get_function(name, node)

    return {
      fun,
      state,
      name,
    }
  } catch (err) {
    return {
      error: (err as Error).message,
      name,
    }
  }
}

SingleFunction.getLayout = Layout

export default SingleFunction
