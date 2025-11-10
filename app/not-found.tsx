import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='h-96 w-full flex justify-center items-center'>
        <article>
            <main className='flex justify-center items-center gap-4 flex-col'>
                <h3 className='text-3xl font-bold uppercase'>404 Not Found!</h3>
                <Link className='px-4 py-1.5 font-semibold text-emerald-500 hover:bg-emerald-500 hover:text-white duration-300 border border-emerald-500 rounded-full' href="/">Go Back</Link>
            </main>
        </article>
    </section>
  )
}

export default page
