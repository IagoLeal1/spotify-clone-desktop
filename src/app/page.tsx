import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Siderbar'
import { ChevronLeft, ChevronRight, Home as HomeIcon, Laptop2, LayoutList, Library, Maximize2, Mic2, Play, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from 'next/image'

interface AlbumProps {
  id: string
  image: string
  titulo: string
  descricao: string
}
export default function Home({id,image,titulo,descricao}: AlbumProps) {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Sidebar />

      <main className="flex-1 p-6">
       <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight />
        </button>
       </div>

       <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

       <div className="grid grid-cols-3 gap-4 mt-4">
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
            <Image src="/album.jpg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Wasting Light</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
            <Image src="/coldplay.jpg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Music Of The Spheres</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
          <Image src="/heroes.jpeg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Heroes and Villains</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
          <Image src="/matue.jpeg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Máquina do Tempo</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
          <Image src="/starboy.jpg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Starboy</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
        <a href='#' className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"> 
          <Image src="/nirvana.jpg" width={104} height={104} alt="album da banda foo fighters"/>
          <strong>Nevermind</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play />
          </button>
        </a>
       </div>

       <h2 className='font-semibold text-2xl mt-10'>Made for Iago Mattps</h2>

       <div className='grid grid-cols-8 gap-4 mt-4'>
        <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/viralhits.jpeg" className='w-full' width={120} height={120} alt="album da banda foo fighters"/>
          <strong className='font-semibold'>Viral Hits</strong>
          <span className='text-sm text-zinc-400'>The Weeknd, Joji, Taylor Swift and more</span>
        </a>
        <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/funkhits.jpeg" className='w-full' width={120} height={120} alt="album da banda foo fighters"/>
          <strong className='font-semibold'>Funk Hits</strong>
          <span className='text-sm text-zinc-400'>L7NNON, MC Ryan SP, Mc Paiva and more</span>
        </a>
        <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/poprising.jpeg" className='w-full' width={120} height={120} alt="album da banda foo fighters"/>
          <strong className='font-semibold'>Pop Rising</strong>
          <span className='text-sm text-zinc-400'>Post Malone, The Weeknd, Taylor Swift and more</span>
        </a>
        <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/TTH.jpeg" className='w-full' width={120} height={120} alt="album da banda foo fighters"/>
          <strong className='font-semibold'>Today Top Hits</strong>
          <span className='text-sm text-zinc-400'>Post Malone, SZA, Miley Cirus and more</span>
        </a>
        <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/creme.jpeg" className='w-full' width={120} height={120} alt="album da banda foo fighters"/>
          <strong className='font-semibold'>Creme</strong>
          <span className='text-sm text-zinc-400'>L7NNON, Pineapple StormTv and more</span>
        </a>
       </div>
      </main>
    </div>
      <Footer />
  </div> 
  )
}
   