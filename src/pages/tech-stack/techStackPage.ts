import { techStackData } from '../../data/techStackData'

export function TechStackPage(): string {
	const categoryBlocks = techStackData.categories
		.map(
			(category, categoryIndex) => `
				<article class="rise-in rounded-2xl border border-amber-300/25 bg-stone-900/70 p-5" style="animation-delay: ${160 + categoryIndex * 120}ms">
					<h3 class="text-lg font-bold text-amber-100">${category.title}</h3>
					<p class="mt-2 text-sm text-stone-300">${category.description}</p>
					<div class="mt-4 grid gap-3 sm:grid-cols-2">
						${category.items
							.map(
								(item) => `
									<div class="rounded-xl border border-stone-700/80 bg-stone-950/80 p-4">
										<div class="flex items-center gap-3">
											<svg viewBox="0 0 32 32" class="h-8 w-8 ${item.iconAccentClass}" aria-hidden="true" role="presentation" fill="currentColor">
												<path d="${item.iconPath}"></path>
											</svg>
											<p class="font-semibold text-stone-100">${item.name}</p>
										</div>
										<p class="mt-2 text-sm text-stone-300">${item.summary}</p>
									</div>
								`,
							)
							.join('')}
					</div>
				</article>
			`,
		)
		.join('')

  return `
		<section class="mt-10 rounded-3xl border border-amber-300/30 bg-stone-900/80 p-6 sm:p-8">
			<div class="rise-in flex items-start justify-between gap-4">
				<div>
					<h2 class="text-3xl font-black text-amber-100">${techStackData.title}</h2>
					<p class="mt-3 max-w-2xl text-stone-300">${techStackData.summary}</p>
				</div>
				<svg viewBox="0 0 32 32" class="h-10 w-10 text-amber-300" aria-hidden="true" role="presentation" fill="currentColor">
					<path d="M16 4l11 5v8c0 7-5 10-11 11-6-1-11-4-11-11V9l11-5zm0 4l-7 3v6c0 4 2 6 7 8 5-2 7-4 7-8v-6l-7-3z"></path>
				</svg>
			</div>

			<div class="mt-6 grid gap-4">${categoryBlocks}</div>

			<a href="#/" class="mt-7 inline-flex rounded-lg border border-amber-300/40 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10">${techStackData.backHomeLabel}</a>
		</section>
	`
}
