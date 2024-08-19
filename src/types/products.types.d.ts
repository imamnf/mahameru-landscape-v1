import type { DState } from '@/types/index.types';

/**
 *  Get Products
 */

// Data
interface ProductsData {
  id: number;
  photo: string;
  name: string;
  slug: string;
  price: number;
  desc: string;
  detail: string;
  bloom: string;
}

// State
interface ProductsState extends DState<ProductsData[]> {}
