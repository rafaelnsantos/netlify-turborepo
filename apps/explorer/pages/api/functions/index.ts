import { ApiResponse, get_functions } from "@/lib/api"
import { Name } from "@/lib/types"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Name[]>>
) {
  try {
    const functions = await get_functions()
    res.status(200).json({ data: functions, status: "ok" })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message, status: "error" })
  }
}
