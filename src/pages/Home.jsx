import React, { useState } from "react";
import Foodter from "../components/Foodter";
import food from "../assets/food.png";
import { ImFacebook2 } from "react-icons/im";
import { FaLine } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();
  const [secureCode, setSecureCode] = useState("");

  // const handleInputChange = (e) => {
  //   setSecureCode(e.target.value);
  // };

  // ฟังชั่นสำหรับการจัดการเมื่อมีการคลิกปุ่มเข้าใช้งาน
  const handleAccessAppClick = () => {
    // Validate
    if (secureCode === "") {
      // alert("กรุณากรอกรหัสเข้าใช้งาน");
      Swal.fire({
        icon: "error",
        iconColor: "#dc2626",
        title: "กรุณากรอกรหัสเข้าใช้งาน",
        showConfirmButton: true,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    // ตรวจสอบรหัสเข้าใช้งาน รหัสคือ 'SAU'
    if (secureCode.toUpperCase() === "SAU") {
      navigate("/show-all-kinkun");
      // หรือใช้ window.location.href = '/showllkinkub' ก็ได้
    } else {
      // alert("รหัสเข้าใช้งานไม่ถูกต้อง");
      Swal.fire({
        icon: "error",
        iconColor: "#dc2626",
        title: "รหัสเข้าใช้งานไม่ถูกต้อง",
        showConfirmButton: true,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#2563eb",
      });
    }
  };

  return (
    <div>
      <div className="w-10/12 mx-auto border border-gray-300 p-6 shadow-md mt-20 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Kinkun App (Supabase)
        </h1>
        <h1 className="text-2xl font-bold text-center text-blue-700">
          บันทึกการกิน
        </h1>
        <img src={food} alt="Food" className="block mx-auto w-30 mt-5" />

        <input
          type="text"
          placeholder="Enter secure code"
          value={secureCode}
          onChange={(e) => setSecureCode(e.target.value)}
          className="p-3 border border-gray-400 rounded-md w-full mt-5 w-full"
        />

        <button
          className="w-full bg-blue-700 p-3 rounded-md text-white mt-5 hover:bg-blue-500 cursor-pointer"
          onClick={handleAccessAppClick}
        >
          เข้าใช้งาน
        </button>

        <div className="mt-5 flex justify-center gap-5">
          <a href="#">
            <ImFacebook2 className="text-2xl text-blue-700 hover:text-blue-500" />
          </a>
          <a href="#">
            <FaLine className="text-2xl text-green-500 hover:text-green-400" />
          </a>
          <a href="#">
            <FaGithub className="text-2xl hover:text-gray-600 hover-text-black" />
          </a>
        </div>
      </div>

      <Foodter />
    </div>
  );
}
