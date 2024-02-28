export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  kaspiLink: string;
}

export const products = [
  {
    id: 1,
    name: 'Rare Beauty Liquide Blush Hope',
    price: 21750,
    description: 'Discover the allure of Rare Beauty blush collection. Crafted for effortless elegance, our velvety formula glides onto your skin, imparting a luminous glow.',
    image: '/assets/1.webp',
    rating: 4.5,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-liquide-blush-hope',
  }, 
  {
    id: 2,
    name: 'Charlotte Tilbury Pillow Talk Peach Pop Matte Beauty Blush Wand 12 ml.',
    price: 24000,
    description: 'Experience the luminous radiance of Charlotte Tilbury Pillow Talk Peach Pop Matte Beauty Blush Wand, a versatile 12 ml blush for a naturally flushed finish.',
    image: '/assets/2.jpg',
    rating: 4.5,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-liquide-blush-hope',
  },
  {
    id: 3,
    name: 'Glossier Cloud Paint',
    price: 9500,
    description: 'Glossier iconic liquid blush has a soft, creamy texture with the perfect density for quick and easy blending. The product applies to the face with your fingers and gives beautiful color to the cheeks all day long',
    image: '/assets/3.jpg',
    rating: 4.5,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-liquide-blush-hope',
  }

];