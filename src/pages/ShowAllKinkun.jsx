import React from "react";
import food from "../assets/food.png";
import Footer from "../components/Foodter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ShowAllKinkun() {
  const [kinkuns, setKinkuns] = useState([]);

  useEffect(() => {
    try {
      // ดึงข้อมูลการกินทั้งหมดจาก Supabase
      const fetchKinkuns = async () => {
        const { data, error } = await supabase
          .from("kinkun_tb")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          alert("เกิดข้อผิดพลาดในการดึงข้อมูลการกิน กรุณาลองใหม่อีกครั้ง");
          console.log("Fetch error: ", error);
        } else {
          setKinkuns(data);
        }
      };
      fetchKinkuns();
    } catch (ex) {
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลการกิน กรุณาลองใหม่อีกครั้ง");
      console.log("Fetch error: ", ex);
    }
  }, []);

  return (
    <div>
      <div className="w-10/12 mx-auto border border-gray-300 p-6 shadow-md mt-20 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Kinkun App (Supabase)
        </h1>
        <h1 className="text-2xl font-bold text-center text-blue-700">
          ข้อมูลบันทึกการกิน
        </h1>
        <img src={food} alt="Food" className="block mx-auto w-20 mt-5" />

        {/* ปุ่มเพิ่ม */}
        <div className="my-8 flex justify-end">
          <Link
            to="/add-kinkun"
            className="bg-blue-700 p-3 rounded text-white hover:bg-blue-800"
          >
            เพิ่มการกิน
          </Link>
        </div>

        {/* ตารางแสดงข้อมูลทั้งหมด */}
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-700 p-2">รูปภาพ</th>
              <th className="border border-gray-700 p-2">กินอะไร</th>
              <th className="border border-gray-700 p-2">กินที่ไหน</th>
              <th className="border border-gray-700 p-2">กินไปเท่าไหร่</th>
              <th className="border border-gray-700 p-2">วันไหน</th>
              <th className="border border-gray-700 p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {kinkuns.map((kinkun) => (
              <tr key={kinkun.id} className="hover:bg-gray-100 text-center">
                <td className="border border-gray-700 p-2 text-center">
                  {kinkun.food_image_url == "" ||
                  kinkun.food_image_url == null ? (
                    "-"
                  ) : (
                    <img
                      src={kinkun.food_image_url}
                      alt="รูปอาหาร"
                      className="w-20 mx-auto"
                    />
                  )}
                </td>
                <td className="border border-gray-700 p-2">
                  {kinkun.food_name}
                </td>
                <td className="border border-gray-700 p-2">
                  {kinkun.food_where}
                </td>
                <td className="border border-gray-700 p-2">
                  {kinkun.food_howmuch}
                </td>
                <td className="border border-gray-700 p-2">
                  {new Date(kinkun.created_at).toLocaleDateString("th-TH")}
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  <Link
                    to={`/edit-kinkun/${kinkun.id}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    แก้ไข | ลบ
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
