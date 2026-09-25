import { blogData, blogsText, getBlogPostBySlug } from '../../data/blogData'
import { appPath } from '../../lib/paths'

export function BlogsPage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${blogsText.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const cards = blogData
    .map(
      (post) => `
        <a href="${appPath(`/blogs/${post.slug}`)}" class="group rounded-2xl border border-indigo-300/30 bg-stone-900/70 p-5 transition hover:-translate-y-0.5 hover:border-indigo-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70">
          <div class="flex items-center justify-between gap-3">
            <span class="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">${post.publishedOn}</span>
          </div>
          <h3 class="mt-3 text-lg font-bold text-indigo-100">${post.title}</h3>
          <p class="mt-2 text-sm text-stone-300">${post.excerpt}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${post.tags.map((tag) => `<span class="rounded bg-indigo-300/15 px-2 py-1 text-xs text-indigo-100">${tag}</span>`).join('')}
          </div>
        </a>
      `,
    )
    .join('')

  return `
    <section class="rise-in mt-10 rounded-2xl border border-indigo-400/30 bg-stone-900/80 p-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-indigo-100">${blogsText.title}</h2>
        <div class="flex flex-wrap gap-2">
          <a href="${appPath('/rss.xml')}" target="_blank" rel="noopener noreferrer" class="inline-flex rounded-lg border border-indigo-300/40 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-300/10">RSS</a>
          <a href="${appPath('/')}" class="inline-flex rounded-lg border border-indigo-300/40 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-300/10">${blogsText.backHomeLabel}</a>
        </div>
      </div>
      <p class="mt-3 typewriter-text text-stone-300" style="${summaryTypewriterStyle}">${blogsText.summary}</p>
      <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">${cards}</div>
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
        <a href="${appPath('/blogs')}" class="mt-6 inline-flex rounded-lg border border-rose-300/40 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:bg-rose-300/10">Back to blogs</a>
      </section>
    `
  }

  const paragraphs = post.content
    .map((paragraph) => `<p class="mt-4 leading-relaxed text-stone-200">${paragraph}</p>`)
    .join('')

  return `
    <article class="rise-in mt-10 rounded-2xl border border-indigo-400/30 bg-stone-900/80 p-6">
      <a href="${appPath('/blogs')}" class="inline-flex rounded-lg border border-indigo-300/40 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-300/10">Back to blogs</a>
      <h2 class="mt-6 text-3xl font-black text-indigo-100">${post.title}</h2>
      <p class="mt-2 text-sm text-stone-400">${post.publishedOn}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        ${post.tags.map((tag) => `<span class="rounded bg-indigo-300/15 px-2 py-1 text-xs text-indigo-100">${tag}</span>`).join('')}
      </div>
      ${paragraphs}
    </article>
  `
}
