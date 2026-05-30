import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      preferredContact,
      project, 
      problem, 
      designs, 
      timeline, 
      budget 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !preferredContact || !project || !problem) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

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
      subject: `New Contact Form Submission from ${name} - ${project}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #5B5CF0; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: bold; color: #5B5CF0; margin-bottom: 15px; border-bottom: 2px solid #5B5CF0; padding-bottom: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { margin-top: 5px; color: #333; }
            hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Contact Information</div>
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Preferred Contact:</div>
                  <div class="value">${preferredContact}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">📋 Project Details</div>
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${project}</div>
                </div>
                <div class="field">
                  <div class="label">Problem to Solve:</div>
                  <div class="value">${problem.replace(/\n/g, '<br/>')}</div>
                </div>
                ${designs ? `
                <div class="field">
                  <div class="label">Design Status:</div>
                  <div class="value">${designs}</div>
                </div>
                ` : ''}
                ${timeline ? `
                <div class="field">
                  <div class="label">Timeline:</div>
                  <div class="value">${timeline}</div>
                </div>
                ` : ''}
                ${budget ? `
                <div class="field">
                  <div class="label">Budget Range:</div>
                  <div class="value">${budget}</div>
                </div>
                ` : ''}
              </div>
              
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
        
        CONTACT INFORMATION:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Contact: ${preferredContact}
        
        PROJECT DETAILS:
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