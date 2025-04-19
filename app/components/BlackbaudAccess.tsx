'use client'

import { useState } from 'react'
import { BlackbaudLogin } from './BlackbaudLogin'
import { BlackbaudDashboard } from './BlackbaudDashboard'

export function BlackbaudAccess() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {!isLoggedIn ? (
        <BlackbaudLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <BlackbaudDashboard />
      )}
    </div>
  )
}
