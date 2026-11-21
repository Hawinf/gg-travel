'use client';
import {useState} from 'react';
import type {Dictionary} from '@/lib/i18n';
export default function ContactForm({t}:{t:Dictionary}){
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setStatus('sending');const formElement=e.currentTarget;const form=new FormData(formElement);const payload={name:String(form.get('name')||''),email:String(form.get('email')||''),message:String(form.get('message')||'')};try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('send failed');setStatus('sent');formElement.reset();}catch{setStatus('error');}}
 return <form className="contact-form" onSubmit={submit}><label>{t.name}<input name="name" placeholder={t.name} required maxLength={100}/></label><label>{t.email}<input name="email" type="email" placeholder={t.email} required maxLength={200}/></label><label>{t.message}<textarea name="message" placeholder={t.message} required minLength={5} maxLength={5000}/></label><button className="button button-dark" type="submit" disabled={status==='sending'}>{status==='sending'?t.sending:t.send} ↗</button><small className="muted">{t.emailNote}</small>{status==='sent'&&<p className="form-success" role="status">{t.sent}</p>}{status==='error'&&<p className="form-error" role="alert">{t.sendError}</p>}</form>
}
