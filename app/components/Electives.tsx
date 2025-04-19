import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const electives = [
  { name: 'Introduction to Spanish', duration: 'Full Year' },
  { name: 'Computer Science Fundamentals', duration: 'One Semester' },
  { name: 'Creative Writing', duration: 'One Semester' },
  { name: 'Music Appreciation', duration: 'One Semester' },
  { name: 'Environmental Science', duration: 'One Semester' },
]

export function Electives() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Electives for the Year</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {electives.map((elective) => (
          <Card key={elective.name}>
            <CardHeader>
              <CardTitle>{elective.name}</CardTitle>
              <CardDescription>{elective.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
