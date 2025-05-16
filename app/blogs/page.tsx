import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const BLOGS_DIR = path.join(process.cwd(), 'blogs');
  const blogFolders = fs.readdirSync(BLOGS_DIR).filter((name) => {
    const fullPath = path.join(BLOGS_DIR, name);
    return fs.statSync(fullPath).isDirectory();
  });
  return blogFolders.map((folder) => ({ blogname: folder }));
}
export default async function BlogPage({ params }: { params: { blogname: string } }) {
  if (!params || !params.blogname) {
    return <div className="p-8">Invalid blog parameters.</div>;
  }

  const { blogname } = params;
  const htmlPath = path.join(process.cwd(), 'blogs', blogname, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    return <div className="p-8">Blog not found.</div>;
  }
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  return (
    <main className="w-full mx-auto p-6">
      <article
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}