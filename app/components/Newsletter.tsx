import { NewsletterHeader } from "./NewsletterHeader"
import { Card, CardContent } from "@/components/ui/card"

export function Newsletter() {
  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <NewsletterHeader />
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Newsletter content would go here */}
          <div className="prose max-w-none">
            <p>Newsletter content will be displayed here...</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
