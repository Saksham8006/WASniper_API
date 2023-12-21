import './Pricing.css'

const Pricing = () => {
  return (
    <>
      {/* Features */}
      <div className="overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="mx-auto max-w-xll mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold ">
              Solo, agency or team? We’ve got you covered.
            </h2>
          </div>
          {/* End Title */}
          <div className="relative xl:w-10/12 xl:mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                {/* Card */}
                <div className="p-4 relative z-10 bg-green-100/40 border rounded-xl md:p-10 ">
                  <h3 className="text-xl font-bold text-gray-800 ">
                    Professional
                  </h3>
                  <div className="text-sm text-gray-500">
                    Everything a small team needs.
                  </div>
                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 ">
                      $18
                    </span>
                    <span className="text-lg font-bold text-gray-800 ">
                      .00
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Up to 10 people
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Collect data
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Code extensibility
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-red-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Custom reports
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-red-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Product support
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-red-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500">Cancel anytime.</p>
                      <p className="text-sm text-gray-500">No card required.</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-[4px] border border-green-700 bg-white text-green-800 shadow-sm hover:bg-green-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Start Free Trial"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
              <div>
                {/* Card */}
                <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-green-100/40 border rounded-xl md:p-10  ">
                  <h3 className="text-xl font-bold text-gray-800 ">
                    Teams
                  </h3>
                  <div className="text-sm text-gray-500">
                    For growing businesses.
                  </div>
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-green-700 text-white py-1.5 px-3">
                    Most popular
                  </span>
                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 ">
                      $36
                    </span>
                    <span className="text-lg font-bold text-gray-800 ">
                      .99
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Up to 10 people
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Collect data
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Code extensibility
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Custom reports
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Product support
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-white text-green-600  ">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 ">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500">Cancel anytime.</p>
                      <p className="text-sm text-gray-500">No card required.</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent bg-green-600 text-white hover:bg-white hover:text-green-700 hover:border-green-800 disabled:opacity-50 disabled:pointer-events-none "
                        aria-label="Start Free Trial"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
            </div>
            {/* End Grid */}
            {/* SVG Element */}
            <div className="hidden md:block absolute top-0 end-0 translate-y-[-40px] translate-x-16">
              <svg
                className="w-16 h-auto text-orange-500 lines-animation"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                className="w-56 h-auto text-green-500 wave-animation"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
          </div>
        </div>
      </div>

    </>

  )
}

export default Pricing