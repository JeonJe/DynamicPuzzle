import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import BagicHome from '@/components/PageElements/BagicHome'
import Rocket from '@/components/Game/rocket'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jigsaw Puzzle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <div className="container-2xl" >
          <main className="bg-black flex flex-col justify-center items-center h-screen ">
            <div className="flex flex-col justify-center basis-2/5 bg-amber-200 rounded-3xl">
              {/* <BagicHome /> */}

            </div>
          </main>

        </div>
      </div>
    </>
  )
}
