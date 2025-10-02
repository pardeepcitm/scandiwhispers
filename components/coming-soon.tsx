"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight text-balance">
            Something amazing is coming soon.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            We're working hard to bring you an exceptional experience. Stay tuned for updates and be the first to know
            when we launch.
          </p>
        </div>

        {/* Email Notification Form */}
        <div className="max-w-md mx-auto pt-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Notify Me
              </Button>
            </form>
          ) : (
            <div className="p-4 rounded-lg bg-secondary border border-border">
              <p className="text-foreground font-medium">Thanks for subscribing! We'll notify you when we launch.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-12">
          <p className="text-sm text-muted-foreground">Expected launch: 2025</p>
        </div>
      </div>
    </main>
  )
}
