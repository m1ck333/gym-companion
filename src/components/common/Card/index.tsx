import React from "react";

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
