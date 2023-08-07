import React from 'react'
import { Article } from '../types'


type ArticleProps = {
  article: Article;
};

const ArticleComponent:React.FC<ArticleProps> = ({ article }) => {

    const paragraphs = article.body.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph}</p>
          {index !== article.body.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));

  return (
    <div className='py-16 bg-gray-200 '>
      <h2 className='text-xl font-semibold text-center'>{article.title}</h2>
      <div className='flex pt-16 text-base font-sans leading-relaxed text-justify indent-4'>
        <div >
            <div>{paragraphs}</div>
        </div>
      </div>
    </div>
  )
}

export default ArticleComponent;