import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { project, problem, designs, timeline, budget } = body;

    // Validate required fields
    if (!project || !problem) {
      return NextResponse.json(
        { error: 'Project type and problem description are required' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zeptomail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Fusivox Contact Form" <noreply@bullfaucet.com>`,
      to: 'fusivox@gmail.com',
      subject: `New Contact Form Submission - ${project}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #5B5CF0; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #5B5CF0; margin-bottom: 5px; }
            .value { margin-top: 5px; }
            hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📋 Project Type</div>
                <div class="value">${project}</div>
              </div>
              
              <div class="field">
                <div class="label">❓ Problem to Solve</div>
                <div class="value">${problem.replace(/\n/g, '<br/>')}</div>
              </div>
              
              ${designs ? `
              <div class="field">
                <div class="label">🎨 Design Status</div>
                <div class="value">${designs}</div>
              </div>
              ` : ''}
              
              ${timeline ? `
              <div class="field">
                <div class="label">⏰ Timeline</div>
                <div class="value">${timeline}</div>
              </div>
              ` : ''}
              
              ${budget ? `
              <div class="field">
                <div class="label">💰 Budget Range</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              
              <hr/>
              <p style="font-size: 12px; color: #666; text-align: center;">
                This message was sent from your website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Project Type: ${project}
        Problem: ${problem}
        ${designs ? `Designs: ${designs}` : ''}
        ${timeline ? `Timeline: ${timeline}` : ''}
        ${budget ? `Budget: ${budget}` : ''}
        
        ---
        This message was sent from your website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}