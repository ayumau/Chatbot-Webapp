"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChatInterface from "./chat-interface"

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button size="lg" className="rounded-full h-14 w-14 md:h-16 md:w-16 shadow-lg" onClick={() => setIsOpen(true)}>
        <MessageCircle size={24} />
      </Button>

      {isOpen && (
        <div className="fixed bottom-5 left-5 md:bottom-10 md:left-10 z-50 w-full max-w-[90vw] sm:max-w-md">
          <Card className="shadow-xl border-2 border-red-100">
            <CardHeader className="flex flex-row items-center justify-between bg-red-600 text-white">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle size={20} />
                PEPPER Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-red-700"
              >
                <X size={20} />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <ChatInterface />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
