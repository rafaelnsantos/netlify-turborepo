import { hash_hex_from } from "api/utils/hex"
import { ApiResponse, get_block } from "@/lib/api"
import { BlockInfoJson } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { Option } from "api/utils/enum"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Option<BlockInfoJson>>>
) {
  const id = req.query.id as string

  const hex = hash_hex_from(id)

  if (!hex)
    return res.status(400).json({ error: "Hex missing", status: "error" })

  try {
    const block = await get_block(hex)
    res.status(200).json({ data: block, status: "ok" })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message, status: "error" })
  }
}
