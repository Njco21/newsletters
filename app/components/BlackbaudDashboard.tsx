import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function BlackbaudDashboard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Blackbaud Dashboard</CardTitle>
        <CardDescription>Access your school information</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="grades">
          <TabsList>
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>
          <TabsContent value="grades">
            <h3 className="text-lg font-semibold mb-2">Current Grades</h3>
            <ul className="list-disc pl-5">
              <li>Math: 92%</li>
              <li>Science: 88%</li>
              <li>English: 95%</li>
              <li>History: 90%</li>
            </ul>
          </TabsContent>
          <TabsContent value="assignments">
            <h3 className="text-lg font-semibold mb-2">Upcoming Assignments</h3>
            <ul className="list-disc pl-5">
              <li>Math: Chapter 7 Review - Due Friday</li>
              <li>Science: Lab Report - Due Next Monday</li>
              <li>English: Book Report - Due in 2 weeks</li>
            </ul>
          </TabsContent>
          <TabsContent value="schedule">
            <h3 className="text-lg font-semibold mb-2">Today's Schedule</h3>
            <ul className="list-disc pl-5">
              <li>8:00 AM - Homeroom</li>
              <li>8:30 AM - Math</li>
              <li>9:30 AM - Science</li>
              <li>10:30 AM - English</li>
              <li>11:30 AM - Lunch</li>
              <li>12:30 PM - History</li>
              <li>1:30 PM - Elective</li>
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
