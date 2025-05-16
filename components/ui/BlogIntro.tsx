import React from 'react';
import Link from 'next/link';

export default function BlogIntro() {
  return (
    <section className="bg-white rounded-3xl shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">Welcome to My Blog</h2>
      <p className="text-gray-600 mb-4">
        Explore insights, tutorials, and stories on software engineering, design, and technology. All blogs are written in markdown and rendered just like Notion pages. Browse the latest posts or dive into a specific topic!
      </p>
      <Link href="/blogs" className="text-blue-600 hover:underline font-semibold">
        View All Blogs
      </Link>
    </section>
  );
} 