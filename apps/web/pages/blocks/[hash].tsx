import Link from "next/link"

import { hash_hex_from } from "api/utils/hex"

import * as api from "@/lib/api"
import * as hvm from "@/lib/hvm"
import * as T from "@/lib/types"

import { Codeblock } from "@/components/Codeblock"
import { Statements } from "@/components/Statement"
import { useNodeStore } from "@/store/useNodeStore"
import { Error, NextPageWithLayout } from "ui"
import { Option } from "api/utils/enum"
import { Layout } from "@/components/Layout"
import { NextSeo } from "next-seo"

interface BlockPageProps {
  block_info: Option<T.BlockInfoJson>
  error?: string
}

const BlockPage: NextPageWithLayout<BlockPageProps> = ({
  block_info,
  error,
}) => {
  if (error) return <Error message={error} />

  if (!block_info) return <Error code={404} message="Block not found" />

  let { hash, height, content, results, block } = block_info

  const statements = hvm.read_block_content(content)
  const result_txts = results.map((result) => JSON.stringify(result))
  const parent = block.prev

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mx-auto max-w-3xl">
      <NextSeo title={`Block ${hash}`} />
      <h1>
        Block hash: <code> {hash} </code>
      </h1>
      <div>
        Block height: <code> {height} </code>
      </div>
      <div>
        <Link href={`/blocks/${parent}`}>
          <a>
            Block Parent: <span className="text-blue-800"> {parent} </span>
          </a>
        </Link>
      </div>
      <Codeblock>
        <Statements statements={statements} />
      </Codeblock>
      <h2> Results: </h2>
      <pre>{result_txts.join("\n\n")}</pre>
    </div>
  )
}

BlockPage.getInitialProps = async (ctx) => {
  try {
    const hash = ctx.query.hash as string
    const hex = hash_hex_from(hash)

    if (!hex) throw Error({ message: "Missing hex" })

    return {
      block_info: await api.get_block(
        hex,
        useNodeStore.getState().selectedNode.url
      ),
    }
  } catch (err) {
    return { error: (err as Error).message, block_info: null }
  }
}

BlockPage.getLayout = Layout

export default BlockPage
