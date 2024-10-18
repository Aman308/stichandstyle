import React,{useState , useContext} from 'react'
import Title  from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const PlaceOrder = () => {

  const [metod, setMetod] = useState('cod')
  const {navigate ,backendUrl , token ,cartItems , setCartItem ,getCartAmount , delivery_fee , products} = useContext(ShopContext);

  const [formData ,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })
  
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value

    setFormData(data=> ({...data,[name]:value}))
  }


const initPay = (order) =>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Paymet',
      description: 'Order Paymet',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response)=>{
        console.log(response)
        try {
          
          const {data} = await axios.post(backendUrl + 'api/order/verifyRazorpay' ,response,{headers:{token}})
          if(data.success){
            navigate('/orders')
            setCartItem({})
          }
        } catch (error) {
          console.log(error);
          toast.error(error)
          
        }
        
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
}

const onSubmitHandler = async (event) =>{
  event.preventDefault()
  try {
    
    let orderItems = []

    for(const items in cartItems){

      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0 ) {
          const itemInfo = structuredClone(products.find(product=> product._id === items))
          if (itemInfo) {
            itemInfo.size = item
            itemInfo.quantity = cartItems[items][item]
            orderItems.push(itemInfo)
            
          }
        }
      }

    }
   let orderData = {
    address : formData,
    items: orderItems,
    amount: getCartAmount () + delivery_fee
   }

   switch(metod) {
     // api calls for cod orders
     case 'cod':
      const response = await axios.post(backendUrl + 'api/order/place' , orderData , {headers:{token}})
      console.log(response.data);
      
   if (response.data.success) {
     navigate('/orders')
     setCartItem({})
   }
      else{
        toast.error(response.data.message)
      }
      break;

      case 'stripe':

      const responseStripe = await axios.post (backendUrl + 'api/order/stripe' ,orderData,{headers:{token}})
      if (responseStripe.data.success) {
        const{session_url} = responseStripe.data
        window.location.replace(session_url)
      } else{
        toast.error(responseStripe.data.message)
      }
      break;

      case 'razorpay' :
      const responseRazorpay = await axios.post(backendUrl + 'api/order/razorpay', orderData , {headers:{token}})
      if (responseRazorpay.data.success) {
       initPay(responseRazorpay.data.order)
        
      }

      break;

     default:
      break;
   }
    

  } catch (error) {
    // console.log(error);
    // toast.error(error.message)
  }
}
 

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
      </div>
      <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name = 'firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
        <input required onChange={onChangeHandler} name = 'lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
      </div>
        <input required onChange={onChangeHandler} name = 'email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
        <input required onChange={onChangeHandler} name = 'street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name = 'city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
        <input required onChange={onChangeHandler} name = 'state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
      </div>
      <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name = 'zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' />
        <input required onChange={onChangeHandler} name = 'country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
      </div>
        <input required onChange={onChangeHandler} name = 'phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
    </div>

      {/* Right Side */}

    <div className='mt-8'>
        <div className='mt-8 min-w-80'>
            <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Metthod'}/>
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMetod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${metod === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
          </div>

          {/* <div onClick={()=>setMetod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${metod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
          </div> */}
          <div onClick={()=>setMetod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${metod === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
          </div>
          </div>
          <div className='w-full text-end mt-8'>
          <button type='submit'  className=' bg-black text-white text-sm  px-16 py-3'>Place Order</button>
          </div>
        </div>
    </div>

    </form>
  )
}

export default PlaceOrder
