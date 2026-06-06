import './BestDeals.css'
const BestDeals=()=>{
    return(
        <section className="Best_Deals">
        <div className="Best_Deals_container">
            <div className="Best_Deals_header">
                <div className="Best_Deals_header_left">
                    <h2>Best Deals</h2>
                </div>
                <div className="Best_Deals_header_right">
                    <p>Hurry up! Offer ends in:
                        <span id="countdown">-514</span>
                        <span id="countdown">-10</span>
                        <span id="countdown">-17</span>
                        <span id="countdown">-32</span></p>
                </div>
            </div>

            <div className="Best_Deals_products">
                <div className="Best_Deals_product_card">
                    <div className="Best_Deals_product_card_left">
                        <div className="Best_Deals_product_image_left_container">
                            <a href="#"><img src="/images/BestDeals.webp" alt="Best Deal 1"/></a>
                        </div>
                        <div className="Best_Deals_product_card_left_info">
                            <h2>Hot Deals</h2>
                            <p>Pair text with an image to focus on your chosen product,collection, or blog post.</p>
                            <button>Shop Now<a href="#"><i className="fa-solid fa-arrow-right"></i></a></button>
                        </div>
                    </div>
                    <div className="Best_Deals_product_card_right">
                        <div className="Best_Deals_product_card_right_top">
                            <div className="Best_Deals_product_card_right_top_cards">
                                <div className="top_cards_image">
                                    <a href="#"><img src="/images/skynight.webp" alt="Best Deal 2"/></a>
                                    <span id="Best_Deals_discount">-29%</span>
                                </div>
                                <div className="top_cards_info">
                                    <p>Sky Night Airpods</p>
                                    <p><del>$175.00</del><strong>$125.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 1 review
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_top_cards">
                                <div className="top_cards_image">
                                    <a href="#"><img src="/images/Lavender.webp" alt="Best Deal 3"/></a>
                                    <span id="Best_Deals_discount">Sold Out</span>
                                </div>
                                <div className="top_cards_info">
                                    <p>Sky Night Airpods</p>
                                    <p><del>$175.00</del><strong>$125.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 1 review
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_top_cards">
                                <div className="top_cards_image">
                                    <a href="#"><img src="/images/xbox.webp" alt="Best Deal 4"/></a>

                                </div>
                                <div className="top_cards_info">
                                    <p>Xbox Controller S</p>
                                    <p><strong>$155.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 2 reviews
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_top_cards">
                                <div className="top_cards_image">
                                    <a href="#"><img src="/images/echo.webp" alt="Best Deal 5"/></a>
                                    <span id="Best_Deals_discount">-33%</span>
                                </div>
                                <div className="top_cards_info">
                                    <p>Amazon 3rd Speaker</p>
                                    <p><del>$180.00</del><strong>$120.00</strong></p>
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
                        <div className="Best_Deals_product_card_right_bottom">
                            <div className="Best_Deals_product_card_right_bottom_cards">
                                <div className="bottom_cards_image">
                                    <a href="#"><img src="/images/applewatchseries.webp" alt="Best Deal 6"/></a>

                                </div>
                                <div className="bottom_cards_info">
                                    <p>Apple Watch Series</p>
                                    <p><strong>$130.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 1 review
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_bottom_cards">
                                <div className="bottom_cards_image">
                                    <a href="#"><img src="/images/vrcontroller.webp" alt="Best Deal 7"/></a>
                                </div>
                                <div className="bottom_cards_info">
                                    <p>Gear Black Controller</p>
                                    <p><strong>$180.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 1 review
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_bottom_cards">
                                <div className="bottom_cards_image">
                                    <a href="#"><img src="/images/airpods.webp" alt="Best Deal 8"/></a>

                                </div>
                                <div className="bottom_cards_info">
                                    <p>Apple Airpods Pro</p>
                                    <p><strong>$140.00</strong></p>
                                    <p>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span>
                                        <span className="gold-star">&#9733;</span> 1 review
                                    </p>
                                </div>
                            </div>
                            <div className="Best_Deals_product_card_right_bottom_cards">
                                <div className="bottom_cards_image">
                                    <a href="#"><img src="/images/cable.webp" alt="Best Deal 9"/></a>
                                    <span id="Best_Deals_discount">-31%</span>
                                </div>
                                <div className="bottom_cards_info">
                                    <p>Apple USB Cable</p>
                                    <p><del>$160.00</del><strong>$110.00</strong></p>
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
            </div>
        </div>
    </section>
    )
}

export default BestDeals