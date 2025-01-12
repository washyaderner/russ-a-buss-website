"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="h-32"
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;