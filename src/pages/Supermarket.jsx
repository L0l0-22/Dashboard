import React from 'react'
import MainSlider from '../components/MainSlider'
import AllCategories from '../components/AllCategories'
import sm1 from '../assets/sup1.avif';
import sm2 from '../assets/sup2.avif';
import sm3 from '../assets/sup3.avif';
import sm4 from '../assets/sup4.avif';
import sm5 from '../assets/sup5.avif';
import { GiCarrot, GiFruitBowl, GiCheeseWedge, GiSlicedBread, GiMeat, GiShrimp, GiChipsBag, GiWaterBottle, GiFrozenOrb, GiOpenedFoodCan, GiSaltShaker } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import BestSeller from '../components/BestSeller';
import tomato from "../assets/tomato.png";
import banana from "../assets/banana.png";
import milk from "../assets/milk.png";
import bread from "../assets/bread.png";
import chicken from "../assets/chicken.png";
import Coupons from '../components/Coupons';
import Brands from '../components/Brands';
import lipton from '../assets/lipton.png';
import elafia from '../assets/elafia.png';
import juhayna from '../assets/juhayna.png';
import almarai from '../assets/almarai.png';
import domty from '../assets/domty.png';
import panda from '../assets/panda.png';
import faragello from '../assets/faragello.png';
import halwani from '../assets/halwani.png';
import harvest from '../assets/harvest.png';
import crystal from '../assets/crystal.png';
import elmaleka from '../assets/elmaleka.png';
import corona from '../assets/corona.png';
import obourland from '../assets/obourland.png';
import lactel from '../assets/lactel.png';
import teama from '../assets/teama.png';
import beyti from '../assets/beyti.png';
export default function Supermarket() {
const { i18n } = useTranslation();
const { t } = useTranslation();
const dir = i18n.dir(); 
const supermarketSlides = [
    { src: sm1, alt: 'Fresh Vegetables' },
    { src: sm2, alt: 'Fruits and Juices' },
    { src: sm3, alt: 'Dairy and Cheese' }, 
    { src: sm4, alt: 'Snacks and Biscuits' },  
    { src: sm5, alt: 'Snacks and Biscuits' },                  
];
const brands = [
  { key: 'lipton', img: lipton },
  { key: 'elafia', img: elafia },
  { key: 'juhayna', img: juhayna },
  { key: 'almarai', img: almarai },
  { key: 'domty', img: domty },
  { key: 'panda', img: panda },
  { key: 'faragello', img: faragello },
  { key: 'halwani', img: halwani },
  { key: 'harvest', img: harvest },
  { key: 'crystal', img: crystal },
  { key: 'elmaleka', img: elmaleka },
  { key: 'corona', img: corona },
  { key: 'obourland', img: obourland },
  { key: 'lactel', img: lactel },
  { key: 'teama', img: teama },
  { key: 'beyti', img: beyti },
];
const supermarketCats = [
  { id: 1,  labelKey: 'vegetables',   icon: <GiCarrot size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 2,  labelKey: 'fruits',       icon: <GiFruitBowl size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 3,  labelKey: 'dairy',        icon: <GiCheeseWedge size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 4,  labelKey: 'bakery',       icon: <GiSlicedBread size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 5,  labelKey: 'meat',         icon: <GiMeat size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 6,  labelKey: 'seafood',      icon: <GiShrimp size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 7,  labelKey: 'snacks',       icon: <GiChipsBag size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 8,  labelKey: 'beverages',    icon: <GiWaterBottle size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 10, labelKey: 'frozenFoods',  icon: <GiFrozenOrb size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 11, labelKey: 'cannedGoods',  icon: <GiOpenedFoodCan size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
  { id: 9,  labelKey: 'spices',       icon: <GiSaltShaker size={50} className="text-main transition-transform duration-300 hover:scale-110" /> },
];
const products = [
  {
    id: 1,
    name: t('explore.products.tomato'),
    price: 20, // EGP per kg
    reviews: '1.2K Review',
    available: '60/100',
    image: tomato,
    rating: 5,
  },
  {
    id: 2,
    name: t('explore.products.banana'),
    price: 25,
    reviews: '850 Review',
    available: '45/100',
    image: banana,
    rating: 4,
  },
  {
    id: 3,
    name: t('explore.products.milk'),
    price: 15,
    reviews: '2.3K Review',
    available: '90/100',
    image: milk,
    rating: 5,
  },
  {
    id: 4,
    name: t('explore.products.bread'),
    price: 10,
    reviews: '1.8K Review',
    available: '70/100',
    image: bread,
    rating: 4,
  },
  {
    id: 5,
    name: t('explore.products.chicken'),
    price: 120,
    reviews: '1.1K Review',
    available: '40/100',
    image: chicken,
    tag: t('explore.tags.sale'),
    rating: 5,
  },
];
  return (
    <div>
        <MainSlider slides={supermarketSlides} autoplayDelay={5000} dir={dir}/>
        <div className="w-full bg-gray-100">
            <AllCategories items={supermarketCats} 
            cardClassName="flex items-center justify-center mb-3 bg-white rounded-full shadow-lg shadow-orange-200 border border-orange-200 w-28 h-28"
            imgClassName = 'object-contain w-20 h-20 transition-transform duration-300 hover:scale-110'
            />
        </div>
        <BestSeller products={products}
          titleLeft="explore.title2"
          titleRight="explore.highlight2"/>
        <Coupons/>
        <Brands items={brands} titleLeft="electronicsbrands.titlePart1" titleRight="electronicsbrands.titlePart2"/>
    </div>
  )
}
