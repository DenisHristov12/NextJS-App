import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NextJS Is A Great Framework</Link>
        </li>
        <li>
          <Link href="/news/else">Something else</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
