import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import {
  doc,
  collection,
  query,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import _ from "lodash";
export const Scan = () => {
  const [data, setData] = useState<any>();
  const [scanning, setScanning] = useState(false);
  const [customers, setCustomers] = useState<any[]>([]);
  useEffect(() => {
    const q = query(collection(db, "customers"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setCustomers(data);
    });
    return unsubscribe;
  }, []);
  const onCancel = () => {
    setScanning(false);
  };
  const onResult = (qrCode: string) => {
    const doc = _.find(customers, (x) => x.data.qrCode === qrCode);
    if (!doc) {
      alert("Không tìm thấy thông tin khách hàng");
      return;
    }
    setScanning(false);
    setData(doc);
  };
  const onDelivery = async (id: string) => {
    const docRef = doc(db, "customers", `${id}`);
    await updateDoc(docRef, {
      taken: true,
      waiting: false,
    });
    setData(undefined);
  };
  const onTaken = async (id: string) => {
    const docRef = doc(db, "customers", `${id}`);
    await updateDoc(docRef, {
      waiting: true,
    });
    setData(undefined);
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-3 row-gap-8 md:grid-cols-3">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{`${
            _.filter(customers, (x) => x.data.taken).length
          }`}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Đã lấy
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{`${
            _.filter(customers, (x) => x.data.waiting).length
          }`}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Chờ lấy
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{`${customers.length}`}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Tổng
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            setScanning(true);
          }}
          disabled={scanning}
          className={`hover:text-white m-4 text-gray-900 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  bg-amber-400 focus:shadow-outline focus:outline-none mt-4`}
        >
          Quét QR
        </button>
        {scanning && (
          <button
            onClick={() => {
              onCancel();
            }}
            className="hover:text-white m-4 text-gray-900 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  bg-gray-500  focus:shadow-outline focus:outline-none mt-4"
          >
            Huỷ
          </button>
        )}
      </div>
      {!scanning && data && (
        <div className="bg-white shadow-md rounded my-2">
          <table className="text-left w-full border-collapse">
            {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Tên
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Sđt
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-6 border-b border-grey-light">{`${data.data.name}`}</td>
                <td className="py-2 px-6 border-b border-grey-light">{`${data.data.phoneNumber}`}</td>
                <td className="flex justify-end py-2 px-2 border-b border-grey-light">
                  {data.data.taken ? (
                    <strong className="px-4 text-red-600">Đã nhận</strong>
                  ) : (
                    <button
                      onClick={() => {
                        onTaken(data.id);
                      }}
                      disabled={scanning}
                      className={`text-white inline-flex items-center justify-center h-18 px-4 font-medium tracking-wide  transition duration-200 rounded shadow-md  bg-green-600 focus:shadow-outline focus:outline-none `}
                    >
                      Nhận
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {!scanning && !data && (
        <div className="bg-white shadow-md rounded my-2">
          <table className="text-left w-full border-collapse">
            {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Tên
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
              </tr>
            </thead>
            <tbody>
              {_.map(
                _.filter(customers, (x) => x.data.waiting),
                (customer) => {
                  return (
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-2 px-6 border-b border-grey-light">{`${customer.data.name}`}</td>
                      <td className="flex justify-end py-2 px-6 border-b border-grey-light">
                        <button
                          onClick={() => {
                            onDelivery(customer.id);
                          }}
                          disabled={scanning}
                          className={`text-white inline-flex items-center justify-center h-18 px-4 font-medium tracking-wide  transition duration-200 rounded shadow-md  bg-green-600 focus:shadow-outline focus:outline-none `}
                        >
                          Giao
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
      {scanning && (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(res) => {
            if (res) {
              onResult(res.getText());
            }
          }}
        />
      )}
    </div>
  );
};
