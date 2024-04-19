import React from 'react';

const DynamicProduct = ({params}) => {
    console.log(params,'jahid');
    return (
        <div>
            Dynamic Products {params.productId}
        </div>
    );
};

export default DynamicProduct;