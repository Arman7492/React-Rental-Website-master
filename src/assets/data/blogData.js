// import images from all-images/blog-img directory
import axios from "axios";
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

axios.get('http://rentandcourses.loc/api/orderItems')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response.data);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

axios.get('http://rentandcourses.loc/api/instructors')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response.data);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

  axios.get('http://rentandcourses.loc/api/showOrderItems/{id}')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response.data);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

  axios.get('http://rentandcourses.loc/api/updateOrderItems/{id}')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response.data);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

  axios.get('http://rentandcourses.loc/api/deleteOrderItems/{id}')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response.data);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });


const blogData = [
  {
    id: 1,
    title: "The best way to get new emotions from mountain skiing",
    author: "Vladimir",
    date: "12 Dec, 2023",
    time: "9pm",
    imgUrl: img01,
    description:
      " Description of equipment.",
    quote:
      "Absolutely new equipment, clean, comfortable, all sizes.",
  },

  {
    id: 2,
    title: "Qualified Soviet school instructors",
    author: "Damir",
    date: "30 Dec, 2023",
    time: "11pm",
    imgUrl: img02,
    description:
      " Reviews on instructors.",
    quote:
      "We used the services of instructors, and in a couple of hours they taught us how to ski.",
  },

  {
    id: 3,
    title: "Maintenance service",
    author: "Dinara",
    date: "07 Jan, 2024",
    time: "10pm",
    imgUrl: img03,
    description:
      " Description of the service and equipment selection specialists.",
    quote:
      "Qualified equipment selection specialists gave good advice, set up skis and boots well.",
  },
];

export default blogData;
