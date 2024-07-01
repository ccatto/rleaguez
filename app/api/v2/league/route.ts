import { PrismaClient } from '@prisma/client';
import { PrismaClientRustPanicError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  // console.log('request === ', request.league_id);
  const contactData = await prisma.league1.findMany();
  return NextResponse.json(contactData);
  // return NextResponse.json({ message: "Hello World" });
}

// // Handles GET requests to /api/v2/league/[league_id]
// export async function GET(request: Request) {
//   console.log('inside get by id')
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
//   // const league_id = params.id;
//   console.log('league_id', searchParams);
//   // ...
//   // console.log('request === ', request.league_id);
//   const contactData = await prisma.league1.findMany();
//   return NextResponse.json(contactData);
//   // return NextResponse.json({ message: "Hello World" });
// }

// Handles POST requests to /api
export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log('inside route requestData v2 === ', requestData);
  // console.log('requestData.leagueName === ', requestData.league_name);
  try {
    const result = await prisma.league1.create({
      data: {
        // league_id: requestData.id,
        league_name: requestData.league_name,
        league_color: requestData.league_color,
        is_active: requestData.is_active,
        league_sport: requestData.league_sport,
      },
    });

    console.log('insert completed');
    return NextResponse.json({ message: 'Posted data league1 table yo!' });
  } catch (e) {
    console.log('we have an error YO v2 e === ', e);

    return NextResponse.json({ message: 'ERROR Post data' + e });
  }
}
