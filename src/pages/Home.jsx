import React from 'react';
import MainSlider from '../components/MainSlider';
import Categories from '../components/Categories';
import AllCategories from '../components/AllCategories';
import Featured from '../components/Featured';
import Explore from '../components/Explore';
import Deals from '../components/Deals';
import Coupons from '../components/Coupons';
import Brands from '../components/Brands';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif';
import slide4 from '../assets/slide4.avif';
import watch from "../assets/watch.png";
import men from "../assets/men.png";
import rings from "../assets/rings.png";
import iphone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import headphones from "../assets/headphones.png";
import playstation from "../assets/playstation.png";
import kitchen from "../assets/kitchen2.png";
import flamingo from "../assets/flamingo.png";
import speaker from "../assets/speaker.png";
import apple from '../assets/apple.png';
import rolex from '../assets/rolex.png';
import adidas from '../assets/adidas.png';
import xiaomi from '../assets/xiaomi.png';
import amazfit from '../assets/Amazfit.png';
import oneplus from '../assets/One Plus.png';
import samsung from '../assets/samsung.png';
import nike from '../assets/nike.png';
import sony from '../assets/sony.png';
import lg from '../assets/lg.png';
import hp from '../assets/hp.png';
import dell from '../assets/dell.png';
import lenovo from '../assets/lenovo.png';
import huawei from '../assets/huawei.png';
import canon from '../assets/canon.png';
import philips from '../assets/philips.png';
import { useTranslation } from 'react-i18next';
import gym from "../assets/matt.png";

export default function Home() {
const { t } = useTranslation();
const homeSlides = [
  { src: slide1, alt: 'Home 1' },
  { src: slide2, alt: 'Home 2' },
  { src: slide3, alt: 'Home 3'}, 
  { src: slide4, alt: 'Home 4' },          
];
const electronicsCats = [
  { id: 1,  labelKey: 'smart_watches', image: watch, href: '/c/smart-watches' },
  { id: 2,  labelKey: 'phones',        image: iphone, href: '/c/phones' },
  { id: 3,  labelKey: 'laptops',       image: laptop, href: '/c/laptops' },
  { id: 4,  labelKey: 'headphones',    image: headphones, href: '/c/headphones' },
  { id: 5,  labelKey: 'fashion',       image: men, href: '/c/fashion' },
  { id: 6,  labelKey: 'gaming',        image: playstation, href: '/c/gaming' },
  { id: 7,  labelKey: 'accessories',   image: rings, href: '/c/accessories' },
  { id: 8,  labelKey: 'kitchen',       image: kitchen, href: '/c/kitchen' },
  { id: 9,  labelKey: 'summer_toys',   image: flamingo, href: '/c/summer-toys' },
  { id: 10, labelKey: 'speakers',      image: speaker, href: '/c/speakers' },
];
const brands = [
  { name: 'Apple', img: apple },
  { name: 'Rolex', img: rolex },
  { name: 'Adidas', img: adidas },
  { name: 'Xiaomi', img: xiaomi },
  { name: 'Amazfit', img: amazfit },
  { name: 'One Plus', img: oneplus },
  { name: 'Samsung', img: samsung },
  { name: 'Nike', img: nike },
  { name: 'Sony', img: sony },
  { name: 'LG', img: lg },
  { name: 'HP', img: hp },
  { name: 'Dell', img: dell },
  { name: 'Lenovo', img: lenovo },
  { name: 'Huawei', img: huawei },
  { name: 'Canon', img: canon },
  { name: 'Philips', img: philips },
];
const products = [
  {
    id: 1,
    name: t('explore.products.iphone'),
    price: 1299,
    reviews: '1.4K Review',
    available: '40/100',
    image: iphone,
    isNew: true,
    category: t('explore.categories.electronics'),
    rating: 5,
  },
  {
    id: 2,
    name: t('explore.products.kitchen'),
    price: 130,
    reviews: '1.4K Review',
    available: '40/100',
    image: kitchen,
    tag: t('explore.tags.sale'),
    rating: 3,
    category: t('explore.categories.home'),
  },
  {
    id: 3,
    name: t('explore.products.ps5'),
    price: 599,
    reviews: '2.1K Review',
    available: '25/100',
    image: playstation,
    category: t('explore.categories.electronics'),
    rating: 3,
  },
  {
    id: 4,
    name: t('explore.products.watch'),
    price: 399,
    reviews: '3.4K Review',
    available: '70/100',
    image: watch,
    isNew: true,
    category: t('explore.categories.electronics'),
    rating: 5,
  },
  {
    id: 6,
    name: t('explore.products.headphones'),
    price: 199,
    reviews: '900 Review',
    available: '80/100',
    image: headphones,
    category: t('explore.categories.electronics'),
    tag: t('explore.tags.sale'),
    rating: 5,
  },
  {
    id: 7,
    name: t('explore.products.jacket'),
    price: 75,
    reviews: '2K Review',
    available: '60/100',
    image: men,
    isNew: true,
    category: t('explore.categories.fashion'),
    rating: 4,
  },
  {
    id: 8,
    name: t('explore.products.rings'),
    price: 300,
    reviews: '1.8K Review',
    available: '12/100',
    image: rings,
    isNew: true,
    category: t('explore.categories.fashion'),
    rating: 4,
  },
  {
    id: 9,
    name: t('explore.products.speaker'),
    price: 99,
    reviews: '500 Review',
    available: '95/100',
    image: speaker,
    category: t('explore.categories.electronics'),
    rating: 3,
  },
  {
    id: 10,
    name: t('explore.products.flamingo'),
    price: 45,
    reviews: '150 Review',
    available: '50/100',
    image: flamingo,
    category: t('explore.categories.home'),
    tag: t('explore.tags.sale'),
    rating: 5,
  },
  {
    id: 11,
    name: t('explore.products.gym'),
    price: 650,
    reviews: '1.1K Review',
    available: '18/100',
    image: gym,
    category: t('explore.categories.sport'),
    rating: 3,
  },
];
const categories = [
  t('explore.categories.all'),
  t('explore.categories.electronics'),
  t('explore.categories.home'),
  t('explore.categories.fashion'),
  t('explore.categories.sport'),
];
  return (
    <div className=''>
      <MainSlider slides={homeSlides} autoplayDelay={4500} />
      <div className="z-30 w-full bg-gray-100 ">
          <AllCategories items={electronicsCats}/>
      </div>
      <Deals/>
      <Featured/>
      <Coupons/>
      <Explore
        products={products}
        categories={categories}
        titleLeft="explore.title"
        titleRight="explore.highlight"
      />
      <Brands items={brands} titleLeft="brands.titlePart1" titleRight="brands.titlePart2"/>
    </div>
  );
}

