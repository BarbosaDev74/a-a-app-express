import { Product } from '@/types/product';

export const products: Product[] = [
  // Açaí
  {
    id: 'acai-tradicional',
    name: 'Açaí Tradicional',
    description: '99% puro açaí especial, cremoso e delicioso',
    price: 18.90,
    category: 'acai',
    image: '/images/acai-tradicional.jpg',
    sizes: [
      { size: '300ml', price: 18.90 },
      { size: '500ml', price: 24.90 },
      { size: '700ml', price: 32.90 },
    ],
    toppings: [
      'Granola',
      'Banana',
      'Morango',
      'Leite em Pó',
      'Paçoca',
      'Chocolate',
      'Leite Condensado',
    ],
    available: true,
  },
  {
    id: 'acai-premium',
    name: 'Açaí Premium',
    description: 'Açaí especial com frutas selecionadas e toppings nobres',
    price: 28.90,
    category: 'acai',
    image: '/images/acai-premium.jpg',
    sizes: [
      { size: '300ml', price: 28.90 },
      { size: '500ml', price: 36.90 },
      { size: '700ml', price: 45.90 },
    ],
    toppings: [
      'Granola Premium',
      'Frutas Vermelhas',
      'Kiwi',
      'Morango',
      'Banana',
      'Mel',
      'Castanhas',
      'Coco Ralado',
    ],
    available: true,
  },
  {
    id: 'acai-fitness',
    name: 'Açaí Fitness',
    description: 'Açaí puro com toppings saudáveis, sem açúcar adicionado',
    price: 26.90,
    category: 'acai',
    image: '/images/acai-fitness.jpg',
    sizes: [
      { size: '300ml', price: 26.90 },
      { size: '500ml', price: 34.90 },
      { size: '700ml', price: 42.90 },
    ],
    toppings: [
      'Granola Integral',
      'Banana',
      'Morango',
      'Chia',
      'Linhaça',
      'Aveia',
      'Mel',
      'Whey Protein',
    ],
    available: true,
  },
  
  // Sorvetes
  {
    id: 'sorvete-morango',
    name: 'Sorvete de Morango',
    description: 'Sorvete artesanal de morango',
    price: 15.90,
    category: 'sorvete',
    image: '/images/sorvete-morango.jpg',
    sizes: [
      { size: '200ml', price: 15.90 },
      { size: '400ml', price: 22.90 },
    ],
    available: true,
  },
  {
    id: 'sorvete-chocolate',
    name: 'Sorvete de Chocolate',
    description: 'Sorvete artesanal de chocolate belga',
    price: 16.90,
    category: 'sorvete',
    image: '/images/sorvete-chocolate.jpg',
    sizes: [
      { size: '200ml', price: 16.90 },
      { size: '400ml', price: 24.90 },
    ],
    available: true,
  },
  
  // Shakes
  {
    id: 'shake-morango',
    name: 'Shake de Morango',
    description: 'Shake cremoso de morango com leite',
    price: 14.90,
    category: 'shake',
    image: '/images/shake-morango.jpg',
    sizes: [
      { size: '400ml', price: 14.90 },
      { size: '600ml', price: 19.90 },
    ],
    available: true,
  },
  {
    id: 'shake-acai',
    name: 'Shake de Açaí',
    description: 'Shake de açaí com banana e leite',
    price: 16.90,
    category: 'shake',
    image: '/images/shake-acai.jpg',
    sizes: [
      { size: '400ml', price: 16.90 },
      { size: '600ml', price: 21.90 },
    ],
    available: true,
  },
  
  // Vitaminas
  {
    id: 'vitamina-abacate',
    name: 'Vitamina de Abacate',
    description: 'Vitamina cremosa de abacate com leite',
    price: 12.90,
    category: 'vitamina',
    image: '/images/vitamina-abacate.jpg',
    sizes: [
      { size: '400ml', price: 12.90 },
      { size: '600ml', price: 17.90 },
    ],
    available: true,
  },
  {
    id: 'vitamina-banana',
    name: 'Vitamina de Banana',
    description: 'Vitamina energética de banana com aveia',
    price: 11.90,
    category: 'vitamina',
    image: '/images/vitamina-banana.jpg',
    sizes: [
      { size: '400ml', price: 11.90 },
      { size: '600ml', price: 16.90 },
    ],
    available: true,
  },
];

export const toppingsExtras = [
  { name: 'Granola', price: 2.00 },
  { name: 'Banana', price: 1.50 },
  { name: 'Morango', price: 2.50 },
  { name: 'Leite em Pó', price: 1.00 },
  { name: 'Paçoca', price: 2.00 },
  { name: 'Chocolate', price: 2.50 },
  { name: 'Leite Condensado', price: 1.50 },
  { name: 'Mel', price: 1.50 },
  { name: 'Castanhas', price: 3.00 },
  { name: 'Frutas Vermelhas', price: 4.00 },
  { name: 'Kiwi', price: 3.00 },
  { name: 'Whey Protein', price: 5.00 },
];
