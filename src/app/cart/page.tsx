"use client"

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Beat 1', price: 50, bpm: 120, license: 'MP3' },
    { id: 2, title: 'Beat 2', price: 80, bpm: 130, license: 'WAV' },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="mb-4">
            Hope you found what you were looking for! Make sure you've got the right license and file type you wanted. If you're looking for something specific, and nothing here quite fits right, let me know what you're going for, and we can pivot to a custom track. See the home page for details.
          </p>
          <p>
            Once you complete your purchase, you'll receive your files via email. For stems and exclusive tracks, I will follow up with you ASAP to help finalize your order and get you everything you need. Once you've recorded your tracks, reach out for mixing and mastering services for the best final result. Thank you for choosing Russ A Buss beats!!
          </p>
        </CardContent>
      </Card>
      {cartItems.map((item) => (
        <Card key={item.id} className="mb-4">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>BPM: {item.bpm}</p>
              <p>License: {item.license}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">${item.price}</p>
              <Button variant="destructive" size="sm">Remove</Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-right mt-8">
        <p className="text-2xl font-bold mb-4">Total: ${total}</p>
        <Button size="lg">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;