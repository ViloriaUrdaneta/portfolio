'use client'
import { useState } from 'react';
import Link from 'next/link'
import copyIcon from '../public/copy.png'
import Image from 'next/image'
import profile from '../public/profilepic.png'
import githubIcon from '../public/GitHub-logo.png'


export default function Home() {

  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  }

  const arrow = '=>'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-black h-screen">
      <div className="w-full bg-white h-full flex font-mono">
        <div className="h-full w-1/12 border-r-4 border-black">
          <div className="h-2/4 border-b-4 border-black bg-gradient-to-br from-black to-indigo-500" >
            
          </div>
          <div className="h-2/4 border-black flex items-end">
            <a href="https://github.com/ViloriaUrdaneta" target="_blank" rel="noopener noreferrer" className='mx-auto'>
              <Image  src={githubIcon} alt="github" width={100} height={100} className=' flex flex-nowrap mx-auto mb-5' />
            </a>
          </div>
        </div>
        <div className="h-full w-6/12 border-r-4 border-black">
          <div className="h-2/4 border-b-4 border-black">
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100 justify-between">
              <h1 className='text-xl border-black ml-10 font-semibold'>Miguel Viloria</h1>
              <Image  src={profile} alt="profile" width={70} height={70} className=' flex flex-nowrap me-8' />
            </div>
            <div className="h-3/4 border-black hover:bg-black hover:text-slate-100">
              <h2 className='text-2xl border-black ml-10 pt-5 font-semibold'>Desarrollador web</h2>
              <p className='text-base mx-10 font-sans pt-2 first-line:pl-indent border-black'>
                Me gusta entender como se guarda, estructura y maneja la información y me gusta proponer diseños estéticos innovadores para mostrarla.
                <br/>Creo en los beneficios del aprendizaje continuo y en la necesidad de usar las herramientas tecnológias para mejorar nuestras vidas.
              </p>
              <p className='text-base mx-10 font-sans pt-2 text-white'>También soy editor de video y me gusta pintar.</p>
            </div>
          </div>
          <div className="h-2/4 border-black">
            <Link href={'/webs'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl border-black ml-10 font-semibold'>Portafolio Web</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/blog'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl border-black ml-10 font-semibold'>Blog</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/videos'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 border-black font-semibold'>Producción y edición de video</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/paints'}>
              <div className="h-1/4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 border-black font-semibold'>Pinturas</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full w-5/12">
          <div className="h-1/8 border-b-4 border-black flex items-center bg-black text-slate-100 hover:bg-white hover:text-slate-900">
            <p className='text-lg ml-10 border-black' id='mail'>miguel.viloria.247@gmail.com</p>
            <button onClick={() => copyToClipboard('miguel.viloria.247@gmail.com')} className='ml-10 flex items-center  text-center'>
              <Image  src={copyIcon} alt="javascript" width={20} height={20} className='text-center' />
              <p className='font-extrabold text-lg text-black'>{copied ? 'Copied!' : 'Copy'}</p>
            </button>
          </div>
          <div className=" h-7/8 border-black bg-gradient-to-br from-cyan-400  to-black">
         
          </div>
        </div>
        
      </div>      
    </main>
  )
}
