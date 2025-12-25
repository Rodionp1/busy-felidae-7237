"use client";

import React from "react";
import OrangeCircle from "./orange-circle";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="mb-8 w-full flex justify-center py-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Orange Circle Demo</h1>
      </header>
      <section className="flex flex-col items-center gap-6">
        <OrangeCircle size={120} />
        <p className="text-lg text-gray-700">This is a perfectly round, orange circle rendered with Tailwind CSS.</p>
      </section>
      <footer className="mt-auto w-full py-4 bg-white text-center text-gray-400 text-sm border-t">
        &copy; {new Date().getFullYear()} Orange Circle Demo
      </footer>
    </main>
  );
}
