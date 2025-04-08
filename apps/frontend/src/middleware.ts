// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  try {
     verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // paths to protect
}
