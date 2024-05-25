import React, { useState, FormEvent } from "react";

const SessionStorageManager = () => {
    const [token, setToken] = useState<string>("");

    const handleSubmit = () => {
        // Server endpoint down atm, simulating token
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Ensure the server knows you're sending JSON
            },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_",
            }),
        })
            .then((res) => res.json())
            .then((json) => sessionStorage.setItem("jwtToken", json.token));

        // store JWT token in session storage
    };

    const handleLogout = () => {
        // clear JWT Token from storage
        sessionStorage.clear();
        setToken("");
    };

    const getToken = () => {
        handleSubmit();
        const token = sessionStorage.getItem("jwtToken");
        setToken(token!);
    };

    return (
        <div>
            <h1>Session Storage Manager</h1>
            <button onClick={handleLogout}>Clear Token</button>
            <button onClick={getToken}>Get Token</button>
            <p>{token}</p>
        </div>
    );
};

export default SessionStorageManager;
