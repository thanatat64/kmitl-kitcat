import Image from 'next/image';
import catGif from '../../public/cat.gif'
import game from '../../public/gameTuatueng.jpg'

export default function Home() {
  return (
    <main className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="fs-2">Congratulation you now developing Kitcat Project!</h1>
        <p className="fs-4">โอ้วมายก๊อด คอนแกรทซ์!</p>
      </div>
    </main>
  )
}
