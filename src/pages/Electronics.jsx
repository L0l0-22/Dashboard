import React from 'react'
import MainSlider from '../components/MainSlider'
import AllCategories from '../components/AllCategories'
import elec1 from '../assets/elec1.avif';
import elec2 from '../assets/elec2.avif';
import elec3 from '../assets/elec3.avif';
import elec4 from '../assets/elec4.avif';
import printer from '../assets/electronics/printer.png';
import network from '../assets/electronics/network.png';
import tablet from '../assets/electronics/tablet.png';
import camera from '../assets/electronics/camera.png';
import mobile from '../assets/electronics/mobile.png';
import laptop from '../assets/electronics/laptop.png';
import gaming from '../assets/electronics/gaming.png';
import tv from '../assets/electronics/tv.png';
import headphones from '../assets/electronics/headphones.png';
import smartwatch from '../assets/electronics/smartwatch.png';
import powerbank from '../assets/electronics/powebank.png';
import ExploreAccessories from '../components/ExploreAccessories';
import Brands from '../components/Brands';
import apple from '../assets/apple.png';
import xiaomi from '../assets/xiaomi.png';
import amazfit from '../assets/Amazfit.png';
import oneplus from '../assets/One Plus.png';
import samsung from '../assets/samsung.png';
import sony from '../assets/sony.png';
import lg from '../assets/lg.png';
import hp from '../assets/hp.png';
import dell from '../assets/dell.png';
import lenovo from '../assets/lenovo.png';
import huawei from '../assets/huawei.png';
import canon from '../assets/canon.png';
import philips from '../assets/philips.png';
import microsoft from '../assets/microsoft.png';
import asus from '../assets/asus.png';
import panasonic from '../assets/panasonic.png';
import watch from "../assets/watch.png";
import iphone from "../assets/iphone.png";
import playstation from "../assets/playstation.png";
import banner from "../assets/banner.jpg";
import { useTranslation } from 'react-i18next';
import Explore from '../components/Explore';
import Offers from '../components/Offers';
import tablets from "../assets/tablet1.png"

export default function Electronics() {
const { t } = useTranslation();
const electronicsSlides = [
  { src: elec1, alt: 'Electronics 1' },
  { src: elec2, alt: 'Electronics 2' },
  { src: elec3, alt: 'Electronics 3'}, 
  { src: elec4, alt: 'Electronics 4' },          
];
const electronicsCats = [
  { id: 1,  labelKey: 'printers',      image: printer },
  { id: 2,  labelKey: 'network',       image: network },
  { id: 3,  labelKey: 'tablets',       image: tablet},
  { id: 4,  labelKey: 'cameras',       image: camera},
  { id: 5,  labelKey: 'mobiles',       image: mobile},
  { id: 6,  labelKey: 'laptops',       image: laptop },
  { id: 7,  labelKey: 'gaming',        image: gaming},
  { id: 8,  labelKey: 'tvs',           image: tv},
  { id: 9,  labelKey: 'headphones',    image: headphones},
  { id: 10, labelKey: 'smartwatches',  image: smartwatch},
  { id: 11, labelKey: 'powerbanks',    image: powerbank},
];
const electronicsBrands = [
  { name: "Apple", img: apple },
  { name: "Xiaomi", img: xiaomi },
  { name: "Amazfit", img: amazfit },
  { name: "One Plus", img: oneplus },
  { name: "Samsung", img: samsung },
  { name: "Sony", img: sony },
  { name: "LG", img: lg },
  { name: "HP", img: hp },
  { name: "Dell", img: dell },
  { name: "Lenovo", img: lenovo },
  { name: "Huawei", img: huawei },
  { name: "Canon", img: canon },
  { name: "Philips", img: philips },
  { name: "Microsoft", img: microsoft },  
  { name: "Asus", img: asus },            
  { name: "Panasonic", img: panasonic }  
];
const categories = [
  t('explore.categories.all'),
  t('explore.categories.mobiles'),
  t('explore.categories.laptops'),
  t('explore.categories.gaming'),
  t('explore.categories.accessories'),
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
    category: t('explore.categories.mobiles'),
    rating: 5,
  },
  {
    id: 2,
    name: t('explore.products.samsungLaptop'),
    price: 899,
    reviews: '800 Review',
    available: '55/100',
    image: laptop,
    category: t('explore.categories.laptops'),
    rating: 4,
  },
  {
    id: 3,
    name: t('explore.products.ps5'),
    price: 599,
    reviews: '2.1K Review',
    available: '25/100',
    image: playstation,
    category: t('explore.categories.gaming'),
    rating: 5,
  },
  {
    id: 4,
    name: t('explore.products.watch'),
    price: 399,
    reviews: '3.4K Review',
    available: '70/100',
    image: watch,
    isNew: true,
    category: t('explore.categories.accessories'),
    rating: 5,
  },
  {
    id: 5,
    name: t('explore.products.headphones'),
    price: 199,
    reviews: '900 Review',
    available: '80/100',
    image: headphones,
    category: t('explore.categories.accessories'),
    tag: t('explore.tags.sale'),
    rating: 5,
  },
];
  return (
    <div className=''>
        <MainSlider slides={electronicsSlides} autoplayDelay={4500} />
        <div className="w-full mb-20 bg-gray-100">
            <AllCategories items={electronicsCats} 
            cardClassName="flex items-center justify-center mb-3 bg-white rounded-full shadow-lg shadow-blue-200 border border-blue-200 w-28 h-28"
            imgClassName = 'object-contain w-20 h-20 transition-transform duration-300 hover:scale-110'
            />
        </div>
        <ExploreAccessories/>
        <Offers
          discount={t("offers.discount")}
          subtext={t("offers.subtextSelected")}
          items={[
            { id: 1, title: t("offers.items.huaweiMatepad11"), image: tablets, oldPrice: "$999", price: "$799", badge: t("offers.badges.sale") },
            { id: 2, title: t("offers.items.appleWatchSeries9"), image: watch,   oldPrice: "$299", price: "$199", badge: t("offers.badges.sale") },
            { id: 3, title: t("offers.items.iphone15ProMax"),   image: iphone,  oldPrice: "$1299", price: "$999", badge: t("offers.badges.sale") }
          ]}
        />
        <div className=''>
          <img src={banner} className='w-full'/>
        </div>
        <Explore
          products={products}
          categories={categories}
          titleLeft="explore.title"
          titleRight="explore.highlight"
        />
        <Brands items={electronicsBrands} titleLeft="electronicsbrands.titlePart1" titleRight="electronicsbrands.titlePart2"/>
    </div>
  )
}
