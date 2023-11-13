"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }

        try {
            const response = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email, 
                    password
                })
            })

            if (response.ok) {
                const form = e.target;
                form.reset();
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration.", error);
        } 
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setEmail(e.target.value)} 
                    type="text"
                    placeholder="Full name" />
                <input
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Email" />
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" />
                <button>Register</button>

                { 
                    error && (
                        <div>
                            { error }
                        </div>
                    ) 
                }

                <Link href={"/"}>
                    Already have an account? <span>Login</span>
                </Link>
            </form>
        </article>
    )
}