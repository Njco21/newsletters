import { Button } from '@/components/ui/button'

const classrooms = [
  { number: '201', subject: 'Mathematics' },
  { number: '202', subject: 'English' },
  { number: '203', subject: 'Science' },
  { number: '204', subject: 'Social Studies' },
  { number: '205', subject: 'Art' },
]

export function GradeHallway() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Grade 6 Hallway</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {classrooms.map((classroom) => (
          <Button key={classroom.number} variant="outline" className="h-24 w-24">
            <div className="text-center">
              <div className="font-bold">{classroom.number}</div>
              <div className="text-sm">{classroom.subject}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
