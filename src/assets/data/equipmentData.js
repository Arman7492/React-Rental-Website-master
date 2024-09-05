// import all images from assets/images directory
import img01 from "../all-images/equipments-img/light-equipment.png";
import img02 from "../all-images/equipments-img/full-equipment.png";


const equipmentData = [
  {
    id: 1,
    brand: "",
    rating: 7,
    equipmentName: "Equipment 'Light'",
    imgUrl: img01,
    model: "Model-2024",
    price: 3990,
    speed: "90kmpl",
    gps: "free ski pass",
    seatType: "Gloves made of PU (polyurethane).",
    automatic: "Manual adjustment",
    description:
      "Weekend equipment for those who want to ride lightly.",
  },



  {
    id: 6,
    brand: "",
    rating: 10,
    equipmentName: "Full equipment",
    imgUrl: img02,
    model: "Model-2024",
    price: 6990,
    speed: "110kmpl",
    gps: "free ski pass",
    seatType: "Teflon (ePTFE) gloves",
    automatic: "Automatic adjustment",
    description:
      " Full equipment for those who want to fully immerse themselves in extreme skiing.",
  },

];

export default equipmentData;
