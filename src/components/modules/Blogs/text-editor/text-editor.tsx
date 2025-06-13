"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bold, Italic, Underline, Code, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Link, ImageIcon, } from "lucide-react"

export default function TextEditor() {
  const [content, setContent] = useState("You don't need to be a coder to build software.")
  const editorRef = useRef<HTMLDivElement>(null)

  const format = (command: string, value: string = "") => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
  }

  return (
    <div className="border rounded-md w-full max-w-3xl mx-auto">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b">

        <Select defaultValue="sans-serif" onValueChange={(value) => format("fontName", value)}>
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sans-serif">Sans Serif</SelectItem>
            <SelectItem value="serif">Serif</SelectItem>
            <SelectItem value="monospace">Monospace</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => format("formatBlock", value)}>
          <SelectTrigger className="w-[100px] h-8">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="p">Normal</SelectItem>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center border-l border-r px-1 mx-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("bold")}>
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("italic")}>
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("underline")}>
            <Underline className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("insertHTML", "<code>code</code>")}>
            <Code className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center border-l border-r px-1 mx-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("justifyLeft")}>
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("justifyCenter")}>
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("justifyRight")}>
            <AlignRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("justifyFull")}>
            <AlignJustify className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("insertUnorderedList")}>
          <ul className="flex flex-col items-start h-4 w-4 justify-center">
            <li className="h-[2px] w-3 bg-current mb-[2px]" />
            <li className="h-[2px] w-3 bg-current mb-[2px]" />
            <li className="h-[2px] w-3 bg-current" />
          </ul>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => format("insertOrderedList")}>
          <ol className="flex flex-col items-start h-4 w-4 justify-center">
            <li className="h-[2px] w-3 bg-current mb-[2px]" />
            <li className="h-[2px] w-3 bg-current mb-[2px]" />
            <li className="h-[2px] w-3 bg-current" />
          </ol>
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
          const url = prompt("Enter URL");
          if (url) format("createLink", url);
        }}>
          <Link className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
          const url = prompt("Enter image URL");
          if (url) format("insertImage", url);
        }}>
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        className="p-4 min-h-[100px] focus:outline-none"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
