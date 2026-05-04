"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function AboutFaq({ items }: { items: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="faq-list faq-list-interactive">
      {items.map((item, idx) => (
        <div key={idx} className={`faq-item glass ${openFaq === idx ? 'faq-open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            aria-expanded={openFaq === idx}
          >
            <span>{item.q}</span>
            {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {openFaq === idx && (
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
