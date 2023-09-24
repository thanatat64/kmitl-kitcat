import Link from 'next/link'
import SignUpForm from '@/components/auth/signup/SignUpForm'

export default function Page() {
    return (
        <div>
            <Link href="/">Back to Home</Link>
            <h1>SignUp Form</h1>
            <SignUpForm/>
        </div>
    )
}