import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.css";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { customerRef, db } from "./firebase";

type Inputs = {
  name: string;
  phoneNumber: string;
};

function Info() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const checkQuery = query(
      customerRef,
      where("phoneNumber", "==", data.phoneNumber)
    );
    const checkExistData = await getDocs(checkQuery);
    if (checkExistData.size > 0) {
      alert("Số điện thoại đã đăng ký, vui lòng nhập số điện thoại khác");
      return;
    }
    const time = new Date().getTime();
    const docRef = await addDoc(collection(db, "customers"), {
      name: `${data.name}`,
      phoneNumber: `${data.phoneNumber}`,
      qrCode: `${time}_Cinghutang_CoGiang_${data.name}_${data.phoneNumber}`,
      taken: false,
    });
    if (docRef.id) {
      navigate(
        `/result/?name=${data.name}&phoneNumber=${data.phoneNumber}&time=${time}`
      );
    }
    console.log("Document written with ID: ", docRef.id);
  };
  useEffect(() => {
    if (errors.name) {
      alert("Vui lòng điền tên");
      return;
    }
    if (errors.phoneNumber) {
      alert("Vui lòng điền số điện thoại");
      return;
    }
  }, [errors]);

  return (
    <div>
      <img
        src="https://i.imgur.com/J9pv3sV.png"
        className="object-cover w-full"
        alt=""
      />
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center md:px-8 max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-amber-500">
                Grand Opening
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                <span className="relative">Tặng</span>
              </span>{" "}
              1000 ly trà sữa MIỄN PHÍ nhân dịp khai trương
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Nhận ngay 01 ly{" "}
              <strong className="bg-amber-400 rounded p-1">
                sữa tươi trân châu đường đen
              </strong>{" "}
              miễn phí khi tham gia chương trình khai trương tại{" "}
              <strong>Cing Hu Tang Cô Giang </strong>
              <br></br>Địa chỉ:
              <strong> 07 Cô Giang - Hải Châu - Đà Nẵng </strong>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full mb-4 md:flex-row"
          >
            <input
              placeholder="Tên"
              {...register("name", {
                required: true,
              })}
              className={`flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-400" : ""
              }`}
            />

            <input
              placeholder="Số điện thoại"
              {...register("phoneNumber", {
                required: true,
                pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
              })}
              type="tel"
              className={`flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline ${
                errors.phoneNumber ? "border-red-400" : ""
              }`}
            />
            <button
              type="submit"
              className="hover:text-white text-gray-900 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-full bg-amber-400 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Nhận ngay
            </button>
          </form>
          <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
            Chương trình diễn ra vào khung giờ <strong>19-21h</strong> từ ngày{" "}
            <strong>01/06/2022</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
