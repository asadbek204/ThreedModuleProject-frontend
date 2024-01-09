import React from 'react';
import './Main.css'
import Service from "./cards/services/Service";
import CircleCatalog from "./cards/catalogCircle/CircleCatalog";
import Catalog from "./cards/catalogs/Catalog";
import Product from "./cards/product/Product";
import zoodMall from '../assets/img/zoodmall.png'
import box from '../assets/img/box.png'
import money from '../assets/img/money.png'
import delivery from '../assets/img/truck.png'
import price from '../assets/img/price.png'
import circleImg from '../assets/img/catalog-imgs/card-1.webp'
import image from '../assets/img/catalog-imgs/square-card-1.webp'
import productPhoto from '../assets/img/catalog-imgs/product.jpg'

function Main(props) {
    return (
        <main>
            <section className='futures-catalogs'>
                <div className="futures">
                    <Service img={zoodMall} title={'Покупка товаров в рассрочку и без комиссии'}/>
                    <Service img={box} title={'Легкий возврат товаров'}/>
                    <Service img={money} title={'Бесплатная доставка от 400 000 сум'}/>
                    <Service img={delivery} title={'Доставка по всему Узбекистану'}/>
                    <Service img={price} title={'Доступные цены'}/>
                </div>
                <div className="circle-catalogs">
                    <CircleCatalog image={circleImg} title={"qwertwerhtjyu"}/>
                    <CircleCatalog image={circleImg} title={"zsxrdctyjuthyrter"}/>
                    <CircleCatalog image={circleImg} title={"asdrtjrhtgrfghty"}/>
                    <CircleCatalog image={circleImg} title={"qwergthtyhtgrefwg"}/>
                    <CircleCatalog image={circleImg} title={"rsgthdfufmyhtgrbgf"}/>
                    <CircleCatalog image={circleImg} title={"jbhjfergthyhng"}/>
                </div>
            </section>
            <section className='catalogs'>
                <div className="catalog-viewport">
                    <Catalog backgroundImage={image} title={'vjbfgnghcgfgrtx'}/>
                    <Catalog backgroundImage={image} title={'cfhgvjhbkget'}/>
                    <Catalog backgroundImage={image} title={'kjkbhjvgd'}/>
                    <Catalog backgroundImage={image} title={'kjkbhjvgd'}/>
                    <Catalog backgroundImage={image} title={'kjkbhjvgd'}/>
                    <Catalog backgroundImage={image} title={'kjkbhjvgd'}/>
                    <Catalog backgroundImage={image} title={'vjbfgnghcgfgrtx'}/>
                    <Catalog backgroundImage={image} title={'vjbfgnghcgfgrtx'}/>
                </div>
            </section>
            <section className='products'>
                <div className='product-viewport'>
                    <Product product={
                    {
                        id: 1,
                        image: productPhoto,
                        name: 'Футболка короткий рукав SS22CA2N-25-1-11331',
                        like: 'true',
                        sizes: [
                            'XXL',
                            'XL',
                            'L',
                            'XLL'
                        ],
                        colors: [
                            '00000000',
                            'FFFFFFFF',
                            'FF000000',
                            '00FF0000'
                        ],
                        prev_price: 10000,
                        price: 100000
                    }}/>
                    <Product product={
                    {
                        id: 1,
                        image: productPhoto,
                        like: 'false',
                        name: 'Футболка короткий рукав SS22CA2N-25-1-11331',
                        sizes: [
                            'XXL',
                            'XL',
                            'L',
                            'XLL'
                        ],
                        colors: [
                            '00000000',
                            'FFFFFFFF',
                            'FF000000',
                            '00FF0000'
                        ],
                        prev_price: 10000,
                        price: 100000
                    }}/>
                    <Product product={
                    {
                        id: 1,
                        image: productPhoto,
                        name: 'Футболка короткий рукав SS22CA2N-25-1-11331',
                        like: 'true',
                        sizes: [
                            'XXL',
                            'XL',
                            'L',
                            'XLL'
                        ],
                        colors: [
                            '00000000',
                            'FFFFFFFF',
                            'FF000000',
                            '00FF0000'
                        ],
                        prev_price: 10000,
                        price: 100000
                    }}/>
                    <Product product={
                    {
                        id: 1,
                        image: productPhoto,
                        name: 'Футболка короткий рукав SS22CA2N-25-1-11331',
                        like: 'true',
                        sizes: [
                            'XXL',
                            'XL',
                            'L',
                            'XLL'
                        ],
                        colors: [
                            '00000000',
                            'FFFFFFFF',
                            'FF000000',
                            '00FF0000'
                        ],
                        prev_price: 10000,
                        price: 100000
                    }}/>
                </div>
            </section>
        </main>
    );
}

export default Main;