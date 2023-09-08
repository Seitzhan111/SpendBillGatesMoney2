import React from 'react';
import styles from "../../pages/Home/Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import {useSelector} from "react-redux";


const ProductGrid = () => {

    const {products} = useSelector((store) => store.products);

    return (
        <div className={styles.row}>
            {
                products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default ProductGrid;