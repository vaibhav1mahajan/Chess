// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode('local') // same as what your backend uses

async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload
  } catch (e) {
    console.error('JWT verification failed:', e)
    return null
  }
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/signup', request.url))
  }

  const decoded = await verifyJWT(token)

  if (!decoded) {
    return NextResponse.redirect(new URL('/signup', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/game',],
}
