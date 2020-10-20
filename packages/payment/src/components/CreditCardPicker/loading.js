import React from 'react';
import LoadingItem from './loadingItem';

export default function Loading() {
    return (
        <div>
            <LoadingItem lineWidth="small" className="rainbow-m-bottom_x-small" />
            <LoadingItem />
        </div>
    );
}
