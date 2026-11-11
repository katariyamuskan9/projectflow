"use client"
import RegisterForm from '@/components/Auth/RegisterForm'


export default function page() {
  
  
  return (
<main className='min-h-screen flex justify-center items-center bg-background p-4'>

  <div className='w-full max-w-4xl min-h-[500px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-xl bg-white shadow-xl'>
    <section className="lg:flex flex-col justify-center bg-gradient-to-br from-[#312E81] to-[#4F46E5] p-8 text-white">
      <div>
         <h1 className="text-3xl font-bold leading-tight">
          Manage Projects,
          <br />
          Tasks & Teams
          <br />
          in One Place
        </h1>

        <p className="mt-4 text-sm text-indigo-100">
          Plan, track, and collaborate with your team
          to deliver projects faster.
        </p>
         <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
          alt="Workspace with laptop"
          className="mt-6 w-full h-44 rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
     {/* Right Section */}
       <section className="flex items-center justify-center p-6 sm:p-8">
         <div className="w-full max-w-sm">
           <RegisterForm />
         </div>
       </section>
  </div>
</main>
  )
}
