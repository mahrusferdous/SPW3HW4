import React, { useState } from "react";
import axios from "axios";

const SessionStorageManager = () => {
    const [token, setToken] = useState<string>("");

    const handleSubmit = async () => {
        const json = await axios.post("https://fakestoreapi.com/auth/login", {
            username: "mor_2314",
            password: "83r5^_",
        });
        sessionStorage.setItem("jwtToken", json.data.token);
        console.log(json.data.token);
    };

    const handleLogout = () => {
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
