export function NotFoundPage(): string {
  return `
    <section class="rise-in mt-10 rounded-2xl border border-violet-300/35 bg-gradient-to-br from-stone-900/90 via-stone-900/85 to-slate-900/80 p-6 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.45)] sm:p-8">
      <p class="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
        Error 404
      </p>
      <h2 class="mt-4 text-3xl font-black tracking-tight text-violet-100 sm:text-4xl">Page not found</h2>
      <p class="mt-3 max-w-2xl text-stone-300">
        The page you requested does not exist or may have moved. Try returning home and navigating from there.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="#/" class="inline-flex rounded-xl border border-violet-300/45 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/15 hover:text-cyan-100">Back home</a>
      </div>
    </section>
  `
}
