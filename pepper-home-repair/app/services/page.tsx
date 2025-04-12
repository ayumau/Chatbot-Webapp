import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCategories from "@/components/service-categories"
import ChatbotButton from "@/components/chatbot-button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            PEPPER offers a wide range of professional home repair and maintenance services. Browse our service
            categories below or chat with our assistant for personalized recommendations.
          </p>
        </div>

        <ServiceCategories />

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure what you need?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our AI assistant PEPPER can help you identify the right service for your needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/schedule">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>

      <div className="fixed bottom-5 left-5 md:bottom-10 md:left-10">
        <ChatbotButton />
      </div>
    </div>
  )
}
