export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#ffffff',
      color: '#111111',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '480px', width: '100%' }}>
        <h1 style={{ 
          fontSize: '1.75rem', 
          fontWeight: '500', 
          letterSpacing: '-0.02em',
          marginBottom: '1rem' 
        }}>
          My Project
        </h1>
        
        <p style={{ 
          fontSize: '0.95rem', 
          lineHeight: '1.6', 
          color: '#666666', 
          marginBottom: '2rem' 
        }}>
          シンプルなNext.jsサイトです。必要なコンテンツをここに追加していきます。<br>
        お砂糖とお醤油
        </p>

        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid #eee',
          display: 'flex',
          gap: '1.5rem',
          fontSize: '0.875rem'
        }}>
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#111111', textDecoration: 'none', borderBottom: '1px solid #111111' }}
          >
            Vercel ↗
          </a>
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#666666', textDecoration: 'none' }}
          >
            Next.js Docs ↗
          </a>
        </div>
      </div>
    </main>
  );
}