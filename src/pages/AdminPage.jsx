import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, register } from '../features/authSlice'

export default function AdminPage() {
  const dispatch = useDispatch()
  const { account, isLoggedIn, user, error } = useSelector((state) => state.auth)
  const [mode, setMode] = useState('register')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    dispatch(register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login({ email, password }))
    setPassword('')
  }

  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-950/40">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Admin</p>
              <h1 className="mt-3 text-4xl font-bold text-white">Регистрация и вход администратора</h1>
              <p className="mt-4 text-slate-400">
                Зарегистрируйся один раз, и все данные останутся в localStorage. При перезагрузке сайта пароль и имя сохраняются.
              </p>
            </div>

            {isLoggedIn ? (
              <div className="space-y-6 rounded-3xl border border-emerald-600/20 bg-slate-950/80 p-6 text-slate-200">
                <p className="text-lg font-semibold text-white">Добро пожаловать, {user.name}!</p>
                <p>Почта: {user.email}</p>
                <p>Ваш аккаунт хранится в localStorage и восстановится после перезагрузки.</p>
                <button
                  onClick={() => dispatch(logout())}
                  className="inline-flex rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 rounded-full bg-slate-950/80 p-2">
                  <button
                    onClick={() => setMode('register')}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'register' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
                  >
                    Регистрация
                  </button>
                  <button
                    onClick={() => setMode('login')}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
                  >
                    Войти
                  </button>
                </div>

                <form onSubmit={mode === 'register' ? handleRegister : handleLogin} className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
                  {mode === 'register' && (
                    <label className="block text-sm font-medium text-slate-200">
                      Имя администратора
                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                        placeholder="Ваше имя"
                      />
                    </label>
                  )}

                  <label className="block text-sm font-medium text-slate-200">
                    Email
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      required
                      className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                      placeholder="admin@example.com"
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-200">
                    Пароль
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      required
                      className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                      placeholder="Пароль"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                  >
                    {mode === 'register' ? 'Создать аккаунт' : 'Войти'}
                  </button>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  {!account && mode === 'login' && (
                    <p className="text-sm text-slate-400">Сначала зарегистрируйтесь, затем войдите.</p>
                  )}
                </form>
              </div>
            )}
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-2xl shadow-slate-950/30">
            <h2 className="text-2xl font-semibold text-white">Как работает сохранение</h2>
            <p className="mt-4 text-slate-300 leading-7">
              После регистрации ваш аккаунт сохраняется в браузере. При обновлении страницы, закрытии и запуске локального dev-сервера данные остаются в localStorage.
            </p>
            <div className="mt-6 space-y-4 rounded-3xl bg-slate-950/80 p-5 text-slate-200">
              <div>
                <p className="font-semibold text-white">Что сохраняется</p>
                <p className="text-sm text-slate-400">Имя, email и пароль администратора.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Где хранится</p>
                <p className="text-sm text-slate-400">В localStorage браузера по ключу animePlatformState.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Безопасность</p>
                <p className="text-sm text-slate-400">Данные хранятся только на вашем устройстве локально.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
