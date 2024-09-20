import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

interface ContactReq extends Request {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export async function POST(req: ContactReq, res: NextResponse<ResponseData>) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject,
      html: `Name: ${name}<br />
      Email: ${email}<br />
      Subject: ${subject}<br />
      Message: ${message}
      `,
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
