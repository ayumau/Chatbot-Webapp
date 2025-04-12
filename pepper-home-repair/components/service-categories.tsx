import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Leaky faucets, clogged drains, pipe repairs, and more.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Wiring issues, outlet installation, lighting fixtures, and more.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "appliance-repair",
    title: "Appliance Repair",
    description: "Refrigerator, washer, dryer, dishwasher, and other appliance repairs.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Heating, ventilation, and air conditioning services and repairs.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Furniture repair, door installation, woodwork, and more.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "painting",
    title: "Painting",
    description: "Interior and exterior painting services for your home.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ServiceCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card key={service.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/services/${service.id}`}>Book Now</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
