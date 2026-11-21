import {NextResponse} from 'next/server';
export async function POST(request:Request){
 try{
  const {name,email,message}=await request.json();
  if(typeof name!=='string'||typeof email!=='string'||typeof message!=='string'||name.trim().length<1||message.trim().length<5||name.length>100||email.length>200||message.length>5000||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:'Invalid form'}, {status:400});
  const key=process.env.RESEND_API_KEY;const from=process.env.RESEND_FROM_EMAIL;
  if(!key||!from)return NextResponse.json({error:'Email service is not configured'}, {status:503});
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:['hello@notepaths.com'],reply_to:email,subject:`New website enquiry from ${name.trim()}`,text:`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`})});
  if(!response.ok)return NextResponse.json({error:'Email provider rejected the message'}, {status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Unable to process request'}, {status:400});}
}
