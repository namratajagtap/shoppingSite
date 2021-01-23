import React, { useEffect } from 'react'
import Product from "../components/Product";

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';



export default function HomeScreen() {


    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    //useeffect a hook- used when we demount webpage after rendering function these function use to work.After rendering these function use to run only one time.
    useEffect(() => {

        dispatch(listProducts());
    }, []);

    return (
        <div>
            {
                loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
                ) : (<div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
                        )}
        </div>
    );
}
