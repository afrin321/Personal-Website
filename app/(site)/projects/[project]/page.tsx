import { getProject } from '@/sanity/sanity-utils';
import React from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image';

type Props = {
    params: { project: string };
    
}

async function Project({ params }: Props) {
    const slug = params.project;

    const project = await getProject(slug);
  return (
    
    <div>
      <header className='flex items-center justify-between'>

        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold rounded-lg'>{project.name}</h1>
        <a className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition' href={project.url} target='_blank' title='View Project' >View Project</a>

      </header>

      <div className='text-lg text-gray-700 mt-5 '>
        <PortableText value={project.content}  />
      </div>

      <Image 
        src={project.image} 
        alt={project.name} 
        width={1920} 
        height={1080} 
        className='mt-10 border border-gray-700 object-cover rounded-xl '
      />
    </div>
  )
}

export default Project