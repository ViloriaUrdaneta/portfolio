import React from 'react'
import WebProyectComponent from '../../components/WebProyectComponent'
import webData from '../../data/webs.json'
import Link from 'next/link'

function Webs() {

  const arrow = '<=';

  return (
    <div className='flex min-h-screen flex-col items-center p-4 bg-gray-800 text-white h-full font-mono'>
        <h1 className='text-5xl py-16'>Proyectos de desarrollo</h1>
      <div className='container'>
        {webData.map((web )=> (
          <WebProyectComponent key={web.id} web={web}/>
        ))}
      </div>
      <Link href={'/'}>
        <p className='text-5xl py-16 hover:text-sky-500'>
          {arrow}
        </p>
      </Link>
    </div>
  )
}

export default Webs
