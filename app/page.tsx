'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function WaitlistSection() {
  const searchParams = useSearchParams();
  const showThanks = searchParams.get('thanks');

  return (
    <section className="bg-emerald-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Be the first to know when CareCircle launches. We're building something special.
          </p>
          {showThanks ? (
            <div className="bg-emerald-700 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-xl font-medium">✓ You&apos;re on the list!</p>
              <p className="text-emerald-100 mt-2">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form action="https://formsubmit.co/akisato888@gmail.com" method="POST" className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input type="hidden" name="_subject" value="🚀 Waitlist Signup - CareCircle" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://carecircle-gray.vercel.app/?thanks=1" />
              <input type="hidden" name="product" value="carecircle" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-700">CareCircle</div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-700 hover:text-emerald-600 transition">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">How It Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition">Pricing</a>
        </nav>
      </header>

      {/* Hero Section - Before (Pain Points) */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            You shouldn't have to manage your parents' care alone
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Your siblings care. They just don't know what to do.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-700 italic">
              "Important info about Dad's medication gets buried in the family group chat"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📋</div>
            <p className="text-gray-700 italic">
              "I'm the only one managing Mom's appointments — my siblings care but don't know what to do"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-gray-700 italic">
              "We tried spreadsheets but only I update them"
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <strong className="text-emerald-800">From real caregivers on r/AgingParents:</strong><br />
            The burden doesn't fall on one person because others don't care.<br />
            It's because there's no coordination system.
          </p>
        </div>
      </section>

      {/* After (Vision) */}
      <section className="bg-emerald-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Imagine if everyone knew what's happening
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl mb-4">✓</div>
                <p className="text-xl">Everyone knows what's happening with Mom and Dad</p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚖️</div>
                <p className="text-xl">Care duties shared fairly, transparently</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🔔</div>
                <p className="text-xl">No more "I didn't know" or "I forgot"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge (Product) */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            CareCircle coordinates care between siblings
          </h2>
          <p className="text-xl text-gray-600">
            So no one burns out alone
          </p>
        </div>

        {/* Features */}
        <div id="features" className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Care Schedule</h3>
            <p className="text-gray-600">
              Who's visiting when? Who's handling doctor appointments? Everyone sees the plan.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Tracking</h3>
            <p className="text-gray-600">
              Log medications with confirmation. No more "Did someone give Dad his pills?"
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Timeline</h3>
            <p className="text-gray-600">
              Track doctor visits, diagnoses, and health changes in one shared history.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expense Splitting</h3>
            <p className="text-gray-600">
              Track care costs and split expenses fairly. No awkward money conversations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Alerts</h3>
            <p className="text-gray-600">
              Notify all family members instantly when something urgent happens.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Private & Secure</h3>
            <p className="text-gray-600">
              Your family's health information stays private and protected.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              How It Works
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create Your Care Circle</h3>
                  <p className="text-gray-600">
                    Invite your siblings and other family members. Everyone gets access to the same information.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Add Your Parents' Information</h3>
                  <p className="text-gray-600">
                    Set up medication schedules, doctor appointments, and care routines. Everything in one place.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Coordinate & Share the Load</h3>
                  <p className="text-gray-600">
                    Family members claim tasks, confirm completions, and stay updated. No more solo caregiving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You're Not Alone - Stats */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            You're Not Alone
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">53M</div>
              <p className="text-gray-600">Family caregivers in the US</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">89%</div>
              <p className="text-gray-600">Care for a relative or friend</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">24/7</div>
              <p className="text-gray-600">Often feels like you're always on call</p>
            </div>
          </div>
          <p className="text-xl text-gray-600">
            Millions of families are navigating this journey. <br />
            <strong className="text-gray-900">CareCircle makes it easier to do it together.</strong>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Fair Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade when you need more.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Basic scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Up to 5 family members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-600">Care timeline</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition">
                Get Started Free
              </button>
            </div>
            <div className="bg-emerald-600 text-white p-8 rounded-lg shadow-lg border-4 border-emerald-500 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-1">$10</div>
              <div className="text-emerald-100 mb-6">per family / month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Everything in Free, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Medication tracking & reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Expense splitting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Emergency alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Unlimited family members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <Suspense fallback={
        <section className="bg-emerald-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Waitlist</h2>
              <p className="text-xl text-emerald-100 mb-8">Loading...</p>
            </div>
          </div>
        </section>
      }>
        <WaitlistSection />
      </Suspense>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who is CareCircle for?
              </h3>
              <p className="text-gray-600">
                CareCircle is designed for families with multiple siblings or relatives sharing the responsibility of caring for aging parents or loved ones. If you've ever felt like you're managing everything alone while others want to help but don't know how, this is for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is my family's information secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your family's health information is private and protected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do my parents need to use the app?
              </h3>
              <p className="text-gray-600">
                No. CareCircle is designed for the caregivers—siblings and family members coordinating care. Your parents don't need to be tech-savvy or use the app at all.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I try it before committing?
              </h3>
              <p className="text-gray-600">
                Yes! Start with our free plan to get a feel for how it works. Pro features come with a 14-day free trial—no credit card required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if my siblings aren't tech-savvy?
              </h3>
              <p className="text-gray-600">
                CareCircle is designed to be simple and intuitive. We focus on the essentials—no overwhelming features. Most families find everyone can jump in within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-2xl font-bold text-white mb-4">CareCircle</div>
            <p className="text-gray-400 mb-8">
              Coordinate family care, together.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 CareCircle. Made with care for caregivers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
