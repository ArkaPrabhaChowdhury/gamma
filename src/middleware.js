import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname
  const token=request.cookies.get("token")
  if (path === '/admin' && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }
  if(path==='/admin/dashboard' && !token){
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin',
    '/admin/dashboard',
  ]
}