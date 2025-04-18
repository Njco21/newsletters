"use client"

import { useState, useEffect } from "react"

export default function ComputerScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-8">
      <div className="w-full max-w-5xl">
        {/* Computer monitor frame */}
        <div className="bg-trinity-purple rounded-t-xl p-2 md:p-3 shadow-2xl">
          <div className="flex items-center justify-between mb-1">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
          </div>

          {/* Screen content */}
          <div className="bg-white rounded overflow-hidden relative">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-trinity-purple border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : null}

            <img
              src="https://sjc.microlink.io/pOelJDZZm3xWEtfIYTXceZdihMkiMZPqpGJexOEpyxkHZAWiOZSmy0_KxJXYUN95v3iF9X-X_MOLkeAVqz20QQ.jpeg"
              alt="Trinity Christian School website"
              className={`w-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
            />
          </div>
        </div>

        {/* Monitor stand */}
        <div className="flex justify-center">
          <div className="w-32 h-4 bg-trinity-purple rounded-b-lg"></div>
          <div className="w-10 h-16 bg-gradient-to-b from-trinity-purple to-gray-700 -mt-2"></div>
          <div className="w-48 h-3 bg-gray-700 rounded-lg -mt-3"></div>
        </div>

        {/* Desk surface reflection */}
        <div className="w-64 h-4 bg-gray-800 bg-opacity-20 mx-auto rounded-full blur-sm -mt-1"></div>
      </div>
    </div>
  )
}
