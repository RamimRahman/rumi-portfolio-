import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  Download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>,
  Student: <><path d="m2 8 10-5 10 5-10 5-10-5Zm4 3v6c4 3 8 3 12 0v-6m4-3v9"/></>,
  Union: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-2-4"/></>,
  LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/></>,
  Facebook: <path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-4 0-5 2-5 5v2H7v4h3v8"/>,
  Instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
  GitHub: <><path d="M9 20c-5 1-5-3-7-3m14 5v-4c0-1-.3-2-1-2 4-.5 6-2 6-6 0-2-.5-3-2-4 0-1 0-3-.5-4-2 0-4 2-4 2a14 14 0 0 0-6 0S6 2 4 2c-.5 1-.5 3 0 4-1.5 1-2 2-2 4 0 4 2 5.5 6 6-.7.5-1 1-1 2v4"/></>,
  TikTok: <path d="M14 3v12a5 5 0 1 1-5-5v4a1 1 0 1 0 1 1V3h4c0 3 3 5 6 5v4c-2 0-4-1-6-2"/>,
  Threads: <><path d="M20 7c-1-4-4-5-8-5C6 2 3 6 3 12s3 10 9 10c5 0 9-3 9-7 0-5-5-7-9-6-5 1-5 7-1 7 5 0 5-11 0-10-1 0-2 .5-3 1"/></>,
  WhatsApp: <><path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z"/><path d="M8 7c-2 3 2 8 6 9l2-2-3-2-1 1-2-2 1-1-3-3Z"/></>,
  Email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
  Teams: <><circle cx="15" cy="5" r="2"/><circle cx="21" cy="7" r="1"/><path d="M12 10h7v7a4 4 0 0 1-7 2m8-9h3v6a3 3 0 0 1-3 3"/><rect x="1" y="8" width="11" height="11" rx="1"/><path d="M4 11h5m-2.5 0v5"/></>,
  Zoom: <><rect x="2" y="5" width="13" height="14" rx="3"/><path d="m15 10 7-4v12l-7-4"/></>,
  Phone: <path d="m7 3 3 5-3 2c1 3 3 5 6 6l2-3 5 3c0 4-2 6-5 5C8 19 3 14 2 7 1 4 3 2 7 3Z"/>,
};

export function ContactIcon({ name }: { name: string }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{icons[name] ?? icons.Email}</svg>;
}

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { name: "Facebook", href: "https://www.facebook.com/rumi.rahman056" },
  { name: "Instagram", href: "https://www.instagram.com/rumi_rahman56/?hl=en" },
  { name: "GitHub", href: "https://github.com/RamimRahman" },
  { name: "TikTok", href: "https://www.tiktok.com/@fatmoongear?is_from_webapp=1&sender_device=pc" },
  { name: "Threads", href: "https://www.threads.com/@rumi_rahman56" },
];

export const emailLinks = [
  { name: "Personal Gmail", address: "ramim3.1416@gmail.com", icon: "Email" },
  { name: "Student email", address: "s4333763@lsbu.ac.uk", icon: "Student" },
  { name: "Students’ Union", address: "rumi@lsbsu.org", icon: "Union" },
  { name: "Teams email", address: "e413136@lsbu.ac.uk", icon: "Teams" },
];

export const zoomRequest = "mailto:ramim3.1416@gmail.com?subject=" + encodeURIComponent("Book a Zoom meeting with Rumi") + "&body=" + encodeURIComponent("Hi Rumi,\n\nI'd like to book a Zoom meeting.\n\nPreferred date and time (including time zone):\nTopic:\n\nPlease confirm a time and send a Zoom invitation.\n");
