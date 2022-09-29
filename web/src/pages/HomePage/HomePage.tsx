import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex justify-center h-screen items-center bg-gray-200 text-xl font-semibold">
        Stranger not allowed please...<Link className='px-2 hover:text-2xl underline text-emerald-400 rounded-md' to={routes.login()}>Login</Link> to see content
      </div>
    </>
  )
}

export default HomePage
