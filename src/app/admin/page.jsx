'use client';
import React, { useState } from 'react';

function page() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        window.location.href = '/admin/dashboard'; // Redirect to protected route
      } else {
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-fit h-fit px-5 py-8 rounded-sm gradientBg">
        <h2 className="text-2xl mb-10 text-center titleText">Login Form</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            className="px-3 py-2 rounded-sm outline-none subTitleText"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-3 py-2 rounded-sm outline-none subTitleText"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="submit"
            value="Login"
            className="activeBg text-black px-3 py-2 cursor-pointer rounded-sm"
          />
        </form>
      </div>
    </div>
  );
}

export default page;
