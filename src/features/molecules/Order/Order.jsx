import OrderItem from './OrderItem'

import { useLoaderData } from 'react-router-dom'
import { getOrder } from '../../../shared/services/apiRestaurant'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../../shared/utils/helpers'

const Order = () => {
  //return <div>Hello am Order!</div>

  const order = useLoaderData()

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order

  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
        {/* pendiente */}
      </div>
    </div>
  )
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId)
  return order
}

export default Order
