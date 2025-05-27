import { TestimonialType, FeatureType, FAQType } from '../types';

export const features: FeatureType[] = [
  {
    id: 1,
    title: "Native Mac App",
    description: "Built exclusively for macOS with Apple Silicon optimization. No browser tabs or web apps - just pure, native performance.",
    icon: "Desktop",
  },
  {
    id: 2,
    title: "Real-time Writing Assistant",
    description: "Get instant grammar, style, and clarity suggestions as you write. Catch typos, improve word choice, and enhance readability.",
    icon: "Shield",
  },
  {
    id: 3,
    title: "Context-Aware AI",
    description: "Our AI understands your writing context and tone, providing suggestions that match your intended style and audience.",
    icon: "Mindfulness",
  },
  {
    id: 4,
    title: "Accessibility First",
    description: "Dyslexia-friendly fonts, text-to-speech, and customizable interface for your specific needs. Writing tools for everyone.",
    icon: "Accessibility",
  },
  {
    id: 5,
    title: "Advanced Writing Analytics",
    description: "Track readability scores, writing trends, and vocabulary usage. Get personalized suggestions to improve your writing style.",
    icon: "History",
  },
  {
    id: 6,
    title: "Local Processing",
    description: "All AI processing happens on your Mac. Your writing never leaves your device unless you choose to share it.",
    icon: "Lock",
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Technical Writer at Apple",
    content: "Inkline catches errors Grammarly misses, and being a native Mac app means it's always there when I need it, even offline. The privacy focus is a huge plus for our confidential documentation.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Software Engineer with ADHD",
    content: "The native Mac app is a game-changer. No more distracting browser tabs or web interfaces. Just open and write. The AI suggestions are spot-on and help me maintain consistent documentation.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Privacy Researcher",
    content: "Finally, a Grammarly alternative that respects privacy. The local AI processing means my sensitive research stays on my machine. The writing suggestions are just as good, if not better.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export const faqs: FAQType[] = [
  {
    id: 1,
    question: "How does Inkline compare to Grammarly?",
    answer: "Inkline offers all the core features of Grammarly (grammar checking, style suggestions, tone detection) but as a native Mac app with offline capabilities. Our AI runs locally on your device, providing better privacy and faster performance. Plus, you get a distraction-free interface designed specifically for macOS.",
  },
  {
    id: 2,
    question: "Does Inkline work offline?",
    answer: "Yes! Unlike browser-based tools, Inkline works 100% offline with local AI processing. All grammar checking, style suggestions, and writing analytics work without an internet connection.",
  },
  {
    id: 3,
    question: "What types of writing does Inkline check?",
    answer: "Inkline checks grammar, spelling, punctuation, style, and tone across all types of writing: emails, documents, code documentation, creative writing, academic papers, and more. Our AI adapts to different writing contexts and style requirements.",
  },
  {
    id: 4,
    question: "How accurate are the AI suggestions?",
    answer: "Our AI model is trained on millions of high-quality writing samples and matches or exceeds the accuracy of leading tools like Grammarly. Plus, being context-aware means suggestions are more relevant to your specific writing style and purpose.",
  },
  {
    id: 5,
    question: "What makes Inkline's Mac app special?",
    answer: "Inkline is built specifically for macOS with native performance, system-wide availability, and Apple Silicon optimization. You get a true Mac experience with features like Split View, Handoff, and seamless integration with other Mac apps.",
  },
];