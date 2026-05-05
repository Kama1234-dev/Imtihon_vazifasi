import { useParams, Link } from 'react-router-dom'
import { animeList } from '../data/anime'

export default function AnimePage() {
  const { id } = useParams()
  const anime = animeList.find((item) => item.id === id)

  if (!anime) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">Аниме не найдено</h1>
        <p className="mt-4 text-slate-300">Вернитесь на главную страницу и выберите другое аниме.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          На главную
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/40">
              <div className="aspect-video bg-slate-950">
                <iframe
                  src={anime.videoEmbed}
                  title={anime.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-semibold text-white">{anime.title}</h1>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-emerald-400">
                  {anime.genre} • {anime.year}
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{anime.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">Рейтинг: {anime.rating}</span>
                  <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">Формат: Видео</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/40">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-400">Описание</p>
              <p className="mt-4 text-slate-300 leading-7">
                На этой странице доступен трейлер и краткое описание. После регистрации на странице администратора твой аккаунт сохранится в localStorage, даже если закрыть локалку.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-5">
              <h2 className="text-xl font-semibold text-white">Что здесь есть</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Трейлеры аниме</li>
                <li>• Страница выбора и просмотра</li>
                <li>• Авторизация администратора</li>
                <li>• Сохранение данных в localStorage</li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Вернуться к каталогу
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
