import { FC, ReactNode } from "react"

import { get_function, get_function_state } from "@/lib/api"
import { FunctionId, TermJson } from "@/lib/types"
import { Error, NextPageWithLayout } from "ui"
import { read_term } from "@/lib/hvm"
import { Term } from "@/components/Statement"
import { NextSeo } from "next-seo"
import { Layout } from "@/components/Layout"

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
    <div className="flex flex-col max-w-3xl mx-auto">
      <NextSeo title={`Function ${name}`} />
      <h2 className="text-2xl">{name?.toString()}</h2>
      WIP {JSON.stringify(fun)}
      {state && (
        <Block title="State">
          <Term {...read_term(state, 0)} />
        </Block>
      )}
      <Block title="History">WIP</Block>
    </div>
  )
}

SingleFunction.getInitialProps = async (ctx) => {
  const name = ctx.query.name as FunctionId
  try {
    const state = await get_function_state(name)
    const fun = await get_function(name)

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
