import React, { useState } from "react"
import clsx from "clsx"

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  className?: string
}

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0)


  return (
    <div className={clsx("flex flex-col space-y-2", className)}>
      <div className="inline-flex h-10 justify-between items-center rounded-md bg-[#27272a] p-1 text-[#6e7278]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={clsx(
                "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                activeTab === index
                  ? "bg-black text-[#f5f7f9] shadow-sm"
                  : "hover:bg-[#f5f7f9]"
              )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

export default Tabs