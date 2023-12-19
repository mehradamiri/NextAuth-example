"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    // Add your validation logic here
    return (
      formData.name.trim() !== "" &&
      formData.username.trim() !== "" &&
      formData.password.trim() !== ""
    );
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/auth/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        type="text"
        className="input"
      />
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
      <button type="submit" className="button">
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationPage;
