import { PrismaClient } from '@prisma/client';
import { PrismaClientRustPanicError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const contactData = await prisma.league1.findMany();
  return NextResponse.json(contactData);
  // return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  const requestData = await request.json();
  console.log('inside route requestData === ', requestData);
  try {
    const result = await prisma.league1.create({
      data: {
        league_id: requestData.id,
        league_name: requestData.leagueName,
        league_color: requestData.leagueColor,
        is_active: requestData.isActive,
        league_sport: requestData.leagueSport,
      },
    });

    console.log('insert completed');
    return NextResponse.json({ message: 'Posted data league1 table yo!' });
  } catch (e) {
    console.log('we have an error YO e === ', e);

    return NextResponse.json({ message: 'ERROR Post data' + e });
  }
}
