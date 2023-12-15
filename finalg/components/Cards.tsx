import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image'; // Import from 'next/image'

export default function Cards() {
  const list = [
    {
      title: "Espresso",
      img: "/Espresso.jpeg",
      price: "$5.50",
    },
    {
      title: "True Mocha",
      img: "/True Mocha.jpeg",
      price: "$15.70",
    },
    {
      title: "Cappuccino",
      img: "/Cappuccino.jpeg",
      price: "$10.00",
    },
    {
      title: "Latte",
      img: "/Latte.jpeg",
      price: "$5.30",
    },
    {
      title: "Long Black",
      img: "/Long Black.jpeg",
      price: "$3.00",
    },
    {
      title: "Iced Espresso",
      img: "/Iced Espresso.jpeg",
      price: "$8.00",
    },
    {
      title: "Cold Coffee Creme",
      img: "/Cold Coffee Creme.jpeg",
      price: "$12.20",
    },
    {
      title: "Brookie Creme",
      img: "/Brookie Creme.jpeg",
      price: "$12.20",
    },
    {
      title: "Peanut Butter Creme",
      img: "/Peanut Butter Creme.jpeg",
      price: "$12.20",
    },
    {
      title: "Chocolate Cake",
      img: "/Chocolate Cake.jpeg",
      price: "$12.20",
    },
    {
      title: "Strawberry Cake",
      img: "/Strawberry Cake.jpeg",
      price: "$12.20",
    },
    {
      title: "Basque Cheesecake",
      img: "/Basque Cheesecake.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold specialOfferFont mb-4">I LOVE COFFEE</h2>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                src={item.img} // Ensure the path is correct and starts with '/'
                alt={item.title}
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                objectFit="cover"
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
