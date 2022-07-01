import { Error, NextPageWithLayout } from "ui"
import { get_blocks } from "@/lib/api"
import { BlockInfoJson } from "@/lib/types"
import { useNodeStore } from "@/store/useNodeStore"
import { Block } from "@/components/Block"
import { Layout } from "@/components/Layout"

interface BlockIndexProps {
  blocks?: BlockInfoJson[]
  error?: string
}

const BlockIndex: NextPageWithLayout<BlockIndexProps> = ({ blocks, error }) => {
  if (error) return <Error message={error} />

  return (
    <div className="overflow-x-auto max-w-4xl mx-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="w-16">Block</th>
            <th>Hash</th>
            <th className="w-20">Mana</th>
            <th className="w-20">Space</th>
            <th className="w-14">Ctrs</th>
            <th className="w-14">Funs</th>
            <th className="w-14">Runs</th>
          </tr>
        </thead>
        <tbody>
          {blocks
            ?.sort((a, b) => b.height - a.height)
            .map((block) => (
              <Block key={block.height} {...block} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

BlockIndex.getInitialProps = async () => {
  try {
    return {
      blocks: await get_blocks(useNodeStore.getState().selectedNode.url),
    }
  } catch (err) {
    return { error: (err as Error).message }
  }
}

BlockIndex.getLayout = Layout

export default BlockIndex
