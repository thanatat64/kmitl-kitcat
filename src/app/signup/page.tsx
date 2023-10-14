 import Link from "next/link"
import "@/components/pages/auth/AuthForm.css"
import SignUpForm from "@/components/pages/auth/signup/SignUpForm"

export default function Page() {
    return (
        <section className="backgnd">
                <div className="layoutOfBacktoSignIn">
                    <Link href={"/signin"}>
                        <button type="button" className="myBtn btn btn-light rounded-pill border border-dark">ย้อนกลับ</button>
                    </Link>
                </div>
                <SignUpForm/>
        </section>
    )
}