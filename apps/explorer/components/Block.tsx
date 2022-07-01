import Link from "next/link"
import { FC } from "react"

import { if_let, match } from "api/utils/enum"
import { const_ } from "api/utils/functional"

import { read_num } from "@/lib/hvm"
import {
  BlockContentJson,
  BlockInfoJson,
  BlockResultsJson,
  StmtRunInfoJson,
} from "@/lib/types"
import { useRouter } from "next/router"

export const Block: FC<BlockInfoJson> = ({
  block,
  content,
  hash,
  height,
  results,
}) => {
  let mana = calculate_mana(results)
  let size = calculate_size(results)
  let { ctrs, funs, runs } = count_statements(content)

  const router = useRouter()

  const url = `/blocks/${hash}`

  return (
    <tr className="hover cursor-pointer" onClick={() => router.push(url)}>
      <td>#{height}</td>
      <th>
        <Link href={url}>
          <a className="flex">{hash.substring(0, 8)}</a>
        </Link>
      </th>
      <td>{mana.toString()}</td>
      <td>{size.toString()}</td>
      <td>{ctrs}</td>
      <td>{funs}</td>
      <td>{runs}</td>
    </tr>
  )
}

const reduce_run_results =
  <T,>(init: T) =>
  (f: (acc: T, s: StmtRunInfoJson) => T) =>
  (results: BlockResultsJson[]) =>
    results.reduce(
      (acc, block_result) =>
        match(block_result)({
          Err: (_) => acc,
          Ok: (stmt) =>
            if_let(stmt)("Run")((stmt_run) => f(acc, stmt_run))(const_(acc)),
        }),
      init
    )

const calculate_mana = reduce_run_results(0n)(
  (acc, s) => acc + read_num(s.used_mana)
)
const calculate_size = reduce_run_results(0n)(
  (acc, s) => acc + read_num(s.size_diff)
)

interface StmtCount {
  ctrs: number
  funs: number
  runs: number
}
const StmtCount_default = { ctrs: 0, funs: 0, runs: 0 }

const count_statements = (content: BlockContentJson): StmtCount =>
  content.reduce(
    (acc, stmt) =>
      match(stmt)({
        Ctr: (_) => ({ ...acc, ctrs: acc.ctrs + 1 }),
        Fun: (_) => ({ ...acc, funs: acc.funs + 1 }),
        Run: (_) => ({ ...acc, runs: acc.runs + 1 }),
      }),
    StmtCount_default
  )
