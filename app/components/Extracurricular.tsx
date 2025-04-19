import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const activities = [
  { name: 'Soccer Club', type: 'Sport', schedule: 'Mon, Wed 3-4:30 PM' },
  { name: 'Art Club', type: 'Club', schedule: 'Tue, Thu 3-4:30 PM' },
  { name: 'Science Fair', type: 'Event', date: 'April 20, 2024' },
  { name: 'Book Club', type: 'Club', schedule: 'Fri 3-4 PM' },
]

export function Extracurricular() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Playground Schedule</CardTitle>
          <CardDescription>Open for student use during recess and lunch</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Monday - Friday: 10:30 AM - 10:45 AM (Recess), 12:00 PM - 12:30 PM (Lunch)</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <Card key={activity.name}>
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
              <CardDescription>{activity.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{activity.schedule || `Date: ${activity.date}`}</p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
