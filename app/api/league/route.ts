import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const contactData = await prisma.league.findMany();
  return NextResponse.json(contactData);
  // return NextResponse.json({ message: "Hello World" });
}


// Handles POST requests to /api
export async function POST(request: Request) {
  const requestData = await request.json();
  console.log('inside route requestData === ', requestData);
  try {
    await prisma.league.create({
      data: {
        leagueColor: requestData['name'],
      }
    });
    // await prisma.league.create({
    //   data: {
    //     leagueName: 'newLeague', // requestData['LeagueName'],
    //     // leagueColor: requestData['name'],
    //     // isActive: requestData['userNote'],
    //     // leagueSport: requestData['leagueSport'],
    //   },
    // });
    console.log('insert completed');
    return NextResponse.json({ message: 'Post data' });
  } catch (e) {
    console.log('we have an error YO e === ', e);

    return NextResponse.json({ message: 'ERROR Post data' });
  }
}