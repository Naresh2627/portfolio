import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Delivered ahead of schedule and explained every decision in plain language. I would hire again.",
      author: "Client name",
      position: "Founder at Company"
    },
    {
      quote: "The most dependable engineer on our team. Clean pull requests, and always willing to help.",
      author: "Colleague name",
      position: "Engineering Manager"
    }
  ];

  return (
    <section id="testimonials" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>What people say</h2>
        <p className="sub">Kind words from clients and teammates.</p>
        <div className="quotes">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index}>
              <p>"{testimonial.quote}"</p>
              <footer>{testimonial.author}, {testimonial.position}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
