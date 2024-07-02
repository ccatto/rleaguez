import { Organizationz1 } from './../../../../lib/definitions';
import { PrismaClient } from '@prisma/client';
// import { PrismaClientRustPanicError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api/v2/organization
export async function GET(request: Request) {
  const data = await prisma.organizationz1.findMany();
  return NextResponse.json(data);
}

// Handles POST requests to /api/v2/organization
export async function POST(request: Request) {
  const requestData = await request.json();
  try {
    const result = await prisma.organizationz1.create({
      data: {
        organization_name: requestData.organization_name,
        organization_color: requestData.organization_color,
        is_active: requestData.is_active,
        organization_owner: requestData.organization_owner,
      },
    });
    // console.log('insert completed');
    return NextResponse.json({
      message: 'Posted data Organizationz1 table yo!',
    });
  } catch (e) {
    console.log('we have an error YO v2 organization1 e === ', e);

    return NextResponse.json({ message: 'ERROR organization1 Post data' + e });
  }
}
