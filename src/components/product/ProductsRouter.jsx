import React from 'react';
import './ProductRouter.css'
import ThreeVLines from "../icons/ThreeVLines";


function ProductsRouter(props) {
    return (
        <section className='product-route'>
            <div className="gender-block">
                <div className="route selected" id="male">Males</div>
                <div className="route" id="female">Females</div>
            </div>
            <div className="catalog-block">
                <div className="route" id="catalog"><ThreeVLines/> Clothing catalog</div>
                <div className="route" id="catelog-new"><ThreeVLines/> New collections</div>
                <div className="route" id="catalog-discount"><ThreeVLines/> Discounted products</div>
                <div className="route" id="company">Company</div>
            </div>
        </section>
    );
}

export default ProductsRouter;