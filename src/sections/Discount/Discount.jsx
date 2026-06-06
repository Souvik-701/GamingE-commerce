import './Discount.css'
const Discount=()=>{
    return(
        <section className="discount">
        <div className="discount_container">
            <div className="discount_container_left">
                <div className="discount_container_left_image_container">
                    <a href="#"><img src="/images/audiospeaker.webp" alt="Discount1"/></a>
                </div>
                <div className="discount_container_left_text">
                    <p>Up to 75% Off</p>
                    <h2>Unbeatable Discounts</h2>
                    <a href="#">Shop Now</a><i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="discount_container_right">
                <div className="discount_container_left_image_container">
                    <a href="#"><img src="/images/applemac.webp" alt="Discount2"/></a>
                </div>
                <div className="discount_container_right_text">
                    <p>Hurry UP! On Sale</p>
                    <h2>Massive Fashion Sale</h2>
                    <a href="#">Shop Now</a><i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Discount