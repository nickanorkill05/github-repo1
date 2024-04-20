import React from 'react'
import { UserButton, auth } from '@clerk/nextjs'

const page = () => {

  const { userId } = auth();
  console.log(userId)

  return ( 
      <div className="bg-teal-800 text-white py-2 px-4 flex items-center justify-between pt-5 pb-5">
    <div className="flex items-center"> 
        <span className="font-semibold">Nicks Test</span>
    </div>
    <div className="flex items-center">
      {!userId && (

        <>
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2"><a href="/sign-in">Sign in</a></button>
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"><a href="/sign-up">Sign up</a> </button>
        </>

      )}
      {userId && (

        <>
        <div className='ml-auto'>
        <UserButton afterSignOutUrl='/' />
      </div>
      </>

      )}
        </div>
</div> 
  )
}

export default page
