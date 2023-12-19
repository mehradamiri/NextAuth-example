"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

interface FormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    return formData.username.trim() !== "" && formData.password.trim() !== "";
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("Username and password are required");
      return;
    }

    setLoading(true);
    try {
      const result = await signIn("credentials", {
        username: formData.username,
        password: formData.password,
        redirect: true,
      });

      if (!result?.ok) {
        alert("Username or password is incorrect");
      }
    } catch (error) {
      alert("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        type="text"
        className="input"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        className="input"
      />
      <button className="button" type="submit">
        {loading ? "Loading..." : "Login"}
      </button>
      <Link className="ml-5 hover:underline text-blue-500" href="/register">
        register
      </Link>
    </form>
  );
};

export default LoginPage;
