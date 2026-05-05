import { Link } from 'react-router-dom'
import { animeList } from '../data/anime'

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-slate-900/40">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Аниме платформа</p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Смотреть аниме онлайн как на ITV, но только аниме.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Выбирай любой сериал, открывай страницу просмотра и наслаждайся трейлерами любимых шоу. Всё работает на React, Tailwind CSS и Redux с сохранением аккаунта в localStorage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/admin"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Зарегистрироваться
                </Link>
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  Смотреть каталог
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Каталог</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Смотреть сейчас</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Нажми на карточку, чтобы перейти на страницу просмотра и оценить трейлер выбранного аниме.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {animeList.map((anime) => (
            <article key={anime.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/40">
              <img src={anime.image} alt={anime.title} className="h-64 w-full object-cover" />
              <div className="px-6 py-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{anime.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{anime.genre} • {anime.year}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">
                    {anime.rating}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{anime.description}</p>
                <Link
                  to={`/anime/${anime.id}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Смотреть сейчас
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
