import React from 'react'

function Home() {
  return (
    <div className='flex items-center justify-center flex-col bg-slate-200 w-full h-[90vh]'>
      <h1 className='text-3xl text-center flex items-center justify-center'>Please click Dashboard button.</h1>
      <button onClick={() => window.location.href = '/dashboard'} className='mt-10 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'>Dashboard</button>
    </div>
  )
}

export default Home
Home