import React,{useState} from 'react';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShowOrders from './show';
import { getUserOrderHistory } from '../../../actions/OrderActions';
import OrderHistory from '../../../components/ui/OrderHistory';

const UserOrdersTab =()=>{
    const [product, setProduct] = useState([]);
    const [priceproduct, setPrice] = useState([]);
    const profile = useSelector(state => state.profile);
    
const userOrders = () => {
        const orders = [];
        const userProducts = [];
        const price = [];
        firebase.firestore().collection('orders').where("email","==" ,profile.email)
        .get()
        .then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                orders.push({
                    email: doc.data().email,
                    name: doc.data().ProductName,
                    price: doc.data().price
                    
                })
            });
            orders.forEach(products=>{
                userProducts.push(products.name)
            });
            orders.forEach(products=>{
                price.push(products.price)
            });
            setProduct(userProducts);
            setPrice(price);        
        })
        .catch(function(error){
            console.log("Error getting document:", error)
        }); 
    };
    useEffect(()=>{
        userOrders();
        getUserOrderHistory()
    },[])
    return(
        <div>
            <div>
           <h1>
           Order History
         </h1>
  
        <OrderHistory orders={OrderHistory} />
       </div>
            <div > 
                <h3 className="text-subtle text-italic">Name: {profile.fullname}</h3>
                <h3 className="text-subtle text-italic">Email: {profile.email}</h3>
            </div>
            <div className="">
                <ShowOrders name={product} price={priceproduct} />
                </div>
        </div>
    )
}
export default UserOrdersTab;

// import React,{useState} from 'react';
// import firebase from 'firebase';
// import {getUserOrderHistory } from '../../../actions/OrderActions';

// import { useEffect } from 'react';
// import ShowOrders from './show';
// import { useDispatch, useSelector } from 'react-redux';
// import OrderHistory from '../../../components/ui/OrderHistory';

// const mapState = ({ User, OrdersData }) => ({
//     CurrentUser: user.CurrentUser,
//     OrderHistory: ShowOrders.OrderHistory.data
//   });
  
//   const UserOrdersTab = props => {
//     const dispatch = useDispatch();
//       const { user, OrderHistory } = useSelector(mapState);
      
  
//     useEffect(() => {
//       dispatch(
//           getUserOrderHistory()
//       );
  
//     }, []);
  
//     return (
//       <div>
//         <h1>
//           Order History
//         </h1>
  
//         <OrderHistory orders={OrderHistory} />
//       </div>
//     );
//   };
//   export default UserOrdersTab;