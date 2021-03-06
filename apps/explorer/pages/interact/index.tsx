import { useRef } from "react"

import Editor from "@monaco-editor/react"
import { NextPageWithLayout, Page } from "ui"
import { Layout } from "@/components/Layout"
import { useTheme } from "ui/hooks"

const InteractIndex: NextPageWithLayout = () => {
  const editorRef = useRef<any>(null)
  const { theme } = useTheme()

  const getCode = () => editorRef.current?.getValue()

  const handleTest = () => {
    console.log("testing " + getCode())
  }

  const handleSend = () => {
    console.log("sending " + getCode())
  }

  return (
    <Page title="Interact" className="flex flex-col space-y-5">
      <h1 className="text-2xl">Interact</h1>
      <Editor
        className="border-2 p-1 border-base-200"
        height="70vh"
        defaultLanguage="kind"
        defaultValue="// some comment"
        onMount={(editor) => (editorRef.current = editor)}
        theme={theme === "dark" ? "vs-dark" : "light"}
      />
      <div className="space-x-5">
        <button className="btn btn-ghost" onClick={handleTest}>
          test
        </button>
        <button className="btn btn-primary" onClick={handleSend}>
          send
        </button>
      </div>
    </Page>
  )
}

InteractIndex.getLayout = Layout

export default InteractIndex
