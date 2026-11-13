
import React, { useState } from "react";

function LoginPage() {
    const [role, setRole] = useState("user");
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="login-page">

            <div className="login-container">

                <h2>Welcome to StayHub</h2>
                <p>Find Your Stay, Feel at Home.</p>

                <div className="login-role-buttons">
                    <button
                        type="button"
                        className={role === "user" ? "active" : ""}
                        onClick={() => {
                            setRole("user");
                            setIsSignup(false);
                        }}
                    >
                        User
                    </button>

                    <button
                        type="button"
                        className={role === "admin" ? "active" : ""}
                        onClick={() => {
                            setRole("admin");
                            setIsSignup(false);
                        }}
                    >
                        Admin
                    </button>
                </div>

                <h3>
                    {isSignup
                        ? "Create User Account"
                        : role === "user"
                        ? "User Login"
                        : "Admin Login"}
                </h3>

                <form onSubmit={(e) => e.preventDefault()}>

                    {isSignup && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <button type="submit">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>

                </form>

                {role === "user" && (
                    <p className="signup-text">
                        {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"}

                        <button
                            type="button"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? "Login" : "Sign Up"}
                        </button>
                    </p>
                )}

            </div>

        </div>
    );
}

export default LoginPage;
