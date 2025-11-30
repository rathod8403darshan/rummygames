"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialsProps {
  lang: string;
}

export function Testimonials({ lang }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHindi = lang === "hi";

  const testimonials = [
    {
      name: isHindi ? "राहुल शर्मा" : "Rahul Sharma",
      location: isHindi ? "मुंबई, महाराष्ट्र" : "Mumbai, Maharashtra",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      text: isHindi
        ? "मैं पिछले 2 साल से रम्मी गेम्स ऐप पर खेल रहा हूँ। निकासी बहुत तेज़ है और गेमप्ले बेहतरीन है। मैंने अब तक ₹2 लाख से ज्यादा जीते हैं!"
        : "I've been playing on Rummy Games App for the past 2 years. Withdrawals are super fast and gameplay is excellent. I've won over ₹2 lakhs so far!",
      amount: "₹2,50,000",
    },
    {
      name: isHindi ? "प्रिया पटेल" : "Priya Patel",
      location: isHindi ? "अहमदाबाद, गुजरात" : "Ahmedabad, Gujarat",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      text: isHindi
        ? "सबसे अच्छी बात यह है कि यह 100% सुरक्षित है। मैं अपने पैसे बिना किसी चिंता के निकाल सकती हूँ। सपोर्ट टीम भी बहुत मददगार है।"
        : "The best thing is that it's 100% secure. I can withdraw my money without any worry. The support team is also very helpful.",
      amount: "₹1,80,000",
    },
    {
      name: isHindi ? "अमित कुमार" : "Amit Kumar",
      location: isHindi ? "दिल्ली" : "Delhi",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      text: isHindi
        ? "टूर्नामेंट बहुत रोमांचक हैं! मैंने हाल ही में एक बड़े टूर्नामेंट में ₹50,000 जीते। ऐप बहुत स्मूथ चलता है।"
        : "The tournaments are so exciting! I recently won ₹50,000 in a big tournament. The app runs very smoothly.",
      amount: "₹3,20,000",
    },
    {
      name: isHindi ? "सुनीता रेड्डी" : "Sunita Reddy",
      location: isHindi ? "हैदराबाद, तेलंगाना" : "Hyderabad, Telangana",
      image: "/images/testimonial-4.jpg",
      rating: 5,
      text: isHindi
        ? "मुझे यह ऐप बहुत पसंद है क्योंकि यह हिंदी में भी उपलब्ध है। गेमप्ले बहुत आसान है और मैं रोजाना खेलती हूँ।"
        : "I love this app because it's available in Hindi too. The gameplay is very easy and I play daily.",
      amount: "₹95,000",
    },
    {
      name: isHindi ? "विकास सिंह" : "Vikash Singh",
      location: isHindi ? "लखनऊ, उत्तर प्रदेश" : "Lucknow, Uttar Pradesh",
      image: "/images/testimonial-5.jpg",
      rating: 5,
      text: isHindi
        ? "बोनस और ऑफर बहुत अच्छे हैं। मैंने वेलकम बोनस से शुरुआत की और अब तक बहुत कुछ जीता है।"
        : "The bonuses and offers are great. I started with the welcome bonus and have won a lot so far.",
      amount: "₹1,50,000",
    },
    {
      name: isHindi ? "अनिता दास" : "Anita Das",
      location: isHindi ? "कोलकाता, पश्चिम बंगाल" : "Kolkata, West Bengal",
      image: "/images/testimonial-6.jpg",
      rating: 5,
      text: isHindi
        ? "24/7 गेमप्ले का मतलब है कि मैं कभी भी खेल सकती हूँ। ग्राफिक्स बहुत अच्छे हैं और ऐप बहुत तेज़ है।"
        : "24/7 gameplay means I can play anytime. The graphics are great and the app is very fast.",
      amount: "₹2,10,000",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {isHindi ? "खिलाड़ी क्या कहते हैं" : "What Players Say"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isHindi
              ? "10 मिलियन+ खुश खिलाड़ी हमारे साथ जीत रहे हैं"
              : "10 Million+ Happy Players Winning With Us"}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 ${
                index === currentIndex
                  ? "transform scale-105 shadow-2xl border-blue-300"
                  : "hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">{isHindi ? "जीता" : "Won"}</div>
                  <div className="text-lg font-bold text-green-600">{testimonial.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-white/90">{isHindi ? "खिलाड़ी" : "Players"}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/90">{isHindi ? "रेटिंग" : "Rating"}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">₹500Cr+</div>
              <div className="text-white/90">{isHindi ? "जीत" : "Winnings"}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">{isHindi ? "सपोर्ट" : "Support"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

