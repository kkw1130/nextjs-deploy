// app/page.tsx
export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-6xl'>
        제 첫 번째로 배포하는 Next.js 웹사이트입니다!
      </h1>
      <p className='text-4xl'>Vercel로 연결해서 배포해요!</p>
    </div>
  );
}
