import React from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <>
            <h1>
                SHOP MAIN PAGE
            </h1>
            <div>
                <Link to={shopRoutes.example}>Example Page Link</Link>
            </div>
        </>
    );
};

export default Shop;