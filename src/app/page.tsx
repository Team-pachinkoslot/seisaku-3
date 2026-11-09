export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, #0070f3, #f000ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Next.js & Vercel Deploy Ready
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '600px', marginBottom: '2rem' }}>
        このプロジェクトはVercelへ即時デプロイ可能な標準構造で作成されています。
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', backgroundColor: '#ededed', color: '#09090b', fontWeight: '600', textDecoration: 'none' }}
        >
          Vercel Docs
        </a>
      </div>
    </main>
  );
}