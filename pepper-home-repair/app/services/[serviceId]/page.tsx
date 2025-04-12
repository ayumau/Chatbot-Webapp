import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import ChatbotButton from "@/components/chatbot-button"

// This would typically come from a database
const serviceData = {
  plumbing: {
    title: "Plumbing Services",
    description: "Professional plumbing services for your home",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Leak detection and repair",
      "Drain cleaning and unclogging",
      "Pipe repair and replacement",
      "Fixture installation",
      "Water heater services",
      "Sump pump installation and repair",
    ],
    commonIssues: [
      "Dripping faucets",
      "Running toilets",
      "Leaky pipes",
      "Low water pressure",
      "Clogged drains",
      "Water heater problems",
    ],
  },
  electrical: {
    title: "Electrical Services",
    description: "Safe and reliable electrical services",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Electrical repairs and troubleshooting",
      "Outlet and switch installation",
      "Lighting installation",
      "Ceiling fan installation",
      "Electrical panel upgrades",
      "Whole-house surge protection",
    ],
    commonIssues: [
      "Flickering lights",
      "Circuit breaker problems",
      "Outdated wiring",
      "Power outages",
      "Electrical surges",
      "Overloaded circuits",
    ],
  },
  "appliance-repair": {
    title: "Appliance Repair",
    description: "Expert repair services for all major home appliances",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Refrigerator repair",
      "Washer and dryer repair",
      "Dishwasher repair",
      "Oven and range repair",
      "Microwave repair",
      "Garbage disposal repair",
    ],
    commonIssues: [
      "Refrigerator not cooling",
      "Washer not draining",
      "Dishwasher not cleaning properly",
      "Oven not heating",
      "Dryer not heating",
      "Strange noises from appliances",
    ],
  },
  hvac: {
    title: "HVAC Services",
    description: "Heating, ventilation, and air conditioning solutions",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "AC repair and maintenance",
      "Heating system repair",
      "HVAC installation",
      "Air duct cleaning",
      "Thermostat installation",
      "Indoor air quality solutions",
    ],
    commonIssues: [
      "AC not cooling",
      "Furnace not heating",
      "Uneven temperature distribution",
      "Strange odors from vents",
      "Thermostat problems",
      "High energy bills",
    ],
  },
  carpentry: {
    title: "Carpentry Services",
    description: "Quality woodworking and carpentry for your home",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Furniture repair and restoration",
      "Door installation and repair",
      "Cabinet installation and repair",
      "Deck and fence repair",
      "Trim and molding installation",
      "Custom woodworking",
    ],
    commonIssues: [
      "Broken furniture",
      "Doors that won't close properly",
      "Damaged cabinets",
      "Rotting deck boards",
      "Loose railings",
      "Damaged trim and molding",
    ],
  },
  painting: {
    title: "Painting Services",
    description: "Professional interior and exterior painting",
    image: "/placeholder.svg?height=400&width=800",
    features: [
      "Interior painting",
      "Exterior painting",
      "Cabinet painting",
      "Deck and fence staining",
      "Wallpaper removal",
      "Color consultation",
    ],
    commonIssues: [
      "Peeling or flaking paint",
      "Water damage stains",
      "Faded exterior paint",
      "Outdated colors",
      "Wallpaper removal",
      "Paint bubbling or blistering",
    ],
  },
}

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const { serviceId } = params
  const service = serviceData[serviceId as keyof typeof serviceData]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{service.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/schedule">Schedule Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/services`}>Back to Services</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our {service.title} Include</CardTitle>
              <CardDescription>Professional solutions for all your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/schedule">Book This Service</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common {serviceId.charAt(0).toUpperCase() + serviceId.slice(1)} Issues</CardTitle>
              <CardDescription>Problems we frequently solve for our customers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Having a different issue? Chat with PEPPER to get personalized help.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose PEPPER for Your {service.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Technicians",
                description: "Our professionals are licensed, insured, and highly trained in their field.",
              },
              {
                title: "Satisfaction Guaranteed",
                description: "We stand behind our work with a 100% satisfaction guarantee.",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees or surprises. We provide upfront pricing before work begins.",
              },
            ].map((item, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 left-5 md:bottom-10 md:left-10">
        <ChatbotButton />
      </div>
    </div>
  )
}
