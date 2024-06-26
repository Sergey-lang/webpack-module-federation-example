import { useRef } from 'react';
import Banner from '@/components/ItemCards/Banner';

export interface IBannerProps {
    title: string;
    price: string;
    buttonText: string;
    onClick: () => void;
}

export const useBannerBuilder = () => {
    const props = useRef<IBannerProps>({} as IBannerProps);

    const validateTitle = (title: string) => {
        if (title.length > 50) {
            throw new Error('Title is too long');
        }
        return title;
    }

    const formatPrice = (price: string) => {
        return `$${parseFloat(price).toFixed(2)}`
    }

    const builder = {
        setTitle: (title: string) => {
            props.current.title = validateTitle(title);
            return builder;
        },
        setPrice: (price: string) => {
            props.current.price = formatPrice(price);
            return builder;
        },
        setButton: (text: string) => {
            props.current.buttonText = text;
            return builder;
        },
        setOnClick: (onClick: () => void) => {
            props.current.onClick = onClick;
            return builder;
        },
        build: () => <Banner {...props.current}/>,
        clearRefs: () => {
            props.current = {} as IBannerProps;
        }
    }

    return builder;
}