import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ContactProvider } from './ContactDialog'
import TabAssistant from './TabAssistant'

vi.mock('@/server/leads.functions', () => ({
  saveLead: vi.fn().mockResolvedValue({ ok: true }),
}))

function renderAssistant() {
  return render(
    <ContactProvider>
      <TabAssistant />
      <section id="founder">Founder</section>
    </ContactProvider>,
  )
}

function openAssistant() {
  fireEvent.click(screen.getByRole('button', { name: 'Open TAB assistant' }))
}

function send(message) {
  const input = screen.getByLabelText('Message TAB')
  fireEvent.change(input, { target: { value: message } })
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }))
}

describe('TAB assistant', () => {
  beforeEach(() => {
    window.speechSynthesis = {
      cancel: vi.fn(),
      speak: vi.fn(),
    }
    window.SpeechSynthesisUtterance = class {
      constructor(text) {
        this.text = text
      }
    }
    globalThis.SpeechSynthesisUtterance = window.SpeechSynthesisUtterance
  })

  it('smooth-scrolls to a requested section', () => {
    renderAssistant()
    openAssistant()
    send('go to founder')

    expect(window.location.hash).toBe('#founder')
    expect(document.getElementById('founder').scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })
  })

  it('starts browser speech synthesis', () => {
    renderAssistant()
    openAssistant()
    fireEvent.click(screen.getByRole('button', { name: 'Listen' }))

    expect(window.speechSynthesis.cancel).toHaveBeenCalledOnce()
    expect(window.speechSynthesis.speak).toHaveBeenCalledOnce()
    expect(window.speechSynthesis.speak.mock.calls[0][0].text).toContain('execution-recovery layer')
  })

  it('transfers conversational lead capture into the shared contact form', () => {
    renderAssistant()
    openAssistant()
    fireEvent.click(screen.getByRole('button', { name: 'Design partnership' }))
    send('Ada Lovelace')
    send('Analytical Engines')
    send('ada@example.com')
    send('Agent-to-human review handoffs keep stalling.')

    expect(screen.getByTestId('contact-form')).toBeTruthy()
    expect(screen.getByRole('textbox', { name: 'Name' }).value).toBe('Ada Lovelace')
    expect(screen.getByRole('textbox', { name: 'Company' }).value).toBe('Analytical Engines')
    expect(screen.getByRole('textbox', { name: 'Email' }).value).toBe('ada@example.com')
    expect(screen.getByRole('textbox', { name: 'Workflow challenge' }).value).toContain('review handoffs')
  })
})
