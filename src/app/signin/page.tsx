import Link from "next/link";
import '@/components/auth/signIn_signUpForm.css'
import SignInForm from "@/components/auth/signin/SignInForm";

export default function Page() {
    return (
        <section>
            <div className="layoutOfBacktohome">
                <Link href={"/"}>
                    <button type="button" className="myBtn btn btn-light rounded-pill border border-dark">กลับสู่หน้าหลัก</button>
                </Link>
            </div>
            <SignInForm/>
        </section>
    )
}