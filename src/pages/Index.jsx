import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Horse Haven</h1>
        <p className="text-lg text-gray-700">
          Discover the beauty and majesty of horses.
        </p>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At Horse Haven, we are dedicated to the care and appreciation of
              horses. Our mission is to provide a sanctuary for these majestic
              creatures and to educate the public about their importance.
            </p>
          </CardContent>
        </Card>
        <Separator className="my-8" />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Horse Riding Lessons</li>
              <li>Equine Therapy</li>
              <li>Horse Boarding</li>
              <li>Community Events</li>
            </ul>
          </CardContent>
        </Card>
        <Separator className="my-8" />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Have questions or want to learn more? Reach out to us at
              contact@horsehaven.com or call us at (123) 456-7890.
            </p>
            <Button variant="outline" className="mt-4">
              Get in Touch
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className="w-full max-w-4xl mx-auto text-center py-4">
        <p className="text-sm text-gray-600">
          &copy; 2023 Horse Haven. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;