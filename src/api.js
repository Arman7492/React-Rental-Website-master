// import axios from 'axios';

// const API_URL = '/api';

// export const getCustomers = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/customers`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching customers", error);
//         throw error;
//     }
// };

// export const createCustomer = async (customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/createCustomers`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error("Error creating customer", error);
//         throw error;
//     }
// };

// export const updateCustomer = async (id, customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/updateCustomers/${id}`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating customer", error);
//         throw error;
//     }
// };

// export const deleteCustomer = async (id) => {
//     try {
//         const response = await axios.delete(`${API_URL}/deleteCustomers/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error deleting customer", error);
//         throw error;
//     }
// };

// export const showCustomer = async (id) => {
//     try {
//         const response = await axios.get(`${API_URL}/showCustomers/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching customer", error);
//         throw error;
//     }
// };





// import axios from 'axios';

// const API_URL = '/api';

// export const getCustomers = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/customers`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching customers", error);
//         throw error;
//     }
// };

// export const createCustomer = async (customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/createCustomers`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error("Error creating customer", error);
//         throw error;
//     }
// };

// export const updateCustomer = async (id, customerData) => {
//     try {
//         const response = await axios.post(`${API_URL}/updateCustomers/${id}`, customerData);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating customer", error);
//         throw error;
//     }
// };

// export const deleteCustomer = async (id) => {
//     try {
//         const response = await axios.delete(`${API_URL}/deleteCustomers/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error deleting customer", error);
//         throw error;
//     }
// };





// import axios from 'axios';

// const api = axios.create({
//     baseURL: '/api',
// });

// export const getCustomers = async () => {
//     const response = await api.get('/customers');
//     return response.data;
// };

// export const createCustomer = async (customer) => {
//     const response = await api.post('/createCustomers', customer);
//     return response.data;
// };
