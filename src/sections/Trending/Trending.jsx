import './Trending.css'
const Trending=()=>{
    return(
        <section className="Trending">
        <div className="Trending_cotainer">
            <h2>Trending This Week</h2>
            <div className="Trending_products">
                <div className="Trending_product_card">
                    <div className="Trending_product_image_container">
                        <a href="#"><img src="/images/s20Fe.webp" alt="Trending Product 1"/></a>
                    </div>
                    <div className="Trending_product_info">
                        <p>Samsung Galaxy S21 FE</p>
                        <p> <strong>$290.00</strong></p>
                        <p>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span> 1 review
                        </p>
                    </div>
                </div>
                <div className="Trending_product_card">
                    <div className="Trending_product_image_container">
                        <a href="#"><img src="/images/iphone.webp" alt="Trending Product 2"/></a>
                        <span id="Trending_discount">-8%</span>
                    </div>
                    <div className="Trending_product_info">
                        <p>Samsung Galaxy S23 Ultra</p>
                        <p><del>$255.00</del> <strong>$235.00</strong></p>
                        <p>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span> 1 review
                        </p>
                    </div>
                </div>
                <div className="Trending_product_card">
                    <div className="Trending_product_image_container">
                        <a href="#"><img src="/images/s21ultra.webp" alt="Trending Product 3"/></a>
                    </div>
                    <div className="Trending_product_info">
                        <p>Samsung Galaxy S21 Ultra</p>
                        <p><strong>$230.00</strong></p>
                        <p>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span> 2 reviews
                        </p>
                    </div>
                </div>
                <div className="Trending_product_card">
                    <div className="Trending_product_image_container">
                        <a href="#"><img src="/images/huwaei.webp" alt="Trending Product 4"/></a>
                        <span id="Trending_discount">-21%</span>
                    </div>
                    <div className="Trending_product_info">
                        <p>Huawei P40 Pro Phone</p>
                        <p><del>$280.00</del><strong>$230.00</strong></p>
                        <p>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span> 1 review
                        </p>
                    </div>
                </div>
                <div className="Trending_product_card">
                    <div className="Trending_product_image_container">
                        <a href="#"><img src="/images/iphone12pro.webp" alt="Trending Product 5"/></a>
                        <span id="Trending_discount">-56%</span>
                    </div>
                    <div className="Trending_product_info">
                        <p>iPhone 12 Pro Max</p>
                        <p><del>$270.00</del><strong>$120.00</strong></p>
                        <p>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span>
                            <span className="gold-star">&#9733;</span> 2 reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Trending