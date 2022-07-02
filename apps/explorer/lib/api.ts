import axios from "axios"
import { AxiosRequestConfig } from "axios"

import { Option } from "api/utils/enum"

import * as T from "./types"
import { NODES } from "@/content/env"

export type ApiResponse<T> =
  | {
      status: "ok"
      data: T
    }
  | {
      status: "error"
      error: string
    }

const fetch_api = async <T>(
  endpoint: string,
  node: string = NODES[0],
  cfg?: AxiosRequestConfig
): Promise<T> => {
  let host = `http://${node}:8000` ?? "http://127.0.0.1:8000"

  // TODO: remove this after SSL is implemented
  if (typeof window === "undefined") {
    host = `http://${NODES[0]}:8000`
  } else {
    host = node.includes("api")
      ? node
      : `http://${node}:8000` ?? "http://127.0.0.1:8000"
  }

  const response = await axios.get<ApiResponse<T>>(`${host}${endpoint}`, cfg)
  // TODO: handle response error

  let body = response.data
  if (body.status !== "ok") {
    throw new Error(body.error)
  }
  return body.data
}

// Node

// export const get_tick = () => fetch_api<never>('/tick')

// Blocks

export const get_blocks = (node?: string) =>
  fetch_api<T.BlockInfoJson[]>("/blocks", node)

export const get_block = (hex: T.BlockId, node?: string) =>
  fetch_api<Option<T.BlockInfoJson>>(`/blocks/${hex}`, node)

// Functions

export const get_functions = (node?: string) =>
  fetch_api<T.Name[]>("/functions", node)

//TODO: function type
export const get_function = (id: T.FunctionId, node?: string) =>
  fetch_api<any>(`/functions/${id}`, node)

export const get_function_state = (id: T.FunctionId, node?: string) =>
  fetch_api<T.TermJson>(`/functions/${id}/state`, node)
