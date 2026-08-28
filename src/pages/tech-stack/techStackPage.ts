import { techStackData } from '../../data/techStackData'

export function TechStackPage(): string {
	const sortedCategories = techStackData.categories.map((category) => ({
		...category,
		items: [...category.items].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })),
	}))
	const totalTools = sortedCategories.reduce((count, category) => count + category.items.length, 0)
	const summaryTypewriterStyle = `--typewriter-ch: ${techStackData.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

	const tabButtons = sortedCategories
		.map(
			(category, categoryIndex) => `
				<button
					type="button"
					data-tech-tab
					data-tech-index="${categoryIndex}"
					aria-selected="${categoryIndex === 0 ? 'true' : 'false'}"
					class="tech-tab rounded-2xl border px-4 py-2 text-sm font-semibold transition"
				>
					${category.title}
				</button>
			`,
		)
		.join('')

	const categoryPanels = sortedCategories
		.map(
			(category, categoryIndex) => `
				<div data-tech-panel data-tech-index="${categoryIndex}" class="${categoryIndex === 0 ? 'block tech-panel-enter' : 'hidden'}">
					<div class="mb-5 flex flex-wrap items-start justify-between gap-3 rounded-2xl border border-violet-300/25 bg-gradient-to-r from-violet-500/10 via-sky-500/5 to-emerald-500/10 p-4">
						<div>
							<h3 class="text-xl font-black tracking-tight text-violet-100">${category.title}</h3>
							<p class="mt-1 text-sm text-stone-300">${category.description}</p>
						</div>
						<span class="rounded-full border border-sky-200/30 bg-sky-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100">
							${category.items.length} tools
						</span>
					</div>

					<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
						${category.items
							.map(
								(item, itemIndex) => `
									<article class="tech-item-card group/card relative overflow-hidden rounded-2xl border border-stone-700/70 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 p-4 transition duration-300 hover:-translate-y-1 hover:border-rose-300/55" style="--card-index: ${itemIndex};">
										<div class="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-300/10 blur-xl transition group-hover/card:bg-violet-300/20"></div>
										<div class="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"></div>
										<div class="flex items-center gap-3">
											<svg viewBox="0 0 32 32" class="h-8 w-8 ${item.iconAccentClass}" aria-hidden="true" role="presentation" fill="currentColor">
												<path d="${item.iconPath}"></path>
											</svg>
											<p class="font-semibold text-stone-100">${item.name}</p>
										</div>
										<p class="mt-2 text-sm leading-relaxed text-stone-300">${item.summary}</p>
									</article>
								`,
							)
							.join('')}
					</div>
				</div>
			`,
		)
		.join('')

	return `
		<section data-tech-stack-root class="mt-10 w-full self-center rounded-3xl border border-violet-300/35 bg-gradient-to-b from-stone-900/90 via-stone-900/80 to-stone-950/85 p-6 shadow-[0_25px_80px_-35px_rgba(139,92,246,0.6)] sm:p-8 lg:p-10">
			<div class="rise-in flex flex-wrap items-start justify-between gap-6">
				<div class="max-w-3xl">
					<p class="mb-3 inline-flex rounded-full border border-rose-200/30 bg-rose-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-100">
						Tooling Overview
					</p>
					<h2 class="text-3xl font-black text-violet-100 sm:text-4xl">${techStackData.title}</h2>
					<p class="mt-3 typewriter-text text-stone-300 sm:text-lg" style="${summaryTypewriterStyle}">${techStackData.summary}</p>
				</div>
				<div class="rise-in flex flex-col items-stretch gap-3" style="animation-delay: 120ms">
					<a href="#/" class="inline-flex self-end rounded-xl border border-violet-300/40 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-300/10">${techStackData.backHomeLabel}</a>
					<div class="grid min-w-[280px] grid-cols-2 gap-3">
						<div class="rounded-xl border border-emerald-200/25 bg-emerald-200/10 px-4 py-3">
							<p class="text-xs uppercase tracking-[0.14em] text-emerald-100/80">Categories</p>
							<p class="text-2xl font-black text-emerald-50">${sortedCategories.length}</p>
						</div>
						<div class="rounded-xl border border-sky-300/30 bg-sky-300/10 px-4 py-3">
							<p class="text-xs uppercase tracking-[0.14em] text-sky-100/80">Technologies</p>
							<p class="text-2xl font-black text-sky-50">${totalTools}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-violet-300/20 bg-stone-950/50 p-3 sm:p-4">
				<p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Browse Categories</p>
				<div class="tech-tabs-scroll flex gap-2 overflow-x-auto pb-1">${tabButtons}</div>
			</div>

			<div class="mt-6 rounded-2xl border border-stone-700/60 bg-stone-950/35 p-4 sm:p-5">${categoryPanels}</div>
		</section>
	`
}

export function initTechStackTabs(): void {
	const root = document.querySelector<HTMLElement>('[data-tech-stack-root]')
	if (!root) {
		return
	}

	const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tech-tab]'))
	const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-tech-panel]'))

	if (tabs.length === 0 || panels.length === 0) {
		return
	}

	const setActiveTab = (activeIndex: number): void => {
		tabs.forEach((tab, index) => {
			const selected = index === activeIndex
			tab.setAttribute('aria-selected', selected ? 'true' : 'false')
			tab.classList.toggle('tech-tab-active', selected)
		})

		panels.forEach((panel, index) => {
			const selected = index === activeIndex
			panel.classList.toggle('hidden', !selected)
			if (selected) {
				panel.classList.remove('tech-panel-enter')
				void panel.offsetWidth
				panel.classList.add('tech-panel-enter')
			}
		})
	}

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => setActiveTab(index))
	})

	setActiveTab(0)
}
