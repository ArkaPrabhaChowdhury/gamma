import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log(email);

    //create token data
    const tokenData = {
      email: email,
      password: password,
    };
    //create token
    const token = await jwt.sign(
      tokenData,
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDU4NjM2MCwiaWF0IjoxNjk0NTg2MzYwfQ.mB16CBm0UHvSKppvBdhzFmyunId4m1ApCjPcLMIZoqw",
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
