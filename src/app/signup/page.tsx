import Link from 'next/link'
import SignUpForm from '@/components/auth/signup/SignUpForm'
import '@/components/auth/signIn_signUpForm.css'


export default function Page() {
    return (
        <section>
            <div>
                <div className="layoutOfBacktohome">
                    <Link href={"/signin"}>
                        <button type="button" className="myBtn btn btn-light rounded-pill border border-dark">ย้อนกลับ</button>
                    </Link>
                </div>
                <SignUpForm/>
            </div>
        </section>
    )
}