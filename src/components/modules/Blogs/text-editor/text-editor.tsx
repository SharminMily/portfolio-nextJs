"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bold,
  Italic,
  Underline,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link,
  ImageIcon,
  Table,
  Type,
} from "lucide-react"

export default function TextEditor() {
  const [content, setContent] = useState("You don't need to be a coder to build software.")

  return (
    <div className="border rounded-md w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b">
        <Select defaultValue="sans-serif">
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sans-serif">Sans Serif</SelectItem>
            <SelectItem value="serif">Serif</SelectItem>
            <SelectItem value="monospace">Monospace</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="normal">
          <SelectTrigger className="w-[100px] h-8">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="heading1">Heading 1</SelectItem>
            <SelectItem value="heading2">Heading 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center border-l border-r px-1 mx-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Underline className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Code className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <span className="text-xs font-bold">H₁</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <span className="text-xs font-bold">H₂</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <span className="text-xs">"</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <span className="text-xs">&lt;/&gt;</span>
        </Button>

        <div className="flex items-center border-l border-r px-1 mx-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ul className="flex flex-col items-start h-4 w-4 justify-center">
              <li className="h-[2px] w-3 bg-current mb-[2px]"></li>
              <li className="h-[2px] w-3 bg-current mb-[2px]"></li>
              <li className="h-[2px] w-3 bg-current"></li>
            </ul>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ol className="flex flex-col items-start h-4 w-4 justify-center">
              <li className="h-[2px] w-3 bg-current mb-[2px]"></li>
              <li className="h-[2px] w-3 bg-current mb-[2px]"></li>
              <li className="h-[2px] w-3 bg-current"></li>
            </ol>
          </Button>
        </div>

        <div className="flex items-center border-l border-r px-1 mx-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <AlignJustify className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Table className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Type className="h-4 w-4" />
        </Button>
      </div>

      <div
        className="p-4 min-h-[100px] focus:outline-none"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) => setContent(e.currentTarget.textContent || "")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
