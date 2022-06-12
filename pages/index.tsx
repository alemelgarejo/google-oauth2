import type { NextPage } from 'next'
import { google } from 'googleapis';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div className='text-red-500'>
      <button onClick={() => router.push('/pepe')}>hola</button>
    </div>
  )
}

export default Home
