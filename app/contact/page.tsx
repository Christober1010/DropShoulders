"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="w-[70%] mx-auto py-10">
      <div className="space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help. Reach out to our team using any of the
            methods below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                Email Us
              </CardTitle>
              <CardDescription>Send us an email anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="mailto:support@droptee.com" className="text-primary hover:underline">
                support@droptee.com
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond within 24 hours on business days.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                Call Us
              </CardTitle>
              <CardDescription>Speak with our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="tel:+18005551234" className="text-primary hover:underline">
                +1 (800) 555-1234
              </Link>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <Clock className="mr-2 h-4 w-4" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Visit Us
              </CardTitle>
              <CardDescription>Our headquarters location</CardDescription>
            </CardHeader>
            <CardContent>
              <address className="not-italic">
                123 Fashion Street
                <br />
                Portland, OR 97201
                <br />
                United States
              </address>
              <div className="text-sm text-muted-foreground mt-2">By appointment only</div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <RadioGroup
                    value={formData.subject}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="font-normal">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="order" id="order" />
                      <Label htmlFor="order" className="font-normal">
                        Order Support
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="product" id="product" />
                      <Label htmlFor="product" className="font-normal">
                        Product Information
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feedback" id="feedback" />
                      <Label htmlFor="feedback" className="font-normal">
                        Feedback
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              {/* Replace with actual map component in production */}
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Interactive Map</p>
                {/* In a real implementation, you would use a map component like Google Maps or Mapbox */}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Store Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>10:00 AM - 7:00 PM</div>
                <div>Saturday</div>
                <div>11:00 AM - 6:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
              <p className="text-muted-foreground text-sm">
                Our customer service team is available during business hours. For urgent inquiries outside of these
                hours, please email us and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted rounded-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
            <div className="space-y-2">
              <h3 className="font-bold">How long does shipping take?</h3>
              <p className="text-muted-foreground">
                Domestic orders typically arrive within 3-5 business days. International shipping usually takes 7-14
                business days, depending on the destination.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for unworn items in original condition. Returns are free for domestic
                orders.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">How do I track my order?</h3>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can also view your order status
                in your account dashboard.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Do you offer wholesale options?</h3>
              <p className="text-muted-foreground">
                Yes, we offer wholesale pricing for bulk orders. Please contact our sales team at wholesale@droptee.com
                for more information.
              </p>
            </div>
          </div>
          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on new collections, exclusive offers, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

