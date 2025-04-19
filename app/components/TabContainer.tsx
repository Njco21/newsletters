'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SubjectsTeachers } from './SubjectsTeachers'
import { GradeHallway } from './GradeHallway'
import { Extracurricular } from './Extracurricular'
import { Electives } from './Electives'

export function TabContainer() {
  const [activeTab, setActiveTab] = useState('subjects')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="subjects">Subjects & Teachers</TabsTrigger>
        <TabsTrigger value="hallway">Grade Hallway</TabsTrigger>
        <TabsTrigger value="extracurricular">Extracurricular</TabsTrigger>
        <TabsTrigger value="electives">Electives</TabsTrigger>
      </TabsList>
      <TabsContent value="subjects">
        <SubjectsTeachers />
      </TabsContent>
      <TabsContent value="hallway">
        <GradeHallway />
      </TabsContent>
      <TabsContent value="extracurricular">
        <Extracurricular />
      </TabsContent>
      <TabsContent value="electives">
        <Electives />
      </TabsContent>
    </Tabs>
  )
}
