import { contactPageText } from '../../data/contactData'
import { serviceOfferingsData } from '../../data/serviceOfferingsData'
import { appPath } from '../../lib/paths'

export function ContactPage(): string {
  const summaryTypewriterStyle = `--typewriter-ch: ${contactPageText.summary.length}; --typewriter-delay: 0.2s; --typewriter-duration: 2s;`

  const serviceOptions = [
    `<option value="">${contactPageText.servicePlaceholder}</option>`,
    ...serviceOfferingsData.offerings.map(
      (offering) => `<option value="${offering.title}">${offering.title}</option>`,
    ),
  ].join('')

  return `
    <section class="rise-in mt-10 rounded-2xl border border-rose-400/30 bg-stone-900/80 p-6">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold text-rose-100">${contactPageText.title}</h2>
        <a href="${appPath('/')}" class="inline-flex rounded-lg border border-rose-300/40 px-4 py-2 text-sm font-semibold text-rose-100 transition hover:bg-rose-300/10">${contactPageText.backHomeLabel}</a>
      </div>
      <p class="mt-3 typewriter-text text-stone-300" style="${summaryTypewriterStyle}">${contactPageText.summary}</p>
      <div class="mt-5 h-px w-full bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"></div>

      <form data-contact-form class="contact-form mt-6 grid gap-4" novalidate>
        <label class="grid gap-1.5 text-sm text-stone-200">
          <span>${contactPageText.nameLabel}</span>
          <input name="name" type="text" autocomplete="name" required class="contact-input" />
        </label>

        <label class="grid gap-1.5 text-sm text-stone-200">
          <span>${contactPageText.emailLabel}</span>
          <input name="email" type="email" autocomplete="email" required class="contact-input" />
        </label>

        <label class="grid gap-1.5 text-sm text-stone-200">
          <span>${contactPageText.serviceLabel}</span>
          <select name="service" class="contact-input">${serviceOptions}</select>
        </label>

        <label class="grid gap-1.5 text-sm text-stone-200">
          <span>${contactPageText.messageLabel}</span>
          <textarea name="message" rows="5" required class="contact-input resize-y"></textarea>
        </label>

        <button type="submit" class="inline-flex w-fit rounded-xl border border-rose-200/50 bg-rose-300/15 px-4 py-2 text-sm font-semibold text-rose-50 transition hover:bg-rose-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/80 disabled:cursor-not-allowed disabled:opacity-60">
          ${contactPageText.submitLabel}
        </button>
        <p data-contact-status class="contact-status text-sm" role="status" aria-live="polite"></p>
      </form>
    </section>
  `
}
