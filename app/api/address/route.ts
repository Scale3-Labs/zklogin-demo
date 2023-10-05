import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { deriveUserSalt } from "@/lib/salt";
import { jwtToAddress } from "@mysten/zklogin";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email") as string;
  const session = await getServerSession(authOptions);

  // If the user is not authenticated, return an error
  if (!session) {
    return NextResponse.json(
      {
        error: "Not authenticated",
      },
      { status: 401 }
    );
  }

  // If the user is not the same as the one we're checking, return an error
  if (session?.user?.email !== email) {
    return NextResponse.json(
      {
        error: "Not authorized",
      },
      { status: 401 }
    );
  }

  // get the user from the database
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // get the account from the database
  const account = await prisma.account.findFirst({
    where: {
      userId: user?.id,
    },
  });

  // get the id_token from the account
  const id_token = account?.id_token;

  // get the salt from the id_token
  const salt = deriveUserSalt(id_token as string);

  // get the address from the id_token and salt
  const address = jwtToAddress(id_token as string, salt);

  return NextResponse.json(
    {
      address,
    },
    { status: 200 }
  );
}
