import type { BasePageText } from './dataTypes'

export type ContactPageText = BasePageText & {
  nameLabel: string
  emailLabel: string
  serviceLabel: string
  servicePlaceholder: string
  messageLabel: string
  submitLabel: string
}

export const contactPageText: ContactPageText = {
  title: 'Contact',
  summary: 'Tell me what you are building — I will reply when I can help.',
  nameLabel: 'Name',
  emailLabel: 'Email',
  serviceLabel: 'Service interest',
  servicePlaceholder: 'General enquiry',
  messageLabel: 'Message',
  submitLabel: 'Send message',
  backHomeLabel: 'Back home',
}
