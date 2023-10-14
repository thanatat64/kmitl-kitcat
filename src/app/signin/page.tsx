import Link from "next/link" 
import "@/components/pages/auth/AuthForm.css"
import SignInForm from "@/components/pages/auth/signin/SignInForm" 

export default function Page() {
    return (
        <section className="backgnd">
                <div className="layoutOfBacktohome">
                    <Link href={"/"}>
                        <button type="button" className="myBtn btn btn-light rounded-pill border border-dark">กลับสู่หน้าหลัก</button>
                    </Link>
                </div>
                <SignInForm/>
        </section>
    )
}