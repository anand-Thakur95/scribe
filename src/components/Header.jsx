import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-1 m-4 ">
    <a href='/'><h1 className='font-medium'>Free<span className="text-blue-400 bold">Scribe</span></h1></a>
    <a href='/' className="flex items-center gap-2 specailBtn px-4 text-sm py-2 rounded-lg text-blue-400">
      <p>New</p>
      <i class="fa-solid fa-plus"></i>
    </a>
  </header>
  )
}
