import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import ConfettiCpn from "~/components/ConfettiCpn";
import { apiCreateOrder } from "~/apis/api";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreateOrderAndDeleteIncarts, ActionUpdateWhenCallApiByPaypal } from "~/Redux/actions/order";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const style = { "layout": "vertical" };
// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner, currency, amount, payload, setAnimateConfetti }) => {
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();
  const { allOrders, messageCreateOrder, errorCreateOrder, type, success } = useSelector(state => state.order)
  const dispatch1 = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options, currency: currency
      }
    })
  }, [currency, showSpinner])

  useEffect(() => {
    // if()
  }, [])
  const handleSaveOrder = async () => {
    const { data } = await axios.post('/api/v1/create-order', { ...payload, status: 'succeed' })
    dispatch1(ActionUpdateWhenCallApiByPaypal(data))
    if (data.success) {
      console.log("okkkkkk");
      setAnimateConfetti(true)
      setTimeout(() => {
        // if ordered successfully , so its open table notice , 
        // then only when you Click Button OK , it will navigate to '/user/purchase'
        Swal.fire('Congrat!', 'Order was created', 'succeed').then(() => {
          navigate('/user/purchase')
          window.location.reload()
        })
      }, 500)
    }
  }
  return (
    <>
      {(showSpinner && isPending) && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style, currency, amount]}
        fundingSource={undefined}
        createOrder={(data, actions) => actions.order.create({
          purchase_units: [
            { amount: { currency_code: currency, value: amount } }
          ]
        }).then(orderId => orderId)}
        onApprove={(data, actions) => actions.order.capture().then(async (response) => {
          if (response.status === 'COMPLETED') {
            console.log('response.status', response.status);
            handleSaveOrder()
          }
        })}
      />
    </>
  );
}

const PayPal = ({ amount, payload, setAnimateConfetti }) => {
  console.log(amount);
  return (
    <div style={{ maxWidth: "750px", minHeight: '100px' }}>
      <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
        <ButtonWrapper setAnimateConfetti={setAnimateConfetti} payload={payload} currency={'USD'} amount={amount} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
export default PayPal