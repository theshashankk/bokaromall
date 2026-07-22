import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Middleware handles auth; if authenticated, redirect to /admin/dashboard
  redirect('/admin/dashboard');
}
