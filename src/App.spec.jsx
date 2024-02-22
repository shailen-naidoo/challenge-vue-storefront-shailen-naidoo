import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('Test App.jsx', () => {
  test('Check that the root component renders correctly', async () => {
    // 1. SETUP
    const { container } = render(<App />)

    const h1 = container.querySelector('h1')

    // 2. ASSERT
    expect(h1.innerHTML).toBe('Vite + React')
  })
})