'use client'

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from 'next/link';


export default function Cards() {
  const list = [
    {
      title: "Espresso",
      img: "/Espresso.webp",
      price: "$3.45",
    },
    {
      title: "True Mocha",
      img: "True Mocha.webp",
      price: "$3.45",
    },
   
    {
      title: "Cappuccino",
      img: "Cappuccino.webp",
      price: "$6.00",
    },
    {
      title: "Latte",
      img: "Lat.webp",
      price: "$6.25",
    },
    {
      title: "Long Black",
      img: "/Long Black.webp",
      price: "$4.50",
    },
  
    {
      title: "Iced Espresso",
      img: "Iced Espresso.webp",
      price: "$5.00",
    },
   
    {
      title: "Cold Coffee Creme",
      img: "Cold Coffee Creme.webp",
      price: "$12.20",
    },
    {
      title: "Brookie Creme",
      img: "Brookie Creme.webp",
      price: "$12.20",
    },
    {
      title: "Peanut Butter Creme",
      img: "Peanut Butter Creme.webp",
      price: "$12.20",
    },
    {
      title: "Chocolate Cake",
      img: "Chocolate Cake.webp",
      price: "$8.20",
    },
    {
      title: "Strawberry Cake",
      img: "Strawberry Cake.webp",
      price: "$8.20",
    },
    {
      title: "Basque Cheesecake",
      img: "Basque Cheesecake.webp",
      price: "$8.20",
    },


  ];

  return (
    <div className="mb-8 text-center">{/*Added margin-bottom for spacing*/}
    
     <h2 className="text-2xl font-bold headingFont mb-4">I LOVE COFFEE</h2>{ /* Added title "Menu" */}
     <br/>
     <br/>

    
    
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height="100%"
                objectFit="cover"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
    );
}
