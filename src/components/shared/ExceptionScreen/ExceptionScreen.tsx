import React from 'react'
import BackButton from '../BackButton'

interface ExceptionScreenProps {
  refetch: () => void
  message: string
}

const ExceptionScreen = ({ refetch, message }: ExceptionScreenProps) => {
  return (
    <div>
      <BackButton />
      <div className="flex h-screen flex-col items-center justify-center">
        {message}
        <div className="mt-6 flex justify-center">
          <button onClick={() => refetch()}>다시 시도하기</button>
        </div>
      </div>
    </div>
  )
}

export default ExceptionScreen
