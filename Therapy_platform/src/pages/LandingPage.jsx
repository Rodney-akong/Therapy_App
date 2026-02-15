import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-green-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          You Don’t Have to Go Through It Alone.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Confidential, affordable online therapy — accessible anywhere in Nigeria.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Book a Session
          </button>

          <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl transition duration-300">
            Talk to Someone Now
          </button>
        </div>
      </section>


      {/* PROBLEM SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Mental health is real. And it matters.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-600">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            Many people struggle in silence.
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            Therapy is often misunderstood.
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            Access to professionals is limited.
          </div>
        </div>

        <p className="mt-10 text-xl font-semibold text-green-600">
          We're changing that.
        </p>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="font-semibold text-xl mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up securely in less than 2 minutes.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="font-semibold text-xl mb-2">Match with a Therapist</h3>
              <p className="text-gray-600">
                Get connected to a licensed professional.
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="font-semibold text-xl mb-2">Start Healing</h3>
              <p className="text-gray-600">
                Chat, call, or video session from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          We Help With
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Anxiety",
            "Depression",
            "Relationship Issues",
            "Academic Stress",
            "Trauma",
            "Career Confusion"
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {service}
            </div>
          ))}
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="bg-green-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your healing journey can start today.
        </h2>

        <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
          Get Started
        </button>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Therapy Platform. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>

    </div>
  );
}
