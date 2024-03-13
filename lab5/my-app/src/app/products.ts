export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  kaspiLink: string;
  category: string;
  likes:number; 
}

export const products = [
  {
    id: 1,
    name: 'Rare Beauty Liquide Blush Hope',
    price: 21750,
    description: 'Discover the allure of Rare Beauty blush collection. Crafted for effortless elegance, our velvety formula glides onto your skin, imparting a luminous glow.',
    image: '/assets/1.webp',
    rating: 3.6,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-liquide-blush-hope',
    category: "Blush", 
    likes: 10
  }, 
  {
    id: 2,
    name: 'Charlotte Tilbury Pillow Talk Peach Pop Matte Beauty Blush Wand 12 ml.',
    price: 24000,
    description: 'Experience the luminous radiance of Charlotte Tilbury Pillow Talk Peach Pop Matte Beauty Blush Wand, a versatile 12 ml blush for a naturally flushed finish.',
    image: '/assets/2.jpg',
    rating: 5,
    kaspiLink: 'https://www.glama.kz/product/glossier-cloud-paint',
    category: "Blush", 
    likes: 11 
  },
  {
    id: 3,
    name: 'Glossier Cloud Paint Blush',
    price: 9500,
    description: 'Glossier iconic liquid blush has a soft, creamy texture with the perfect density for quick and easy blending. The product applies to the face with your fingers and gives beautiful color to the cheeks all day long',
    image: '/assets/3.jpg',
    rating: 5,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-liquide-blush-hope',
    category: "Blush", 
    likes: 2
  }, 
  { 
    id: 4,
    name: 'Kiko Milano Mood Boost Luminous Foundation 02, 27 ml',
    price: 10000,
    description: 'Liquid base with medium coverage. Natural radiant coverage with a pleasant olive fragrance.',
    image: '/assets/4.jpeg',
    rating: 5,
    kaspiLink: 'https://www.glama.kz/product/kiko-milano-mood-boost-luminous-foundation-02-27-ml',
    category: "Foundation", 
    likes: 12
  },
  {
    id: 5,
    name: 'Dr.Althea Double Serum Balm Foundation 21 NO REFIL',
    price: 9500,
    description: 'When applied, it provides even coverage, a healthy glow and a semi-matte finish.',
    image: '/assets/5.jpg',
    rating: 4.8,
    kaspiLink: 'https://www.glama.kz/product/dralthea-double-serum-balm-foundation-21-no-refil',
    category: "Foundation", 
    likes: 6
  },
  {
    id: 6,
    name: 'FENTY BEAUTY Lip Gloss luminizer Glass Slipper ',
    price: 17000,
    description: 'Transparent gloss can be applied over lipstick or pencil, or used on its own.',
    image: '/assets/6.webp',
    rating: 4.9,
    kaspiLink: 'https://www.glama.kz/product/fenty-beauty-lip-luminizer-glass-slipper',
    category:"Gloss", 
    likes: 5
  }, 
  {
    id: 7,
    name: 'Laura Mercier Caviar Stick Eye Color Rose Gold',
    price: 6000,
    description: 'Caviar Stick Eye Color lays down easily on the eyelids. This eye shadow resists creasing, transfer and smudging for long-lasting and even color payoff in a variety of shades and finishes.',
    image: '/assets/7.webp',
    rating: 4.7,
    kaspiLink: 'https://www.glama.kz/product/laura-mercier-caviar-stick-eye-color-rose-gold',
    category: "Eye Palette",
    likes: 9
  }, 
  {
    id: 8,
    name: 'The Balm Betty Lou Manizer',
    price: 7900,
    description: 'The Betty-Lou Manizer Compact Highlighter by THE BALM is a multi-functional product that can be used as a bronzer, shimmer or shadow. It has a soft texture with reflective particles.',
    image: '/assets/8.jpeg',
    rating: 3.5,
    kaspiLink: 'https://www.glama.kz/product/the-balm-betty-lou-manizer',
    category: "Highlighter", 
    likes: 10
  }, 
  { 
    id: 9,
    name: 'Charlotte Tilbury Luxury Eye Palette The Bella Sofia',
    price: 33000,
    description: 'The Luxury Palette - The Bella Sofia (The Dolce Vita) by the insanely popular Charlotte Tilbury will give you an alluring, enchanting and irresistible look!',
    image: '/assets/9.jpeg',
    rating: 5,
    kaspiLink: 'https://www.glama.kz/product/charlotte-tilbury-luxury-palette-the-bella-sofia',
    category: "Eye palette", 
    likes: 2
  }, 
  {
    id: 10,
    name: 'Glossier Cloud Paint Blush',
    price: 20850,
    description: 'Revolutionary, water-resistant blushes with a creamy texture combine pigments with a non-greasy blend of weightless oils and spherical powders for a natural-looking blush that can\'t be messed up.',
    image: '/assets/10.jpeg',
    rating: 5,
    kaspiLink: 'https://www.glama.kz/product/rare-beauty-melting-blush-nearly-berry',
    category: "Blush", 
    likes: 3
  }

];
// export const categories: Сategory[] = [
//   {
//     name: 'Blush',
//     products: products.filter(product => product.category==="Blush")
//   },
//   {
//     name: 'Foundation',
//     products: products.filter(product => product.category==="Foundation")
//   }, 
//   { 
//     name: 'Eye make-up', 
//     products: products.filter(product => product.category==="Eye palette")
//   }, 
//   { 
//     name: 'Highlighter', 
//     products: products.filter(product => product.category==="Highlighter")
//   }, 
//   { 
//     name: 'Gloss',
//     products: products.filter(product => product.category==="Gloss")
//   }
// ];