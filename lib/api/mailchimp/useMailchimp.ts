import { useState } from "react"
import axios from "axios"
import { MailchimpResponse } from "./handler"

interface UseMailChimpConfig {
  endpoint?: string
  onError?: (error: string | Error) => void
  onSuccess?: (msg: string) => void
  timeout?: number
}

export const useMailchimp = <
  T extends Record<string, string> = { EMAIL: string }
>({
  endpoint = "/api/subscribe",
  onError,
  onSuccess,
  timeout = 5000,
}: UseMailChimpConfig) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<MailchimpResponse | undefined>()

  const subscribe = async (formData: T) => {
    setLoading(true)
    setResponse(undefined)
    try {
      const { data } = await axios.post<MailchimpResponse>(endpoint, formData, {
        timeout,
      })
      setResponse(data)
      if (data.result === "success" && onSuccess) onSuccess(data.msg)
      if (data.result === "error" && onError) onError(data.msg)
    } catch (err) {
      const { message } = err as Error
      setResponse({ result: "error", msg: message })
      if (onError) onError(message)
    } finally {
      setLoading(false)
    }
  }

  return [
    subscribe,
    {
      status: response?.result,
      loading,
      message: response?.msg,
    },
  ] as const
}
