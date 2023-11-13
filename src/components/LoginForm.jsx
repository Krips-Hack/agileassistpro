"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("User exist");

    console.log(name)
    
    return (
        <article>
            <form>
                <input
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Email" />
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="password" 
                    placeholder="Password" />
                <button>Login</button>

                { 
                    error && (
                        <div>
                            { error }
                        </div>
                    ) 
                }

                <Link href={"/register"}>
                    Don't have an account? <span>Register</span>
                </Link>
            </form>
        </article>
    )
}