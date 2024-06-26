import React from 'react';

import styles from './banner.module.scss'
import { IBannerProps } from '@/utils/banerBuilder';

const Banner = ({title, price, onClick, buttonText}: IBannerProps) => {
    return (
        <section className={styles.wrapper}>
            {title && <h3>{title}</h3>}
            {price && <h3>{price}</h3>}
            {buttonText ? (
                <button onClick={onClick}>{buttonText}</button>
            ) : null}
        </section>
    );
};

export default Banner;