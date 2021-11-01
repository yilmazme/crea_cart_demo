import { Product } from "./Product";

export const PRODUCTS: Product[] =[
    {
        id:1,
        name:"hat",
        price:8.99,
        image:"../assets/uploads/hat.jpg",
        rating: [5],
        description:"A beautiful hat",
        arrivalDate: new Date('10.11.2021'),
        comments:["i like it", "no way i'm buying this", "şapka güzel, şapkaya laf yok", "Lorem Ipsum is simply dummy text of the", "text of the printing and typesetting industry", "text of the printing and typesetting industry"],
        detail:" A beautiful hat...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        id:2,
        name:"watch",
        price:16.99,
        image:"assets/uploads/watch.jpg",
        rating: [2.5],
        description:"A beautiful watch",
        arrivalDate: new Date('05.08.2021'),
        comments:["i like it", "no way i'm buying this", "saat güzel, saate laf yok", "Lorem Ipsum is simply dummy text of the", "text of the printing and typesetting industry", "text of the printing and typesetting industry"],
        detail:" A beautiful watch...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        id:3,
        name:"tshirt",
        price:12.99,
        image:"assets/uploads/tshirt.jpg",
        rating: [1],
        description:"A beautiful tshirt",
        arrivalDate: new Date('07.04.2021'),
        comments:["i like it", "no way i'm buying this", "tişört güzel, tişörte laf yok", "Lorem Ipsum is simply dummy text of the", "text of the printing and typesetting industry", "text of the printing and typesetting industry"],
        detail:" A beautiful tshirt...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        id:4,
        name:"mug",
        price:4.99,
        image:"assets/uploads/mug.jpg",
        rating: [3.5],
        description:"A beautiful mug",
        arrivalDate: new Date('09.12.2020'),
        comments:["i like it", "no way i'm buying this", "bardak güzel, bardağa laf yok", "Lorem Ipsum is simply dummy text of the", "text of the printing and typesetting industry", "text of the printing and typesetting industry"],
        detail:" A beautiful mug...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
        id:5,
        name:"pan",
        price:22.99,
        image:"assets/uploads/pan.jpg",
        rating: [4],
        description:"A beautiful pan",
        arrivalDate: new Date('10.01.2021'),
        comments:["i like it", "no way i'm buying this", "tava güzel, tavaya laf yok", "Lorem Ipsum is simply dummy text of the", "text of the printing and typesetting industry", "text of the printing and typesetting industry"],
        detail:" A beautiful pan...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
]