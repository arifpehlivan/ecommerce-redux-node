import { useSelector } from 'react-redux';
import './orders.scss'

const Orders = () => {
    const order = useSelector((state) => state.order);
    console.log("order", order);
    return (
        <div className='orders'>
            <h1>Orders</h1>
            {/*  */}
            {
                order.orderItems?.length === 0 ? (
                    <div className="orderEmpty">
                        <h1>Product not found.</h1>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            <h3 className="orderId">Order Id</h3>
                            <h3 className="location">Location(Lat,Lon)</h3>
                            <h3 className="total">Total</h3>
                            <h3 className="status">Status</h3>
                            <h3 className="button">Action</h3>
                        </div>
                        <div className="orderItems">
                            {
                                order.orderItems?.map(item => {
                                    return (
                                        <div className="orderItem" key={item.id}>
                                            <p>{item.id}</p>
                                            <p>{item.coordLat}, {item.coordLon}</p>
                                            <p>$ {item.orderItem[0].price}</p>
                                            <p>{order.status}</p>
                                            <button>Show Map</button>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Orders