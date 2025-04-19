import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function AcademicCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold">Quarters:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Quarter 1: August 15 - October 14</li>
          <li>Quarter 2: October 17 - December 21</li>
          <li>Quarter 3: January 4 - March 10</li>
          <li>Quarter 4: March 13 - May 26</li>
        </ul>
        <h3 className="font-semibold mt-4">Important Dates:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Back to School Night: September 1</li>
          <li>Winter Break: December 22 - January 3</li>
          <li>Spring Break: March 27 - March 31</li>
          <li>Last Day of School: May 26</li>
        </ul>
      </CardContent>
    </Card>
  )
}
