import { blogData, blogsText, getBlogPostBySlug } from '../../data/blogData'

export function BlogsPage(): string {
  const cards = blogData
    .map(
      (post) => `
        <a href="#/blogs/${post.slug}" class="group rounded-2xl border border-violet-300/30 bg-stone-900/70 p-5 transition hover:-translate-y-0.5 hover:border-violet-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/70">
          <div class="flex items-center justify-between gap-3">
            <span class="text-xs font-semibold uppercase tracking-[0.14em] text-violet-200">${post.publishedOn}</span>
            <span class="text-xs text-stone-400">${post.readTime}</span>
          </div>
          <h3 class="mt-3 text-lg font-bold text-violet-100">${post.title}</h3>
          <p class="mt-2 text-sm text-stone-300">${post.excerpt}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${post.tags.map((tag) => `<span class="rounded bg-violet-300/15 px-2 py-1 text-xs text-violet-100">${tag}</span>`).join('')}
          </div>
        </a>
      `,
    )
    .join('')

  return `
    <section class="rise-in mt-10 rounded-2xl border border-violet-400/30 bg-stone-900/80 p-6">
      <h2 class="text-2xl font-bold text-violet-100">${blogsText.title}</h2>
      <p class="mt-3 text-stone-300">${blogsText.summary}</p>
      <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">${cards}</div>
      <a href="#/" class="mt-6 inline-flex rounded-lg border border-violet-300/40 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-300/10">${blogsText.backHomeLabel}</a>
    </section>
  `
}

export function BlogPostPage(slug: string): string {
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return `
      <section class="rise-in mt-10 rounded-2xl border border-rose-400/30 bg-stone-900/80 p-6">
        <h2 class="text-2xl font-bold text-rose-100">Post not found</h2>
        <p class="mt-3 text-stone-300">That blog entry does not exist or was moved.</p>
        <a href="#/blogs" class="mt-6 inline-flex rounded-lg border border-rose-300/40 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:bg-rose-300/10">Back to blogs</a>
      </section>
    `
  }

  const paragraphs = post.content
    .map((paragraph) => `<p class="mt-4 leading-relaxed text-stone-200">${paragraph}</p>`)
    .join('')

  return `
    <article class="rise-in mt-10 rounded-2xl border border-violet-400/30 bg-stone-900/80 p-6">
      <a href="#/blogs" class="inline-flex rounded-lg border border-violet-300/40 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-300/10">Back to blogs</a>
      <h2 class="mt-6 text-3xl font-black text-violet-100">${post.title}</h2>
      <p class="mt-2 text-sm text-stone-400">${post.publishedOn} • ${post.readTime}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        ${post.tags.map((tag) => `<span class="rounded bg-violet-300/15 px-2 py-1 text-xs text-violet-100">${tag}</span>`).join('')}
      </div>
      ${paragraphs}
    </article>
  `
}
