import { siteConfig } from '../data/siteConfig'

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]')
  const status = document.querySelector<HTMLElement>('[data-contact-status]')
  if (!form || !status) {
    return
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    status.textContent = ''
    status.dataset.state = ''

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const service = String(formData.get('service') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) {
      status.textContent = 'Please fill in name, email, and message.'
      status.dataset.state = 'error'
      return
    }

    const subject = encodeURIComponent(service ? `Enquiry: ${service}` : 'Website enquiry')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service || 'General'}\n\n${message}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    status.textContent = 'Opening your email client with the enquiry details.'
    status.dataset.state = 'info'
  })
}

export function prefillContactService(): void {
  const params = new URLSearchParams(window.location.search)
  const service = params.get('service')
  if (!service) {
    return
  }

  const field = document.querySelector<HTMLSelectElement>('[data-contact-form] [name="service"]')
  if (!(field instanceof HTMLSelectElement)) {
    return
  }

  const hasOption = Array.from(field.options).some((option) => option.value === service)
  if (!hasOption) {
    const option = document.createElement('option')
    option.value = service
    option.textContent = service
    field.appendChild(option)
  }

  field.value = service
}
