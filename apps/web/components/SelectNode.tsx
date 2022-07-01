import { useRouter } from "next/router"
import { FC, useEffect, useRef } from "react"
import { useNodeStore } from "../store/useNodeStore"

export const SelectNode: FC = () => {
  const [nodes, selectedNode, selectNode] = useNodeStore((store) => [
    store.nodes,
    store.selectedNode,
    store.selectNode,
  ])

  const ref = useRef<HTMLUListElement>(null)
  const isSSR = useRef(true)
  const router = useRouter()

  useEffect(() => {
    if (isSSR.current) {
      isSSR.current = false
      return
    }

    router.replace(router.asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode])

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-xs btn-ghost">
        {selectedNode.name}
      </label>
      <ul
        ref={ref}
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
      >
        {nodes
          .filter((n) => n !== selectedNode)
          .map((node) => (
            <button
              onClick={() => {
                selectNode(node)
                ref.current?.blur()
              }}
              key={node.name}
              className="btn btn-xs btn-ghost"
            >
              {node.name}
            </button>
          ))}
      </ul>
    </div>
  )
}
