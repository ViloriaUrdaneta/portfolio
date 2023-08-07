import React from 'react'
import Image from 'next/image';
import { WebProject } from '../types'


type WebProps = {
  web: WebProject;
};

const WebProyectComponent:React.FC<WebProps> = ({ web }) => {
  return (
    <div className='bg-gray-800 py-16'>
      <h2 className='text-5xl font-semibold text-center'>{web.title}</h2>
      <div className='flex justify-between pt-16 text-lg '>
        <div >
          <p className='font-sans mr-10'>{web.description}</p>
          <p className='font-bold pt-5'>Tecnologías usadas: </p>
          <p className='pt-1'>{web.techStack}</p>
          <p className='pt-2'>
            <a href={web.webLink} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-sky-500'>
              Enlace web
            </a>
          </p>
          {web.repoLink && (
            <p className='pt-2'>
              <a href={web.repoLink} target="_blank" rel="noopener noreferrer" className='font-bold hover:text-sky-500'>
                Enlace al repositorio
              </a>
            </p>
          )}
        </div>
        <Image src={web.picture} alt={web.title} width={800} height={800} className='shadow-lg rounded-lg '/>
      </div>
    </div>
  )
}

export default WebProyectComponent;


