import React from "react";
import { QRCode } from "react-qrcode-logo";
import { useSearchParams } from "react-router-dom";

export const Result = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name")); // ▶ URLSearchParams {}
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phoneNumber");
  const time = searchParams.get("time");

  const qrCode = `${time}_Cinghutang_CoGiang_${name}_${phoneNumber}`;

  return (
    <>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://serving.photos.photobox.com/48670267162a01b0e08f3d8ce4e0e97e200034181dff2bfcc9d344e14d17650a92697360.jpg"
        nonce="6ijBtW0p"
      ></script>
      <div>
        <img
          src="https://i.postimg.cc/hjpyk0dt/z3440002957964-d02b39ed43fac0c014f4cf13569dcf00.png"
          className="object-cover w-full"
          alt=""
        />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-amber-500">
              Grand Opening
            </p>
          </div>
          <h2 className="max-w-lg md:text-center mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>
            Các bước nhận ngay 1000 ly trà sữa miễn phí nhân dịp khai trương
          </h2>
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Bước 1</p>
                  <p className="text-gray-700">
                    Lưu ngay mã QR Code của bạn (tránh để lộ mã QR Code)
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Bước 2</p>
                  <p className="text-gray-700 mb-4">
                    Tham gia ngay vào nhóm Zalo và like fanpage{" "}
                    <strong>Cing Hu Tang Cô Giang </strong> để nhận ưu đãi từ{" "}
                    <strong> Cing Hu Tang</strong>
                    <br></br>
                    <a href="https://zalo.me/g/mhpoig911">
                      <button className="hover:text-white text-gray-900 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  bg-amber-400 hover:bg-gray-900 focus:shadow-outline focus:outline-none mt-4">
                        Tham gia ngay
                      </button>
                    </a>
                  </p>
                  <div
                    className="fb-like"
                    data-href="https://www.facebook.com/Cing-Hu-Tang-C%C3%B4-Giang-%C4%90%C3%A0-N%E1%BA%B5ng-106869878688170"
                    data-width="120"
                    data-layout="standard"
                    data-action="like"
                    data-size="large"
                  ></div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Bước 3</p>
                  <p className="text-gray-700">
                    Đến <strong>Cing Hu Tang Cô Giang </strong> khoảng thời gian
                    từ <strong>19h - 21h </strong> ngày{" "}
                    <strong>01/06/2022</strong> tại địa chỉ:
                    <strong> 07 Cô Giang - Hải Châu - Đà Nẵng </strong>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">Bước 4</p>
                  <p className="text-gray-700">
                    Đưa mã QRCode cho nhân viên <strong>Cing Hu Tang</strong> và
                    nhận ngay 01 ly{" "}
                    <strong className="bg-amber-400 rounded p-1">
                      sữa tươi trân châu đường đen
                    </strong>{" "}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-6 text-gray-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-lg font-bold">
                    Lắc đều và thưởng thức hương vị tuyệt vời cùng{" "}
                    <strong className="bg-amber-400 rounded p-1">
                      {" "}
                      CING HU TANG
                    </strong>
                  </p>
                  <p className="text-gray-700" />
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <QRCode
                size={400}
                logoWidth={100}
                eyeRadius={8}
                logoImage={
                  "https://i.ibb.co/chyvyFm/271066258-466963968275579-4533857853530287890-n.jpg"
                }
                value={qrCode}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
