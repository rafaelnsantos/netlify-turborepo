import { ApiResponse, get_function } from "@/lib/api"
import { FunctionId } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { Option } from "api/utils/enum"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Option<any>>>
) {
  const name = req.query.name as FunctionId

  try {
    const func = await get_function(name)
    res.status(200).json({ data: func, status: "ok" })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message, status: "error" })
  }
}
