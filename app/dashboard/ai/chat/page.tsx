"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Globe, MapPin, Mic } from "lucide-react"
import { ContentLayout } from "@/components/admin-panel/content-layout"

export default function Chat() {
  return (
    <ContentLayout title="All Posts">
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
        <div className="w-full max-w-3xl rounded-xl bg-[#1C1C1E] overflow-hidden">
          <div className="p-3">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Ask anything"
                  className="bg-[#2C2C2E] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-400 h-9 pl-4 pr-12 rounded-full"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full hover:bg-[#3C3C3E] text-gray-400"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}

