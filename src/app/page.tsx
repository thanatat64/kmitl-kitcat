import Link from 'next/link'

export default function Home() {
  return (
    <main className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="fs-2">Congratulation you now developing Kitcat Project!</h1>
        <p className="fs-4">โอ้วมายก๊อด คอนแกรทซ์!</p>
        <Link href="Sign Up">Go to Sign Up</Link>
      </div>
    </main>
  )
}
