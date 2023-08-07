import React from 'react'
import WebProyectComponent from '../../components/WebProyectComponent'
import webData from '../../data/webs.json'
import Link from 'next/link'
import Image from 'next/image'
import jsIcon from '../../public/icons/javascript.png'
import tsIcon from '../../public/icons/typescript.png'
import reactIcon from '../../public/icons/react.png'
import nodeIcon from '../../public/icons/node.png'
import nextIcon from '../../public/icons/next.png'
import expressIcon from '../../public/icons/express.png'
import tailwindIcon from '../../public/icons/tailwind.png'
import sequelizeIcon from '../../public/icons/sequelize.png'
import posgresqlIcon from '../../public/icons/posgresql.png'
import htmlIcon from '../../public/icons/html.png'
import cssIcon from '../../public/icons/css.png'
import mongoIcon from '../../public/icons/mongo.png'

function Webs() {

  const arrow = '<=';

  return (
    <div className='flex min-h-screen flex-col items-center p-4 bg-gray-800 text-white h-full font-mono'>
        <h1 className='text-2xl py-16'>Proyectos de desarrollo</h1>
        <div className=''>
              <h2 className='text-2xl  text-center pt-8 font-light opacity-70'>Stack tecnológico</h2>
              <div className='grid grid-cols-6 mx-aut pt-10 text-base'>
                <div className='p-3 grid justify-items-center '>
                  <Image  src={jsIcon} alt="javascript" width={50} height={50} className='text-center' />
                  <p className='mt-2 font-bold '>JavaScript</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={tsIcon} alt="typescript" width={50} height={50} />
                  <p className='mt-2 font-bold'>TypeScript</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                <Image  src={reactIcon} alt="react" width={50} height={50} />
                  <p className='mt-2 font-bold'>React JS</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                <Image  src={nodeIcon} alt="nodejs" width={50} height={50} />
                  <p className='mt-2 font-bold'>Node JS</p>
                </div>
                <div className='p-3 grid justify-items-center '>
                  <Image  src={nextIcon} alt="nextjs" width={50} height={50}/>
                  <p className='mt-2 font-bold'>Next JS</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={tailwindIcon} alt="tailwind" width={50} height={50}/>
                  <p className='mt-2 font-bold '>Tailwind</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={htmlIcon} alt="html" width={50} height={50} />
                  <p className='mt-2 font-bold'>HTML</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={cssIcon} alt="css" width={50} height={50} />
                  <p className='mt-2 font-bold'>CSS</p>
                </div>
                <div className='p-3 grid justify-items-center '>
                  <Image  src={expressIcon} alt="express" width={50} height={50}  />
                  <p className='mt-2 font-bold'>Express</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={sequelizeIcon} alt="signature" width={50} height={50} />
                  <p className='mt-2 font-bold'>Sequelize</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={posgresqlIcon} alt="postgresql" width={50} height={50} />
                  <p className='mt-1 font-bold'>PostgreSQL</p>
                </div>
                <div className='p-3 grid justify-items-center'>
                  <Image  src={mongoIcon} alt="mongoDB" width={50} height={50}/>
                  <p className='mt-2 font-bold '>Mongo DB</p>
                </div>
              </div>
            </div>
      <div className='container'>
        {webData.map((web )=> (
          <WebProyectComponent key={web.id} web={web}/>
        ))}
      </div>
      <Link href={'/'}>
        <p className='text-3xl py-16 hover:text-sky-500'>
          {arrow}
        </p>
      </Link>
    </div>
  )
}

export default Webs
