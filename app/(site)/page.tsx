import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const projects = await getProjects();

  return (
    <div >
      <h1 className='text-7xl font-extrabold '>
        
        Hello I&apos;m 
        
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'> Afrin</span>
        
        !
      </h1>

      
      <p className='mt-3 text-xl text-gray-600'>
          Aloha everyone! Checkout my projects!
      </p>
      
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>        
          My Projects      
      </h2>

      <div className='mt-5 grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
      
      {
        projects.map(project => (
        
          <Link href={`/projects/${project.slug}`} className='border-2 border-gray-500 rounded-lg p-1  hover:scale-105 hover:border-blue-500 transition' key={project._id}>
          
            {
              project.image && 
              <Image     
                alt={project.name}
                src={project.image}
                className='object-cover rounded-lg border ' 
                height={750} width={300} 
              />
            }
          
          
            <div 
              className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'
            >
              {project.name}
            </div>
          
        </Link>))
      }
      </div>

    </div>
  )
}
