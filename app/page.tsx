import MainPage from "./components/main/MainPage";

export default function Home() {
  return (
    <main className={'w-screen h-screen relative'}>
      <div
        className={'flex flex-col h-[850px] gap-20'}
      >
          <MainPage/>
      </div>
    </main>
  )
}
