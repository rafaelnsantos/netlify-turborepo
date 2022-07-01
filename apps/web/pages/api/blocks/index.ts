import { ApiResponse, get_blocks } from "@/lib/api"
import { BlockInfoJson } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<BlockInfoJson[]>>
) {
  try {
    const blocks = await get_blocks()
    res.status(200).json({ data: blocks, status: "ok" })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message, status: "error" })
  }
}
