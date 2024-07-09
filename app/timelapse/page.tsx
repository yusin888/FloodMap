import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flood Watch</title>
        <meta name="description" content="Set up flood alerts based on water levels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{
          fontFamily: '"Public Sans", "Noto Sans", sans-serif',
        }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111518]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
              </div>
              <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Flood Watch</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Map</a>
                <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Timelapse</a>
                <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Alerts</a>
                <a className="text-[#111518] text-sm font-medium leading-normal" href="#">Help</a>
              </div>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#111518]" data-icon="BellSimple" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Set up an alert</p>
                  <p className="text-[#60778a] text-sm font-normal leading-normal">Get notified when the water level exceeds a certain threshold at a specific location</p>
                </div>
              </div>
              <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111518] text-base font-medium leading-normal pb-2">Location</p>
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#60778a] p-4 text-base font-normal leading-normal"
                  >
                    <option value="one">Search for a location</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>
              <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111518] text-base font-medium leading-normal pb-2">Threshold (meters)</p>
                  <input
                    placeholder="Water level"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60778a] p-4 text-base font-normal leading-normal"
                    value=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111518] text-base font-medium leading-normal pb-2">Start time</p>
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#60778a] p-4 text-base font-normal leading-normal"
                  >
                    <option value="one">Select start time</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>
              <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111518] text-base font-medium leading-normal pb-2">End time</p>
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#60778a] p-4 text-base font-normal leading-normal"
                  >
                    <option value="one">Select end time</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>
              <div className="flex px-4 pb-3 pt-1">
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[#0058ff] text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                  <div className="text-white" data-icon="BellSimple" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"
                      ></path>
                    </svg>
                  </div>
                  Set up alert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
