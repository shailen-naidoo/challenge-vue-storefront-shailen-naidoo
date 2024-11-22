import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, act } from '@testing-library/react'
import App from './Index'
import axios from 'axios'

vi.mock('axios')

beforeEach(() => {
  vi.resetAllMocks()
})

describe('Test App.jsx', () => {
  describe('Test the listing of the products and ensure that they get displayed to the user', () => {
    describe('Edge cases', () => {
      test('If network request fails it should display an error to the user', async () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed!')
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

        await act(() => render(<App />))

        // 2. ASSERT
        expect(axios.get).toBeCalledTimes(1)
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://fakestoreapi.com/products')
        expect(alertSpy).toBeCalledTimes(1)
        expect(alertSpy).toHaveBeenNthCalledWith(1, 'Network request failed!')
      })
    })

    describe('Happy cases', () => {
      test('Check if network request was successful and called the correct API URL', async () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({
          data: [
            { title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
            { title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
          ]
        })

        await act(() => render(<App />))

        // 2. ASSERT
        expect(axios.get).toBeCalledTimes(1)
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://fakestoreapi.com/products')
      })
    })
  })
})