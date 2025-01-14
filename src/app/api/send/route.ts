import { EmailTemplate } from '../../../components/emails/template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const data = await resend.emails.send({
      from: 'Product Requirements <onboarding@resend.dev>',
      to: ['imhogen22@gmail.com'],
      subject: `New Product Requirements Form - ${formData.organizationName}`,
      react: EmailTemplate({ formData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
