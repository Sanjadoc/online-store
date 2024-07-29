import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ImageGallery from 'react-image-gallery';

import { Loader } from 'components/Loader';
import { Button } from 'components/Button';

import { fetchProduct } from 'store/product/effects';
import { selectorProduct } from 'store/product/selectors';
import { clearProduct } from 'store/product/actions';

import { addToCart } from 'store/cart/actions';
import { selectorIsItemInCart } from 'store/cart/selectors';

import styles from './Product.module.scss';

const placeholderImgSrc = 'assets/img/not-found-img-1.png';

export const Product = () => {
  const { product, isLoading } = useSelector(selectorProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const isItemInCart = useSelector(selectorIsItemInCart(parseInt(id)));

  const activeBtnClass = useMemo(() => (isItemInCart ? styles.ActiveBtn : ''), [isItemInCart]);

  const images = useMemo(() => {
    return (
      product?.images?.map((image) => ({
        original: image,
        thumbnail: image
      })) || [{ original: placeholderImgSrc, thumbnail: placeholderImgSrc }]
    );
  }, [product?.images]);

  const singleImg = images?.length === 1;

  const productDoesntExist = !isLoading && typeof product === 'undefined';

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  }, [dispatch, product]);

  if (productDoesntExist) {
    return (
      <div className={styles.productEmptyInfo}>
        Sorry! We don&apos;t have any info about this product
      </div>
    );
  }

  return isLoading ? (
    <Loader />
  ) : (
    product && (
      <div className={styles.product}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <div className={styles.productDetails}>
          <div className={styles.productBox}>
            {singleImg ? (
              <img
                className={styles.productBoxImg}
                src={product.thumbnail ?? placeholderImgSrc}
                alt={product.title}
                loading="lazy"
              />
            ) : (
              <ImageGallery items={images} />
            )}
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productInfoCategory}>Category: {product.category}</p>
            <p>Articul: {product.id}</p>
            {product.stock && <p>Stock: {product.stock}</p>}
            <p className={styles.productInfoPrice}>Price: {product.price} UAH</p>
            <p>Description: {product.description}</p>
            <div className={styles.productActions}>
              <Button
                title={!isItemInCart ? 'Add to cart' : 'In cart'}
                onClick={addToCartHandler}
                className={activeBtnClass}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
