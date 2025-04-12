import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCategories from "@/components/service-categories"
import ChatbotButton from "@/components/chatbot-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Home Repairs Made</span>
            <span className="block text-red-600">Simple with PEPPER</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            Schedule professional home repair and appliance services with ease. Our AI assistant PEPPER is here to help
            you every step of the way.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/schedule">Schedule Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10">
          <ChatbotButton />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional solutions for all your home repair and maintenance needs
            </p>
          </div>

          <ServiceCategories />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Three simple steps to get your home repairs done</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Choose a Service",
                description: "Browse our service categories or ask PEPPER to help you find what you need.",
                icon: "🔍",
              },
              {
                title: "2. Schedule an Appointment",
                description: "Select a convenient date and time for your service appointment.",
                icon: "📅",
              },
              {
                title: "3. Get it Fixed",
                description: "Our professional technician will arrive and solve your problem.",
                icon: "🛠️",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "PEPPER helped me find the right technician for my refrigerator repair. The service was quick and professional!",
                author: "Sarah Johnson",
              },
              {
                quote:
                  "Scheduling a plumbing service was so easy. The technician arrived on time and fixed the issue in no time.",
                author: "Michael Chen",
              },
              {
                quote:
                  "I love how I can chat with PEPPER anytime to check on my appointment or ask questions about my service.",
                author: "Emily Rodriguez",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium text-gray-900">— {testimonial.author}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
