import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Ujjwal Blog</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline text-gray-700">Home</Link>
        <Link href="/blog" className="hover:underline text-gray-700">Blog</Link>
      </div>
    </nav>
  );
}
