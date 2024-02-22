import { describe, test, vi, expect } from "vitest";
import axios from 'axios'
import { ProductService } from ".";
import { ProductModel } from '../../models/ProductModel';

vi.mock('axios')

describe('Test ProductService', () => {
  describe('.fetchListOfProducts', () => {
    describe('Edge cases', () => {
      test('If fetching the list of product fails it should raise an error to the calling function', () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed!')

        // 2. ACTION + ASSERT
        expect(ProductService.fetchListOfProducts()).rejects.toBe('Network request failed!')
        expect(axios.get).toBeCalledTimes(1)
        expect(axios.get).toBeCalledWith('https://fakestoreapi.com/products')
      })
    })

    describe('Happy cases', () => {
      test('Should return an array of ProductModel if network request is successful', async () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({
          data: [
            { title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
            { title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
          ]
        })

        // 2. ACTION
        const products = await ProductService.fetchListOfProducts()

        // 3. ASSERT
        expect(products).toHaveLength(2)
        expect(products[0]).toEqual({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        expect(products[1]).toEqual({ title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        
        products.forEach((product) => {
          expect(product).toBeInstanceOf(ProductModel)
        })
      })
    })
  })
})
