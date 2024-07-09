import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: 'Public Sans, Noto Sans, sans-serif' }}>
      <div className="flex flex-col h-full">
        <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="w-10 h-10">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">FloodMap</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full items-stretch rounded-xl h-full">
                <div className="flex items-center justify-center pl-4 rounded-l-xl bg-gray-200 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input placeholder="Search" className="flex w-full min-w-0 flex-1 rounded-xl text-gray-900 focus:outline-none border-none bg-gray-200 h-full px-4" />
              </div>
            </label>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-xl h-10 px-4 bg-blue-500 text-white text-sm font-bold">
                <span className="truncate">Sign up</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-xl h-10 px-4 bg-gray-200 text-gray-900 text-sm font-bold">
                <span className="truncate">Log in</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div>
              <div className="p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/10604b0e-cbf2-4e81-8828-4bfbdd4a3c66.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-5xl">
                      Real-time flood mapping
                    </h1>
                    <h2 className="text-white text-sm font-normal md:text-base">
                      Explore and analyze the latest flood data from Kenya, updated every 6 hours.
                    </h2>
                  </div>
                  <Link href="/map">
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-xl h-10 px-4 bg-blue-500 text-white text-sm font-bold md:h-12 md:px-5">
                    <span className="truncate">Explore map</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-gray-900 text-[32px] font-bold leading-tight tracking-light md:text-4xl md:font-black md:tracking-tighter max-w-[720px]">
                    Features
                  </h1>
                  <p className="text-gray-900 text-base font-normal leading-normal max-w-[720px]">
                    Explore the full power of FloodMap's flood data mapping service.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-xl h-10 px-4 bg-blue-500 text-white text-sm font-bold md:h-12 md:px-5">
                  <Link href='/timelapse'>
                  <span className="truncate">Set Alerts</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/475ab769-4066-4ff7-9a81-6d662427731c.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/5c7ddabd-85e5-4cfe-9e2a-1d8ac6da58ac.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/b0979657-49f0-4193-b926-67f17f27e5a8.png")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
