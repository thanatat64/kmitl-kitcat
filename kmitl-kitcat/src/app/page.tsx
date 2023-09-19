import Image from 'next/image';
import catGif from '../../public/cat.gif'

export default function Home() {
  return (
    <main className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Image className="mb-5 rounded-2" width={600} src={catGif} alt="Cat" />
        <h1 className="fs-2">Congratulation you now developing Kitcat Project!</h1>
        <p className="fs-4">โอ้วมายก๊อด คอนแกรทซ์!</p>
        <p>เข้าไปติ๊กชื่อตัวเองว่าเสร็จแล้วได้ <a target="_blank" href="https://trello.com/c/jVdiEm4z/7-จัดการพื้นที่-dev-ของตัวเอง">ที่นี่</a> อย่าลืมไปสอนเพื่อนที่ติดปัญหาด้วยนะฮ้าบ</p>
      </div>
    </main>
  )
}
