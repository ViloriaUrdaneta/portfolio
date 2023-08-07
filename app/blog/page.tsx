import React from 'react'
import ArticleComponent from '../../components/ArticleComponent'
import articleData from '../../data/articles.json'
import Link from 'next/link'

function Articles() {

  const arrow = '<=';

  return (
    <div className='flex min-h-screen flex-col items-center p-4 bg-gray-200  h-full font-mono'>
      <h1 className='text-2xl py-10'>Bienvenido a mi Blog</h1>
      <div className='container  max-w-4xl'>
        {articleData.map((article )=> (
          <ArticleComponent key={article.id} article={article}/>
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

export default Articles
