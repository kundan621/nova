'use client';
import { useState } from 'react';
import { NextResponse } from "next/server";
import axios from 'axios';

 function ContactPage() {
  // state variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send a post request to the api endpoint
    const names = JSON.stringify({
      name,
      email,
      message, 
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: names
      })
      const data = await res.json();
      console.log(data);

      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus(error.response.data.message);
    }

  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        We would love to hear from you. Please fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white font-medium px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
        {status && <p className="text-center text-green-500">{status}</p>}
      </form>
      <div className="flex justify-center items-center mt-8 space-x-4 text-gray-700">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16M9 12l2 2 4-4"
            />
          </svg>
          <span>Email: kundan621@gmail.com</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6.5V5z"
            />
          </svg>
          <span>Phone: +91-9748211555</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M22.58 7.35C22.21 6.67 21.65 6.18 20.9 6H17.88a.62.62 0 01-.62-.62V3.1c0-.84-.9-1.1-1.56-.7L3.46 11.9c-.33.16-.46.58-.3.94l1.88 4.21c.15.36.54.46.86.24l5.52-3.1c.25-.14.63-.14.88 0l2.63 1.48c.52.3 1.1.08 1.26-.5l1.37-4.15c.08-.25.22-.48.41-.67l4.2-4.2c.38-.38.04-1.01-.62-1.01h-1.8a.62.62 0 01-.62-.63V8.1c0-.33-.14-.64-.38-.85z"
            />
          </svg>
          <span>Facebook: @kundan621</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 3h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zM4 8h16M4 12h16M4 16h16"
            />
          </svg>
          <span>Twitter: @kundan621</span>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
