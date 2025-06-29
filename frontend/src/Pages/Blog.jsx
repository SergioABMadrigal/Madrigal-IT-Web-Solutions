const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Wordpress Blog</h1>
      <div className="relative w-full flex justify-center" style={{ maxWidth: '1200px' }}>
        <iframe
          src="https://madrigalit.wordpress.com/"
          title="Madrigal IT Blog"
          width="100%"
          height="1700"
          className="rounded-lg border border-gray-300 shadow-lg"
          style={{ minHeight: '60vh' }}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
        ></iframe>
        <a
          href="https://madrigalit.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 10, background: 'transparent', cursor: 'pointer' }}
          aria-label="Open blog in new tab"
        />
      </div>
    </div>
  );
}

export default Blog;
