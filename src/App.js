import Layout from "./components/Layout/Layout";

function App() {
  return <Layout />;
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { getCustomers, createCustomer, updateCustomer, deleteCustomer, showCustomer } from './api';

// const App = () => {
//     const [customers, setCustomers] = useState([]);
//     const [selectedCustomer, setSelectedCustomer] = useState(null);

//     useEffect(() => {
//         const fetchCustomers = async () => {
//             try {
//                 const data = await getCustomers();
//                 setCustomers(data);
//             } catch (error) {
//                 console.error("Error fetching customers", error);
//             }
//         };

//         fetchCustomers();
//     }, []);

//     const handleCreateCustomer = async () => {
//         const newCustomer = { /* данные нового клиента */ };
//         try {
//             await createCustomer(newCustomer);
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error creating customer", error);
//         }
//     };

//     const handleUpdateCustomer = async (id) => {
//         const updatedCustomer = { /* данные обновленного клиента */ };
//         try {
//             await updateCustomer(id, updatedCustomer);
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error updating customer", error);
//         }
//     };

//     const handleDeleteCustomer = async (id) => {
//         try {
//             await deleteCustomer(id);
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error deleting customer", error);
//         }
//     };

//     const handleShowCustomer = async (id) => {
//         try {
//             const customer = await showCustomer(id);
//             setSelectedCustomer(customer);
//         } catch (error) {
//             console.error("Error fetching customer", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Customers</h1>
//             <ul>
//                 {customers.map(customer => (
//                     <li key={customer.id}>
//                         {customer.name}
//                         <button onClick={() => handleShowCustomer(customer.id)}>Show</button>
//                         <button onClick={() => handleUpdateCustomer(customer.id)}>Update</button>
//                         <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleCreateCustomer}>Create Customer</button>

//             {selectedCustomer && (
//                 <div>
//                     <h2>Selected Customer</h2>
//                     <p>Name: {selectedCustomer.name}</p>
//                     {/* Добавьте больше деталей по мере необходимости */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { getCustomers, createCustomer, updateCustomer, deleteCustomer } from './api';

// const App = () => {
//     const [customers, setCustomers] = useState([]);
//     const [newCustomer, setNewCustomer] = useState({
//         first_name: '',
//         last_name: '',
//         phone_number: '',
//         password: ''
//     });
//     const [editCustomerId, setEditCustomerId] = useState(null);
//     const [editCustomerData, setEditCustomerData] = useState({
//         first_name: '',
//         last_name: '',
//         phone_number: '',
//         password: ''
//     });

//     useEffect(() => {
//         const fetchCustomers = async () => {
//             try {
//                 const data = await getCustomers();
//                 setCustomers(data);
//             } catch (error) {
//                 console.error("Error fetching customers", error);
//             }
//         };

//         fetchCustomers();
//     }, []);

//     const handleCreateCustomer = async () => {
//         try {
//             await createCustomer(newCustomer);
//             // Обновите список клиентов после создания нового клиента
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error creating customer", error);
//         }
//     };

//     const handleUpdateCustomer = async () => {
//         try {
//             await updateCustomer(editCustomerId, editCustomerData);
//             // Обновите список клиентов после обновления клиента
//             const data = await getCustomers();
//             setCustomers(data);
//             setEditCustomerId(null);  // Сбросить состояние редактирования
//         } catch (error) {
//             console.error("Error updating customer", error);
//         }
//     };

//     const handleDeleteCustomer = async (id) => {
//         try {
//             await deleteCustomer(id);
//             // Обновите список клиентов после удаления клиента
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error deleting customer", error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (editCustomerId) {
//             setEditCustomerData({ ...editCustomerData, [name]: value });
//         } else {
//             setNewCustomer({ ...newCustomer, [name]: value });
//         }
//     };

//     return (
//         <div>
//             <h1>Customers</h1>
//             <ul>
//                 {customers.map(customer => (
//                     <li key={customer.id}>
//                         {customer.first_name} {customer.last_name}
//                         <button onClick={() => {
//                             setEditCustomerId(customer.id);
//                             setEditCustomerData(customer);
//                         }}>Edit</button>
//                         <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             <div>
//                 <h2>{editCustomerId ? 'Edit Customer' : 'Create Customer'}</h2>
//                 <input 
//                     type="text" 
//                     name="first_name" 
//                     placeholder="First Name" 
//                     value={editCustomerId ? editCustomerData.first_name : newCustomer.first_name} 
//                     onChange={handleChange} 
//                 />
//                 <input 
//                     type="text" 
//                     name="last_name" 
//                     placeholder="Last Name" 
//                     value={editCustomerId ? editCustomerData.last_name : newCustomer.last_name} 
//                     onChange={handleChange} 
//                 />
//                 <input 
//                     type="text" 
//                     name="phone_number" 
//                     placeholder="Phone Number" 
//                     value={editCustomerId ? editCustomerData.phone_number : newCustomer.phone_number} 
//                     onChange={handleChange} 
//                 />
//                 <input 
//                     type="password" 
//                     name="password" 
//                     placeholder="Password" 
//                     value={editCustomerId ? editCustomerData.password : newCustomer.password} 
//                     onChange={handleChange} 
//                 />
//                 <button onClick={editCustomerId ? handleUpdateCustomer : handleCreateCustomer}>
//                     {editCustomerId ? 'Update Customer' : 'Create Customer'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { getCustomers, createCustomer } from './api';

// const App = () => {
//     const [customers, setCustomers] = useState([]);
//     const [newCustomer, setNewCustomer] = useState({
//         first_name: '',
//         last_name: '',
//         phone_number: '',
//         password: ''
//     });

//     useEffect(() => {
//         const fetchCustomers = async () => {
//             try {
//                 const data = await getCustomers();
//                 setCustomers(data);
//             } catch (error) {
//                 console.error("Error fetching customers", error);
//             }
//         };

//         fetchCustomers();
//     }, []);

//     const handleCreateCustomer = async () => {
//         try {
//             await createCustomer(newCustomer);
//             // Обновите список клиентов после создания нового клиента
//             const data = await getCustomers();
//             setCustomers(data);
//         } catch (error) {
//             console.error("Error creating customer", error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewCustomer({ ...newCustomer, [name]: value });
//     };

//     return (
//         <div>
//             <h1>Customers</h1>
//             <ul>
//                 {customers.map(customer => (
//                     <li key={customer.id}>{customer.first_name} {customer.last_name}</li>
//                 ))}
//             </ul>
//             <input 
//                 type="text" 
//                 name="first_name" 
//                 placeholder="First Name" 
//                 value={newCustomer.first_name} 
//                 onChange={handleChange} 
//             />
//             <input 
//                 type="text" 
//                 name="last_name" 
//                 placeholder="Last Name" 
//                 value={newCustomer.last_name} 
//                 onChange={handleChange} 
//             />
//             <input 
//                 type="text" 
//                 name="phone_number" 
//                 placeholder="Phone Number" 
//                 value={newCustomer.phone_number} 
//                 onChange={handleChange} 
//             />
//             <input 
//                 type="password" 
//                 name="password" 
//                 placeholder="Password" 
//                 value={newCustomer.password} 
//                 onChange={handleChange} 
//             />
//             <button onClick={handleCreateCustomer}>Create Customer</button>
//         </div>
//     );
// };

// export default App;



