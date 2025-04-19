import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const subjects = [
  { name: 'Mathematics', teacher: 'Ms. Thompson', room: '201' },
  { name: 'English', teacher: 'Mr. Garcia', room: '202' },
  { name: 'Science', teacher: 'Mrs. Patel', room: '203' },
  { name: 'Social Studies', teacher: 'Mr. Lee', room: '204' },
  { name: 'Art', teacher: 'Ms. Rodriguez', room: '205' },
]

export function SubjectsTeachers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Subject</TableHead>
          <TableHead>Teacher</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subjects.map((subject) => (
          <TableRow key={subject.name}>
            <TableCell>{subject.name}</TableCell>
            <TableCell>{subject.teacher}</TableCell>
            <TableCell>{subject.room}</TableCell>
            <TableCell>
              <Button variant="outline">View Classroom</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
