import tourImg01 from "../image/Travel-img01.jpg";
import tourImg02 from "../image/Travel-img02.jpg";
import tourImg03 from "../image/Travel-img03.webp";
import tourImg04 from "../image/Travel-img04.jpg";
import tourImg05 from "../image/Travel-img05.jpg";
import tourImg06 from "../image/Travel-img06.webp";
import tourImg07 from "../image/Travel-img07.webp";
import tourImg08 from "../image/Travel-img08.jpg";


const tours = [
  {
    id: "01",
    title: "T-shirt",
   // city: "Tamil Nadu",
    //distance: 2719,
    //address: 'kanyakumari,Tamil Nadu',
    price: 200,
   // maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "Karle Bone",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Jacket",
   // city: "Goa",
    //distance: 2219,
   // address: 'Dudhsagar Waterfalls, Goa',
    price:500,
    //maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Silk Saree",
   // city: "Andaman and Nicobar Islands",
    //distance: 1306,
   // address: 'Corbyn’s Cove beach, Andaman and Nicobar Islands',
    price:1000,
   // maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sports Shoes",
   // city: "Lakshadweep",
   // distance: 2087,
   // address: 'Kavaratti Islands, Lakshadweep',
    price:800,
   // maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Soya OIL",
   // city: "Arunachal Pradesh",
   // distance: 1325,
   // address: 'Ziro Valley, Arunachal Pradesh',
    price: 200,
    //maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Chair",
    //city: "Uttar Pradesh",
   // distance: 1319,
    //address: 'Agra, Uttar Pradesh',
    price: 800,
   // maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Sandal",
   // city: "Jammu and Kashmir",
   // distance: 2459,
   // address: 'Ladakh, Jammu and Kashmir',
    price: 259,
   // maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Watch",
   // city: "Rajasthan",
   // distance: 1800,
   // address: 'Jaisamand Lake, Rajasthan',
    price: 1000,
  //  maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  
];

export default tours;
