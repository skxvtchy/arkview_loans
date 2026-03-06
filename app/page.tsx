"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "../components/modules/hero";
import { Navbar } from "../components/modules/navbar";
import { Footer } from "../components/modules/footer";
import { Pricing } from "../components/modules/pricing";
import { Questions } from "../components/modules/questions";
import { Process } from "../components/modules/process";
import { Testimonials } from "../components/modules/testimonials";
import {
  ArrowRight, BarChart3, Command, Database, Lock, ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        {/* <Testimonials /> */}
        <Process />
        {/* <Pricing /> */}
        <Questions />
      </main>
      <Footer />
    </div>
  );
}