import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fantasy AI Helper</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Fantasy AI Helper</h1>
        <p>이곳은 당신의 소설 아이디어를 정리하는 AI 도우미입니다.</p>
      </main>
    </div>
  );
}
