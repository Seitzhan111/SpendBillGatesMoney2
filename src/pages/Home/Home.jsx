import React, {useEffect} from 'react';
import styles from './Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import {getProducts} from "../../redux/reducers/productsSlice";
import AnimatedNumbers from "react-animated-numbers";


const Home = () => {
    const {basket} = useSelector((store) => store.basket);
    const {error, status} = useSelector((store) => store.products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, []);


    const calculateTotalPrice = () => {
        return (
            basket.reduce((acc, rec) => {
                return acc + rec.price * rec.count
            }, 0)
        )
    };

    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <img className={styles.avatar} src="https://neal.fun/spend/billgates.jpg" alt="" />
                    <h1 className={styles.title}>Spend Bill Gates' Money</h1>
                </div>
                <div className={styles.moneyBlock}>
                    <p className={styles.money}><AnimatedNumbers
                        includeComma
                        animateToNumber = {1000000 - calculateTotalPrice()}
                        locale='en-US'
                        configs={(number, index) => {
                            return { mass: 1, tension: 500 * (index + 1), friction: 140 }
                        }}
                    /></p>
                </div>

                {
                    status === 'loading' ? (<h2>Loading...</h2>)
                        : status === 'error' ? (<h2>{error}</h2>)
                        : <ProductGrid />
                }

                <div className={styles.total}>
                    <h2 className={styles.totalTitle}>Your Receipt</h2>
                    <div className={styles.wrapper}>
                        <ul className={styles.list}>
                            {
                                basket.map(item => (
                                    <li key={item.id} className={styles.listItem}>
                                        <p className={styles.titleCount}>{item.title}</p>
                                        <p className={styles.titleCount}>x{item.count}</p>
                                        <p className={styles.sumItem}>${item.price * item.count}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <br/>
                    <hr className={styles.hr}/>
                    <br/>
                    <div className={styles.totalRow}>
                        <p className={styles.totalText}>
                            TOTAL:
                        </p>
                        <p className={styles.totalPrice}>
                            $ {calculateTotalPrice()}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;