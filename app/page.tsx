import Image from 'next/image'
import signature from '../public/whitesignature.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-black h-screen">
      <div className="w-full bg-white h-full flex font-mono">
        <div className="h-full w-1/12 border-r-4 border-black">
          <div className="h-2/4 border-b-4 border-black bg-gradient-to-br from-black to-indigo-500" >
            
          </div>
          <div className="h-2/4 border-black">
            
          </div>
        </div>
        <div className="h-full w-6/12 border-r-4 border-black">
          <div className="h-2/4 border-b-4 border-black">
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100">
              <h1 className='text-4xl ml-10 font-semibold'>Miguel Viloria</h1>
              <Image  src={signature} alt="signature" width={100} height={100} className='ml-24' />
            </div>
            <div className="h-3/4 border-black hover:bg-black hover:text-slate-100">
              <h2 className='text-5xl ml-10 py-8 ml-4 '>Desarrollador web</h2>
              <p className='text-white'>holi</p>
            </div>
          </div>
          <div className="h-2/4 border-black">
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100">
              <h2 className='text-xl ml-10 font-semibold'>Desarrollo FullStack</h2>
            </div>
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100">
              <h2 className='text-xl ml-10 font-semibold'>Blog</h2>
            </div>
            <div className="h-1/4 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100">
              <h2 className='text-xl ml-10 font-semibold'>Edición y producción de video</h2>
            </div>
            <div className="h-1/4 border-black flex items-center hover:bg-black hover:text-slate-100">
              <h2 className='text-xl ml-10 font-semibold'>Pintura</h2>
            </div>
          </div>
        </div>
        <div className="h-full w-5/12">
          <div className="h-1/8 border-b-4 border-black flex items-center hover:bg-black hover:text-slate-100">
            <p className='text-xl ml-10 font-semibold'>miguel.viloria.247@gmail.com</p>
          </div>
          <div className=" h-7/8 border-black bg-gradient-to-br from-sky-500 to-black">
            
          </div>
        </div>
        
      </div>      
    </main>
  )
}




/**
 * <Image  src="/fondo.png" alt="Background" width={700} height='100' className='object-cover' />
 *  <Image  src="/fondoCruzDiez.png" alt="Background" width={700} height='100' className='object-cover h-1/2' />
 * 
 * 
 * <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <h1>Holi</h1>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
 * 
 */



      /**
       * 
       * 
       * 
       * <div className="flex">
          <div className=" h-32 p-4 border-2 border-black w-2/3">
            <h1 className='text-6xl my-4 ml-4'>Miguel Viloria</h1>
          </div>
          <div className=" h-32 p-4 border-2 border-black w-1/3">
            <p className='text-xl my-8 font-semibold ml-4 text-center'>miguel.viloria.247@gmail.com</p>
          </div>
        </div>
        <div className="flex h-1/4">
          <div className='w-2/3'>
            <div className=" h-96 border-2 border-black">
              <h2 className='text-5xl my-8  ml-4 '>Desarrollador web y editor de video</h2>
            </div>
            <div className=" h-32 p-2 border-2 border-black">
              <h2 className='text-xl my-9  ml-4 '>Desarrollo FullStack</h2>
            </div>
            <div className=" h-32 p-2 border-2 border-black ">
              <h2 className='text-xl my-8  ml-4 '>Edición y producción de video</h2>
            </div>
            <div className=" h-32 p-2 border-2 border-black">
              <h2 className='text-xl my-8  ml-4 '>Pintura</h2>
            </div>
          </div>
          <div className='w-1/3 h-full'>
            
          </div>
        </div>
       * 
       */