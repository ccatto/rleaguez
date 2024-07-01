// import { SplitIncludingDelimiters } from './../../../../../node_modules/@eslint/eslintrc/node_modules/type-fest/ts41/delimiter-case.d';
import { PrismaClient } from '@prisma/client';
import { PrismaClientRustPanicError } from '@prisma/client/runtime/library';
import { isNumberCatto } from '../../../../components/Utils/utils';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request, { params }) {
  console.log('inside get league by id params.slug=== ', params.slug);
  const slug = parseInt(params.slug);
  if (isNumberCatto(slug)) {
    console.log('inside its number');
    const data = await prisma.league1.findUnique({
      where: {
        league_id: slug,
      },
    });
    return NextResponse.json(data);
  } else {
    console.log(' not a number');
    return NextResponse.json('not a number');
  }

  // return NextResponse.json({ message: "Hello World" });
}
