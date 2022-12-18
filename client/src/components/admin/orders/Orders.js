import { useSelector } from 'react-redux';
import './orders.scss'

const Orders = () => {
    const order = useSelector((state) => state.order);
    console.log("order",order);
    return (
        <div className='orders'>
            <h1>Orders</h1>
            {/* order.orderItems?.length */}
            {
                1 === 0 ? (
                    <div className="orderEmpty">
                        <h1>Product not found.</h1>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            <h3 className="orderId">Order Id</h3>
                            <h3 className="location">Location</h3>
                            <h3 className="total">Total</h3>
                            <h3 className="status">Status</h3>
                            <h3 className="button">Action</h3>
                        </div>
                        <div className="orderItems">
                            <div className="orderItem">
                                <p>1231123</p>
                                <p>121212</p>
                                <p>1222222</p>
                                <p>Pending</p>
                                <button>Show Map</button>
                            </div>
                            <div className="orderItem">
                                <p>1231123</p>
                                <p>121212</p>
                                <p>1222222</p>
                                <p>Pending</p>
                                <button>Show Map</button>
                            </div>
                            <div className="orderItem">
                                <p>1231123</p>
                                <p>121212</p>
                                <p>1222222</p>
                                <p>Pending</p>
                                <button>Show Map</button>
                            </div>
                        </div>
                    </div>
                )
            }



        </div>

    )
}

export default Orders