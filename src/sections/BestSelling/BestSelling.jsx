import './BestSelling.css'

const BestSelling=()=>{
    return(
        <section className="Best_Selling">
        <div className="container">
            <h2>Best Selling Products</h2>

            <div className="Best_Collection">
                <div className="hot_deals">
                    <div className="hot_deals_image_container">
                        <a href="#"><img src="/images/Hot_Collection_360x.webp" alt="Hot Deals"/></a>
                    </div>
                    <div className="hot_deals_text">
                        <h2>Hot Collection</h2>
                        <p>Pair text with an image to focus on your choosen product,collection or blog post</p>
                        <p><a href="#">Shop Now</a><i className="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="products">
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/applewatch.webp" alt="Product 1"/></a>
                        </div>
                        <div className="product_info">
                            <p>Tough Apple Watch</p>
                            <p>$145.00</p>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/camera.webp" alt="Product 2"/></a>
                            <span id="discount">-18%</span>
                        </div>
                        <div className="product_info">
                            <p>Go Pro Hero Camera</p>
                            <p><del>$280.00</del> <strong>$230.00</strong></p>
                            <p>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span> 1 review
                            </p>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/macbook.webp" alt="Product 3"/></a>

                        </div>
                        <div className="product_info">
                            <p>Abstract MacBook</p>
                            <p><strong>$890.00</strong></p>
                            <p>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span> 2 reviews
                            </p>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/mouse.webp" alt="Product 4"/></a>
                            <span id="discount">-17%</span>
                        </div>
                        <div className="product_info">
                            <p>Wireless Computer Mouse</p>
                            <p><del>$180.00</del> <strong>$150.00</strong></p>
                            <p>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span> 1 review
                            </p>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/speaker.webp" alt="Product 5"/></a>
                        </div>
                        <div className="product_info">
                            <p>Mevo Live Camera</p>
                            <p><strong>$160.00</strong></p>
                            <p>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span> 1 review
                            </p>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_image_container">
                            <a href="#"><img src="/images/desktop.webp" alt="Product 6"/></a>
                            <span id="discount">-27%</span>
                        </div>
                        <div className="product_info">
                            <p>HP 251 Desktop</p>
                            <p><del>$300.00</del> <strong>$220.00</strong></p>
                            <p>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span>
                                <span className="gold-star">&#9733;</span> 1 review
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BestSelling