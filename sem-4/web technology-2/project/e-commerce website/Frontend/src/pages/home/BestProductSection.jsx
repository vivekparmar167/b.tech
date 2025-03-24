import { useEffect, useState } from 'react';
import CartIcon from './../../assets/cart-light.svg';
import WishlistIcon from './../../assets/wishlist.svg';
import StarFullIcon from "./../../assets/star-full.svg";
import StarHalfIcon from "./../../assets/star-half.svg";
import StarEmptyIcon from "./../../assets/star-empty.svg";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, index) => (
                <img key={`full-${index}`} src={StarFullIcon} alt="full-star" width={18} height={18} />
            ))}
            {halfStars === 1 && <img src={StarHalfIcon} alt="half-star" width={18} height={18} />}
            {[...Array(emptyStars)].map((_, index) => (
                <img key={`empty-${index}`} src={StarEmptyIcon} alt="empty-star" width={18} height={18} />
            ))}
            <span> ({rating.toFixed(1)})</span>
        </div>
    );
};

export default function BestProductSection() {
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [remarksData, setRemarksData] = useState({});

    useEffect(() => {
        const fetchBestSellingProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/product/best_selling');
                if (!response.ok) {
                    throw new Error("Failed to fetch best-selling products");
                }
                const data = await response.json();
                setBestSellingProducts(data);
            } catch (err) {
                console.error("Error fetching best-selling products:", err);
            }
        };

        fetchBestSellingProducts();
    }, []);

    useEffect(() => {
        bestSellingProducts.forEach((productObj) => {
            fetchRemarksForProduct(productObj._id);
        });
    }, [bestSellingProducts]);

    const fetchRemarksForProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/remark/product/${productId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch remarks for product ${productId}`);
            }
            const remarks = await response.json();
            const totalRating = remarks.reduce((sum, remark) => sum + remark.Rating, 0);
            const averageRating = remarks.length > 0 ? totalRating / remarks.length : 0;
            setRemarksData((prev) => ({ ...prev, [productId]: averageRating }));
        } catch (error) {
            console.error("Error fetching remarks:", error);
        }
    };

    return (
        <section className="pb-5">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between my-4">
                            <h2 className="section-title">Best Selling Products</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn btn-primary rounded-1">View All</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                            {bestSellingProducts.length > 0 ? (
                                bestSellingProducts.map((product) => {
                                    const averageRating = remarksData[product._id] || 0;
                                    return (
                                        <div className="col" key={product._id}>
                                            <div className="product-item">
                                                <figure>
                                                    <a href={`product/${product._id}`} title={product.ProductName}>
                                                        <img src={`/Images/ProductImage/${product.ProductImage}`} alt={product.ProductName} className="tab-image" />
                                                    </a>
                                                </figure>
                                                <div className="d-flex flex-column text-center">
                                                    <h3 className="fs-6 fw-normal">{product.ProductName}</h3>
                                                    <div className="d-flex justify-content-center">
                                                        <StarRating rating={averageRating} />
                                                        <span>({product.ProductPurchaseCount})</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                                        <del>${product.ProductPrice}</del>
                                                        <span className="text-dark fw-semibold">
                                                            ${(product.ProductPrice - product.ProductDiscount).toFixed(2)}
                                                        </span>
                                                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                                                            {product.ProductDiscount}% OFF
                                                        </span>
                                                    </div>
                                                    <div className="button-area p-3 pt-0">
                                                        <div className="row g-1 mt-2">
                                                            <div className="col-3">
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    className="form-control border-dark-subtle input-number quantity"
                                                                    defaultValue="1"
                                                                />
                                                            </div>
                                                            <div className="col-7">
                                                                <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                                                                    <img src={CartIcon} alt="cart" width={24} height={24} /> Add to Cart
                                                                </a>
                                                            </div>
                                                            <div className="col-2">
                                                                <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                                                                    <img src={WishlistIcon} alt="wishlist" width={24} height={24} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No best-selling products available.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}