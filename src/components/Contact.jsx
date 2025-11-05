import { Mail, Phone, Copy, MessageSquare, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ t, data }) {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(data.email);
      } else {
        const ok = fallbackCopy(data.email);
        if (!ok) throw new Error('copy failed');
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const waNumber = (data.whatsapp || '').replace(/\D/g, '');

  const actions = [
    data.whatsapp
      ? {
          key: 'wa',
          href: `https://wa.me/${encodeURIComponent(waNumber)}?text=${encodeURIComponent('Hi Mohamed!')}`,
          label: t('contact.whatsapp'),
          icon: MessageSquare,
          as: 'link',
        }
      : null,
    data.phone
      ? { key: 'ph', href: `tel:${data.phone}`, label: t('contact.phone'), icon: Phone, as: 'link' }
      : null,
    { key: 'em', label: t('contact.email'), icon: Mail, as: 'email' },
  ].filter(Boolean);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{t('contact.title')}</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {actions.map((item) => {
          if (item.as === 'email') {
            return (
              <div key={item.key} className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                <a
                  href={`mailto:${data.email}`}
                  className="flex-1 inline-flex items-center gap-2 text-sm text-neutral-100 hover:text-white"
                >
                  <Mail size={16} /> {item.label}
                </a>
                <button
                  onClick={handleCopy}
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-800/60 px-2 py-1 text-xs text-neutral-100 hover:bg-neutral-800"
                >
                  <Copy size={14} /> {copied ? t('contact.copied') : t('contact.copy')}
                </button>
              </div>
            );
          }
          const Icon = item.icon;
          return (
            <a
              key={item.key}
              href={item.href}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-800"
            >
              <Icon size={16} /> {item.label}
            </a>
          );
        })}
      </div>

      {/* Social links */}
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-neutral-300 text-sm">
          <div>{data.name}</div>
          <div className="text-neutral-400">{data.role} · {data.location}</div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a className="inline-flex items-center gap-1 text-neutral-300 hover:text-white" href={data.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={14} />
          </a>
          <a className="inline-flex items-center gap-1 text-neutral-300 hover:text-white" href={data.fiverr} target="_blank" rel="noreferrer">
            Fiverr <ExternalLink size={14} />
          </a>
          <a className="inline-flex items-center gap-1 text-neutral-300 hover:text-white" href={data.portfolio} target="_blank" rel="noreferrer">
            Portfolio <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-900 pt-6 text-xs text-neutral-500">
        © {new Date().getFullYear()} {data.name}. {t('footer.rights')}
      </div>
    </section>
  );
}
