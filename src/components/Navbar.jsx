import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.auth)

  return (
    <header className="bg-slate-950 text-slate-100 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <NavLink to="/" className="text-xl font-bold text-emerald-300">
            AnimeTV
          </NavLink>
          <p className="text-sm text-slate-400">Платформа для просмотра аниме</p>
        </div>

        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-white' : 'text-slate-300 hover:text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-white' : 'text-slate-300 hover:text-white'
            }
          >
            Admin
          </NavLink>
          {isLoggedIn && (
            <button
              onClick={() => dispatch(logout())}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
      {isLoggedIn && user && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 sm:px-6 lg:px-8">
          Привет, <span className="font-semibold text-white">{user.name}</span> — твой аккаунт сохранён в localStorage.
        </div>
      )}
    </header>
  )
}
