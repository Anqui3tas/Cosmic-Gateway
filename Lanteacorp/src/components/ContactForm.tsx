import { useState } from 'react';
import Toast from './Toast';

export default function ContactForm(){
  const [toast, setToast] = useState('');
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('/api/contact.php', { method:'POST', body:data });
    const json = await res.json().catch(() => ({ ok:false }));
    setToast(json.ok ? 'Message sent' : 'Error sending message');
    form.reset();
  };
  return (
    <>
      <form onSubmit={submit} className="flex flex-col gap-2 max-w-md">
        <input name="name" placeholder="Name" required className="p-2 text-black" />
        <input type="email" name="email" placeholder="Email" required className="p-2 text-black" />
        <textarea name="message" placeholder="Message" required className="p-2 text-black"></textarea>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="px-4 py-2 bg-nebula-cyan text-space-base">Send</button>
      </form>
      {toast && <Toast message={toast} />}
    </>
  );
}