import type { NextPage } from 'next'
import Head from 'next/head'
import Timer from '../components/Timer'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 w-screen h-screen bg-violet-500'>
      <Head>
        <title>Shoebill Timer</title>
      </Head>
      <Timer/>
      <Sidebar/>
    </div>
  )
}

export default Home
