import { FC, FormEventHandler, useRef } from "react"
import { useMailchimp } from "api/mailchimp"
import { classNames } from "../utils"

interface SubscribeProps {
  endpoint?: string
}

interface SubscribeFormData {
  email: { value: string }
}

export const Subscribe: FC<SubscribeProps> = ({
  endpoint = "/api/subscribe",
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [subscribe, { loading, message, status }] = useMailchimp({
    endpoint,
    onSuccess: () => {
      formRef.current?.reset()
    },
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const { email } = e.target as typeof e.target & SubscribeFormData

    subscribe({ EMAIL: email.value })
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto py-10 px-2 w-full"
    >
      <div className="flex flex-col space-y-3 items-center text-center">
        <h3 className="uppercase text-3xl font-bold prose">Newsletter</h3>
        <p className="pb-3 text-lg prose">
          Keep up with our latest news and events.
        </p>
        <div className="flex w-full flex-col md:flex-row justify-center items-center md:space-x-4 space-y-5 md:space-y-0">
          <input
            className={classNames(
              "input input-bordered max-w-md w-full input-lg",
              { "input-disabled": loading }
            )}
            placeholder="Email address"
            type="email"
            name="email"
            disabled={loading}
            required
          />
          <button
            disabled={loading}
            className={classNames("btn btn-lg w-44", { loading })}
          >
            Subscribe
          </button>
        </div>
        <p
          className={classNames("h-6 font-semibold", {
            "text-success": status === "success",
            "text-error": status === "error",
          })}
        >
          {message?.toString()}
        </p>
      </div>
    </form>
  )
}
