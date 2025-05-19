"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, SquareTerminal, ShoppingCart, BookImage } from "lucide-react"

export const NavItems = [
  {
    title: "Home",
    url: "/dashboard/addProject",
    icon: <SquareTerminal className="w-5 h-5" />,
  },
 {
  title: "Projects",
  url: "/dashboard/projects",
  icon: <BookImage className="w-5 h-5" />,
  items: [
    { title: "Add project", url: "/dashboard/projects/add" },
    { title: "All project", url: "/dashboard/projects/all" },
  ],
},
 {
  title: "Skills",
  url: "/dashboard/skills",
  icon: <BookImage className="w-5 h-5" />,
  items: [
    { title: "Add skill", url: "/dashboard/skills/addSkill" },
    { title: "All skill", url: "/dashboard/skills/allSkills" },
  ],
},
 {
  title: "Blogs",
  url: "/dashboard/blogs",
  icon: <BookImage className="w-5 h-5" />,
  items: [
    { title: "Add blog", url: "/dashboard/blogs/add" },
    { title: "All blogs", url: "/dashboard/blogs/all" },
  ],
},
  {
    title: "Payments Management",
    url: "/admin/manage-payments",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleSubMenu = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    )
  }

  const isActive = (url: string) => pathname === url || pathname?.startsWith(url + "/")

  return (
    <aside className="w-64 bg-white border-r text-black min-h-screen">
      <div className="p-4 text-lg bg-blue-900 text-white font-bold border-b">Admin Panel</div>
      <nav className="p-2 space-y-2">
        {NavItems.map((item) => (
          <div key={item.title}>
            {item.items ? (
              <>
                <button
                  onClick={() => toggleSubMenu(item.title)}
                  className={`flex w-full items-center gap-3 px-4 py-2 rounded-md font-medium ${
                    isActive(item.url) ? "bg-gray-200 text-black" : "hover:bg-gray-200"
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`ml-auto h-4 w-4 transition-transform ${
                      openItems.includes(item.title) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.includes(item.title) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.url}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          isActive(subItem.url)
                            ? "bg-gray-200 text-black"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.url}
                className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium ${
                  isActive(item.url) ? "bg-gray-200 text-black" : "hover:bg-gray-200"
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
