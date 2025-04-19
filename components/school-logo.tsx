export function SchoolLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M24 4L6 12V22C6 32.1 13.68 41.48 24 44C34.32 41.48 42 32.1 42 22V12L24 4Z"
          fill="white"
          stroke="#473877"
          strokeWidth="1"
        />
        <path d="M24 8L10 14V22C10 30.1 16.28 37.48 24 40C31.72 37.48 38 30.1 38 22V14L24 8Z" fill="#473877" />
        <path
          d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
          fill="white"
        />
        <path d="M14.5 24L19 19.5L24 14.5L29.5 19.5L34 24L29.5 29L24 34L19 29L14.5 24Z" fill="#473877" />
        <path
          d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
          fill="white"
        />
        <text
          x="24"
          y="26.5"
          fontFamily="Arial, sans-serif"
          fontSize="7"
          fontWeight="bold"
          fill="#473877"
          textAnchor="middle"
        >
          TCS
        </text>
      </svg>
    </div>
  )
}
