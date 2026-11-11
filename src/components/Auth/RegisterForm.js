import React, { useState } from 'react'

export default function RegisterForm() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
if(!validateForm()){
    return;
}
        console.log("Registration successful");
    }

   function validateForm() {
  const newErrors = {};

  // Full name validation
  if (!fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  // Email validation
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Please enter a valid email";
  }

  // Password validation
  if (!password) {
    newErrors.password = "Password is required";
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  }

  // Confirm password validation
  if (!confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password";
  } else if (password !== confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
}
    return (
        <div className='w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-slate-100'>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#312E81]">
                    ProjectFlow
                </h2>
                <h1 className="text-2xl font-bold mt-6 text-slate-900">
                    Create Account
                </h1>

                <p className="text-sm text-slate-500 mt-2">
                    Registration description
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Full Name
                    </label>

                    <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your Full Name"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>
                {errors.fullName && (
  <p className="mt-1 text-xs text-red-500">
    {errors.fullName}
  </p>
)}
                <div>
                    <label className='text-sm font-medium mb-2'>Email</label>
                    <input
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className='w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                    />
                </div>
                  {errors.email && (
  <p className="mt-1 text-xs text-red-500">
    {errors.email}
  </p>
)}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>
                  {errors.password && (
  <p className="mt-1 text-xs text-red-500">
    {errors.password}
  </p>
)}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        confirmPassword
                    </label>

                    <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter your Confirm Password"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>
  {errors.confirmPassword && (
  <p className="mt-1 text-xs text-red-500">
    {errors.confirmPassword}
  </p>
)}
                <button
                    type="submit"
                    className="w-full bg-[#312E81] hover:bg-[#4338CA] text-white py-3 rounded-lg font-semibold transition mt-3"
                >
                    Create Account
                </button>
            </form>
        </div>
    )
}
