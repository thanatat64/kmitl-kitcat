import Link from "next/link";
import SignInForm from "@/components/auth/signin/SignInForm";

export default function Page() {
    return (
        <section>
            <Link href="/">Back to Home</Link>
            <h1>Sign In</h1>
            <SignInForm/>
            <p>Not a user? <Link href="/signup">Sign Up</Link> here</p>
        </section>
    )
}