import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111518]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Flood Map</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex gap-2">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Dashboard</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div className="text-[#111518]" data-icon="Bell" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/28acf548-333b-402a-9bdb-f882995a4ed1.png")',
                }}
              ></div>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Floods in Kenya
                </p>
              </div>
              <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Rainfall and river level data is used to create a map of areas that are likely to be affected by floods
              </h3>
              <div className="@container flex flex-col h-full flex-1">
                <div className="flex flex-1 flex-col @[480px]:px-4 @[480px]:py-3">
                  <div
                    className="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5 @[480px]:rounded-xl @[480px]:px-8 @[480px]:pb-6 @[480px]:pt-8"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/maps/fc1616c5-66a6-4573-b4ae-6070661738e6.png")',
                    }}
                  >
                    <label className="flex flex-col min-w-40 h-12">
                      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                          className="text-[#60778a] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
                          data-icon="MagnifyingGlass"
                          data-size="24px"
                          data-weight="regular"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#60778a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                          value=""
                        />
                      </div>
                    </label>
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex flex-col gap-0.5">
                        <button className="flex size-10 items-center justify-center rounded-t-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                          <div className="text-[#111518]" data-icon="Plus" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-b-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                          <div className="text-[#111518]" data-icon="Minus" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                              <path
                                d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <button className="bg-white flex items-center justify-center rounded-full size-10 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                        <div className="text-[#111518]" data-icon="CrosshairSimple" data-size="24px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                              d="M202.54,133.57a80.29,80.29,0,0,1-7,25.88L187.7,151.6a64.1,64.1,0,0,0,0-47.2l7.88-7.85a80.29,80.29,0,0,1,7,25.88h17.05A95.89,95.89,0,0,0,192,74.72V57.67a80.31,80.31,0,0,1,25.88,7L209.6,68.3a64.1,64.1,0,0,0-47.2,0L154.54,63.12a80.31,80.31,0,0,1,25.88-7V74.72A95.89,95.89,0,0,0,57.67,192h-17a80.31,80.31,0,0,1,7-25.88L68.3,154.54a64.1,64.1,0,0,0,0,47.2L63.12,192a80.31,80.31,0,0,1-7-25.88h-17A95.89,95.89,0,0,0,74.72,192h17a80.29,80.29,0,0,1-7,25.88L51.06,240a95.89,95.89,0,0,0,52.94-14.32v17A80.29,80.29,0,0,1,57.67,192H40.62a95.89,95.89,0,0,0,14.32,52.94v17A80.31,80.31,0,0,1,192,199.28v17A95.89,95.89,0,0,0,240,144.32h-17a80.29,80.29,0,0,1-7-25.88ZM128,104a24,24,0,1,1-24,24A24.07,24.07,0,0,1,128,104Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-5 text-4xl font-black leading-tight tracking-[-0.033em] text-[#111518]">
                Regions in Kenya
              </div>
              <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Central
                  </a>
                </Link>
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Coast
                  </a>
                </Link>
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Eastern
                  </a>
                </Link>
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Nairobi
                  </a>
                </Link>
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true-eastern" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    North Eastern
                  </a>
                </Link>
                <Link href="/https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Nyanza
                  </a>
                </Link>
                <Link href="/rift-https://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=true" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Rift Valley
                  </a>
                </Link>
                <Link href="/wehttps://code.earthengine.google.com/57a10f84e5d4b10db8569dc5514071ff?accept_repo=users%2Fujavalgandhi%2FEnd-to-End-Projects&hideCode=truestern" legacyBehavior>
                  <a className="flex h-48 flex-col items-center justify-center rounded-lg bg-gray-200 p-4 text-xl font-semibold text-black no-underline hover:bg-gray-300">
                    Western
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
