'use client'

import { useState } from 'react'
import { Header } from './components/Header'
import { OrganizedNewsletters } from './components/OrganizedNewsletters'
import { LastMinuteUpdates } from './components/LastMinuteUpdates'
import { VirtualSchool } from './components/VirtualSchool'
import { AcademicCalendar } from './components/AcademicCalendar'
import { BlackbaudAccess } from './components/BlackbaudAccess'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [showBlackbaud, setShowBlackbaud] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-8 space-y-8">
        <div className="flex justify-end">
          <Button onClick={() => setShowBlackbaud(!showBlackbaud)}>
            {showBlackbaud ? 'Back to School Info' : 'Access Blackbaud'}
          </Button>
        </div>
        {showBlackbaud ? (
          <BlackbaudAccess />
        ) : (
          <>
            <OrganizedNewsletters />
            <LastMinuteUpdates />
            <VirtualSchool />
            <AcademicCalendar />
          </>
        )}
      </main>
    </div>
  )
}
