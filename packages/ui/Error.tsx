import { KindeliaIcon } from "./icons/KindeliaIcon"

interface ErrorProps {
  code?: number
  message: string
}

export const Error: React.FC<ErrorProps> = ({ code, message }) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="h-28 md:h-48">
        <KindeliaIcon size="100%" />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-4xl">{code}</h1>
        <p>{message}</p>
      </div>
    </div>
  )
}
