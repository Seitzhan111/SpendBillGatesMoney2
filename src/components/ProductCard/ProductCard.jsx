import React from 'react';
import styles from "../../pages/Home/Home.module.css";
import {addProduct, removeProduct} from "../../redux/reducers/basketSlice";
import {useDispatch, useSelector} from "react-redux";

const ProductCard = ({item}) => {
    const dispatch = useDispatch();
    const {basket} = useSelector((store) => store.basket);

    const handleRemove = () => {
        dispatch(removeProduct(item))
    };

    const handleAdd = () => {
        dispatch(addProduct(item))
    };


    const productCount = basket.find(el => el.id === item.id)?.count || 0;

    return (
        <div key={item.id} className={styles.card}>
            <img className={styles.cardImg} src={item.images[0]} alt="" />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardPrice}>$ {item.price}</p>
            <div className={styles.cardAction}>
                <button className={styles.cardBtnRed} onClick={handleRemove}>Sell</button>
                <span className={styles.count}>{productCount}</span>
                <button className={styles.cardBtnGreen} onClick={handleAdd}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;