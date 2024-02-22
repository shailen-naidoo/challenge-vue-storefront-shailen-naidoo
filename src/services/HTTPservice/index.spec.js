import { beforeEach, describe, expect, it, vi } from "vitest";
import axios from 'axios'
import { HTTPService } from './index'

vi.mock('axios')

beforeEach(() => {
  vi.resetAllMocks()
})

describe('Test HTTPservice', () => {
  describe('.get method', () => {
    describe('Edge cases', () => {
      it('If a network request fails it should raise an error to the function that called it', () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed')

        // 2. ACTION + ASSERT
        expect(HTTPService.get('https://fakeapi.com')).rejects.toBe('Network request failed')
        expect(axios.get).toBeCalledTimes(1)
      })
    })

    describe('Happy case', () => {
      it('If a network request is successful it should return a valid response', () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({ hello: 'world' })

        // 2. ACTION + ASSERT
        expect(HTTPService.get('https://fakeapi.com')).resolves.toEqual({ hello: 'world' })
        expect(axios.get).toBeCalledTimes(1)
      })
    })
  })
})