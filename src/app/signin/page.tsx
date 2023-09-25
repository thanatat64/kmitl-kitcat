import Link from "next/link";
import SignInForm from "@/components/auth/signin/SignInForm";

export default function Page() {
    return (
        <section>
            <Link href="/">Back to Home</Link>
            <SignInForm/>
        </section>
    )
}