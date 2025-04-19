import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock data for newsletters
const newsletters = [
  {
    date: '2024-03-10',
    subject: 'Academic Updates',
    content: 'This week\'s academic updates include information about the upcoming science fair, changes to the math curriculum, and a new reading challenge for 6th graders.',
  },
  {
    date: '2024-03-03',
    subject: 'Extracurricular Activities',
    content: 'Sign-ups for spring sports are now open. We\'re offering soccer, track and field, and tennis this season. Don\'t forget about our art club showcase next Friday!',
  },
  {
    date: '2024-02-25',
    subject: 'Important Announcements',
    content: 'Parent-teacher conferences are scheduled for March 15-16. Please use the online portal to book your preferred time slot. The spring concert has been rescheduled to April 5.',
  },
  {
    date: '2024-02-18',
    subject: 'Community Events',
    content: 'Join us for the annual Trinity Family Picnic on March 20. We\'re also collecting donations for the local food bank - drop off non-perishable items at the main office.',
  },
]

export function OrganizedNewsletters() {
  const [selectedNewsletter, setSelectedNewsletter] = useState(newsletters[0])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Inside the Pride Weekly Newsletters</CardTitle>
        <CardDescription>Stay updated on the latest school happenings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={newsletters[0].subject} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {newsletters.map((newsletter) => (
              <TabsTrigger
                key={newsletter.date}
                value={newsletter.subject}
                onClick={() => setSelectedNewsletter(newsletter)}
              >
                {newsletter.subject}
              </TabsTrigger>
            ))}
          </TabsList>
          {newsletters.map((newsletter) => (
            <TabsContent key={newsletter.date} value={newsletter.subject}>
              <Card>
                <CardHeader>
                  <CardTitle>{newsletter.subject}</CardTitle>
                  <CardDescription>{new Date(newsletter.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{newsletter.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Subscribe to Inside the Pride</h3>
          <p className="mb-4">Published every Sunday evening. Resent every Wednesday to subscribers who haven't opened their email.</p>
          <Button>Subscribe</Button>
        </div>
      </CardContent>
    </Card>
  )
}
