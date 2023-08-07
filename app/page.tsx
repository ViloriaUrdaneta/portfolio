'use client'
import { useState } from 'react';
import Link from 'next/link'
import copyIcon from '../public/copy.png'
import Image from 'next/image'
import profile from '../public/profilepic.png'
import jsIcon from '../public/icons/javascript.png'
import tsIcon from '../public/icons/typescript.png'
import reactIcon from '../public/icons/react.png'
import nodeIcon from '../public/icons/node.png'
import nextIcon from '../public/icons/next.png'
import expressIcon from '../public/icons/express.png'
import tailwindIcon from '../public/icons/tailwind.png'
import sequelizeIcon from '../public/icons/sequelize.png'
import posgresqlIcon from '../public/icons/posgresql.png'
import htmlIcon from '../public/icons/html.png'
import cssIcon from '../public/icons/css.png'
import mongoIcon from '../public/icons/mongo.png'
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
              <Image  src={githubIcon} alt="profile" width={140} height={140} className=' flex flex-nowrap mx-auto mb-12' />
            </a>
          </div>
        </div>
        <div className="h-full w-6/12 border-r-4 border-black">
          <div className="h-2/4 border-b-4 border-black">
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100 justify-between">
              <h1 className='text-4xl ml-10 font-semibold'>Miguel Viloria</h1>
              <Image  src={profile} alt="profile" width={140} height={140} className=' flex flex-nowrap me-8' />
            </div>
            <div className="h-3/4 border-black hover:bg-black hover:text-slate-100">
              <h2 className='text-5xl ml-10 pt-5 font-semibold'>Desarrollador web</h2>
              <p className='text-xl mx-10 font-sans pt-2 first-line:pl-indent'>
                Me gusta entender como se guarda, estructura y maneja la información y me gusta proponer diseños estéticos innovadores para mostrarla.
                <br/>Creo en los beneficios del aprendizaje continuo y en la necesidad de usar las herramientas tecnológias para mejorar nuestras vidas.
              </p>
              <p className='text-xl mx-10 font-sans pt-2 text-white'>También soy editor de video y me gusta pintar.</p>
            </div>
          </div>
          <div className="h-2/4 border-black">
            <Link href={'/webs'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 font-semibold'>Portafolio Web</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/blog'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 font-semibold'>Blog</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/videos'}>
              <div className="h-1/4 border-b-4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 font-semibold'>Producción y edición de video</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
            <Link href={'/paints'}>
              <div className="h-1/4 border-black flex items-center justify-between hover:bg-black hover:text-slate-100">
                <h2 className='text-xl ml-10 font-semibold'>Pinturas</h2>
                <h2 className='text-3xl text-white mr-16 font-semibold'>{arrow}</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-full w-5/12">
          <div className="h-1/8 border-b-4 border-black flex items-center bg-black text-slate-100 hover:bg-white hover:text-slate-900">
            <p className='text-2xl ml-10 font-semibold ' id='mail'>miguel.viloria.247@gmail.com</p>
            <button onClick={() => copyToClipboard('miguel.viloria.247@gmail.com')} className='ml-16'>
              <Image  src={copyIcon} alt="javascript" width={40} height={40} className='text-center' />
              <p className='font-extrabold text-black'>{copied ? 'Copied!' : 'Copy'}</p>
            </button>
          </div>
          <div className=" h-7/8 border-black bg-gradient-to-br from-slate-200 via-gray-200 to-stone-200">
            <div className='ml-10 mr-10'>
              <h2 className='text-5xl  text-center pt-8 font-light opacity-70'>Stack tecnológico</h2>
              <div className='grid grid-cols-4 mx-aut pt-10 '>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={jsIcon} alt="javascript" width={70} height={70} className='text-center' />
                  <p className='mt-2 font-bold text-xl '>JavaScript</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={tsIcon} alt="typescript" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>TypeScript</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                <Image  src={reactIcon} alt="react" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>React JS</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                <Image  src={nodeIcon} alt="nodejs" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>Node JS</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={nextIcon} alt="nextjs" width={70} height={70}/>
                  <p className='mt-2 font-bold text-xl'>Next JS</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={tailwindIcon} alt="tailwind" width={70} height={70}/>
                  <p className='mt-2 font-bold text-xl'>Tailwind</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={htmlIcon} alt="html" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>HTML</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={cssIcon} alt="css" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>CSS</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={expressIcon} alt="express" width={70} height={70}  />
                  <p className='mt-2 font-bold text-xl'>Express</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={sequelizeIcon} alt="signature" width={70} height={70} />
                  <p className='mt-2 font-bold text-xl'>Sequelize</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={posgresqlIcon} alt="postgresql" width={70} height={70} />
                  <p className='mt-1 font-bold text-xl'>PostgreSQL</p>
                </div>
                <div className='p-3 grid justify-items-center opacity-40 hover:opacity-100'>
                  <Image  src={mongoIcon} alt="mongoDB" width={70} height={70}/>
                  <p className='mt-2 font-bold text-xl'>Mongo DB</p>
                </div>
                
              </div>
              
              
            </div>
          </div>
        </div>
        
      </div>      
    </main>
  )
}
