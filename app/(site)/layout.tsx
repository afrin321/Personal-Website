import { getPages } from '@/sanity/sanity-utils'
import './../globals.css'
import Link from 'next/link'


export const metadata = {
  title: 'My Awesome Site!',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // updating 

  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-3xl py-10 mx-auto'>
        <header className='flex items-center justify-between'>
          <Link href='/' className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold'>Afrin</Link>
        
          <div className='flex items-center gap-5 text-sm text-gray-500'>
            {
              pages.map(page => (
                <Link className='hover:underline' key={page._id} href={`/${page.slug}`} >{page.title}</Link>
              ))
            }
          </div>
          
        </header>
        <main className='py-20'>{children}</main>        
      </body>
    </html>
  )
}
