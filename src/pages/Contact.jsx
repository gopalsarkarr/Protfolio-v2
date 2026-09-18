import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { profileData } from '../data/profile';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto pb-16 space-y-10 font-mono">
      
      <SectionTitle
        tag="get_in_touch"
        title="Contact Me"
        subtitle="Have an opportunity, collaboration idea, or question? Feel free to reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info Cards (Left Column) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Email</p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xs sm:text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(profileData.email, 'email')}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Copy email"
              type="button"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Phone</p>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xs sm:text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(profileData.phone, 'phone')}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Copy phone number"
              type="button"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* GitHub link card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">GitHub</p>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  github.com/gopalsarkarr
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn link card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">LinkedIn</p>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/gopal-sarkar
                </a>
              </div>
            </div>
          </div>

          {/* Location card */}
          <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-3.5 text-xs text-slate-600 font-mono">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{profileData.location}</span>
          </div>

        </div>

        {/* Contact Form (Right Column) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xl">
            
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Send a Message</h3>
              <p className="text-xs text-slate-500 mt-1">
                I respond promptly to professional queries, recruitment, and project inquiries.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-lg bg-blue-50 border border-blue-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 text-blue-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-slate-900">{formData.name}</strong>. I will get back to you at <strong className="text-blue-600">{formData.email}</strong> as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', message: '' });
                    setIsSubmitted(false);
                  }}
                  type="button"
                  className="mt-4 inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 border border-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-700 font-semibold mb-1.5">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Gopal Sarkar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-slate-700 font-semibold mb-1.5">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yoursgopal2@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-700 font-semibold mb-1.5">
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
