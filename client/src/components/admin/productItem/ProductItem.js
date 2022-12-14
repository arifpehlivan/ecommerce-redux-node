import './productItem.scss'

const ProductItem = ({ item }) => {
    return (
        <div className='productItem'>
            <div key={item.id}>
                <div className="productItemTitle">{item.title}</div>
                <div className="productItemImage">
                    <img src={item.img} alt="" />
                </div>
                <div className="productItemDesc">{item.desc}</div>
                <div className="productItemBottom">
                    <div className="productItemPrice">{item.price}</div>
                    <div className="productItemButtons">
                        <button>Delete Product</button>
                        <button>Discount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem