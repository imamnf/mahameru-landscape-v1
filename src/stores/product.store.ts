/* eslint-disable unused-imports/no-unused-vars */
import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import type { ProductsData, ProductsState } from '@/types/products.types';

export const useProductStore = defineStore('product', () => {
  /**
   *  Get Products
   */

  // State
  const productsState = reactive<ProductsState>({
    data: [],
    loading: false,
    error: false,
    show: false,
    success: false
  });

  // Method
  const getProducts = async () => {
    productsState.data = [];
    productsState.error = false;
    productsState.loading = true;
    productsState.show = false;
    productsState.success = false;

    try {
      const { data }: PostgrestSingleResponse<ProductsData[]> = await supabase
        .from('products')
        .select();

      if (data !== null && data.length > 0) {
        productsState.data = data;
        productsState.success = true;
      }
    } catch (error) {
      productsState.error = true;
    } finally {
      productsState.show = true;
      productsState.loading = false;
    }
  };

  return {
    productsState,
    getProducts
  };
});
