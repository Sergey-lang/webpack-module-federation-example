import React from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';
import { useBannerBuilder } from '@/utils/banerBuilder';

const Shop = () => {
    const bannerBuilder = useBannerBuilder()
        .setTitle('Example Title')
        .setButton('BTN Example Title')
        .setOnClick(()=> console.log('Hello!'))
        .setPrice('250000')

    const Banner = bannerBuilder.build();

    return (
        <>
            <h1>
                SHOP MAIN PAGE
            </h1>
            {Banner}
            <div>
                <Link to={shopRoutes.example}>Example Page Link</Link>
            </div>

        </>
    );
};

export default Shop;