'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const classrooms = [
  { id: 1, name: '6A', teacher: 'Ms. Thompson', subject: 'Homeroom' },
  { id: 2, name: '6B', teacher: 'Mr. Garcia', subject: 'Homeroom' },
  { id: 3, name: 'Math Lab', teacher: 'Mrs. Patel', subject: 'Mathematics' },
  { id: 4, name: 'Science Lab', teacher: 'Dr. Johnson', subject: 'Science' },
  { id: 5, name: 'Library', teacher: 'Mr. Lee', subject: 'Reading' },
  { id: 6, name: 'Art Studio', teacher: 'Ms. Rodriguez', subject: 'Art' },
  { id: 7, name: 'Music Room', teacher: 'Mr. Smith', subject: 'Music' },
  { id: 8, name: 'Gym', teacher: 'Coach Brown', subject: 'Physical Education' },
]

function ClassroomDialog({ classroom }: { classroom: typeof classrooms[0] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-24 w-full">
          <div className="text-center">
            <div className="font-bold">{classroom.name}</div>
            <div className="text-sm">{classroom.subject}</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{classroom.name}</DialogTitle>
          <DialogDescription>{classroom.subject}</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="info">
          <TabsList>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <div className="mt-4">
              <p><strong>Teacher:</strong> {classroom.teacher}</p>
              <p className="mt-2">Welcome to our virtual classroom! Here you can find resources, assignments, and connect with your classmates.</p>
            </div>
          </TabsContent>
          <TabsContent value="assignments">
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Current Assignments</h3>
              <ul className="list-disc pl-5">
                <li>Chapter 5 Review - Due Friday</li>
                <li>Group Project Presentation - Due Next Monday</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="grades">
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Recent Grades</h3>
              <ul className="list-disc pl-5">
                <li>Quiz 3: 85%</li>
                <li>Homework 7: 92%</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export function VirtualSchool() {
  const [currentFloor, setCurrentFloor] = useState('1st Floor')

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Virtual School Tour</CardTitle>
        <CardDescription>Explore our 6th grade classrooms and facilities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-4">
          <Button
            variant={currentFloor === '1st Floor' ? 'default' : 'outline'}
            onClick={() => setCurrentFloor('1st Floor')}
          >
            1st Floor
          </Button>
          <Button
            variant={currentFloor === '2nd Floor' ? 'default' : 'outline'}
            onClick={() => setCurrentFloor('2nd Floor')}
          >
            2nd Floor
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {classrooms.slice(0, currentFloor === '1st Floor' ? 4 : 8).map((classroom) => (
            <ClassroomDialog key={classroom.id} classroom={classroom} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
