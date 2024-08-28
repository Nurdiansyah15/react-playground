import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { GrCycle } from "react-icons/gr";
import { ImQuotesLeft } from "react-icons/im";
import { AiFillSound } from "react-icons/ai";

const baseUrlSurat = "https://equran.id/api/v2/surat";
const baseUrlTafsir = "https://equran.id/api/v2/tafsir";

export default function RandomVerses() {
  const [loading, setLoading] = useState(true);

  const [dataSurat, setDataSurat] = useState({
    namaSurat: "",
    nomorSurat: "",
    jumlahAyat: 0,
    ayatSekarang: 0,
    ayat: [
      {
        teksArab: "",
        teksIndonesia: "",
      },
    ],
    tafsir: [
      {
        teks: "",
      },
    ],
  });

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  const fetchSurat = async (noSurat) => {
    await axios.get(baseUrlSurat + "/" + noSurat).then((response) => {
      const noAyat =
        Math.floor(Math.random() * (response.data.data.jumlahAyat - 1 + 1)) + 1;
      setDataSurat(() => {
        return {
          namaSurat: response.data.data.namaLatin,
          nomorSurat: response.data.data.nomor,
          jumlahAyat: response.data.data.jumlahAyat,
          ayatSekarang: noAyat,
          ayat: response.data.data.ayat,
        };
      });
    });
    await axios.get(baseUrlTafsir + "/" + noSurat).then((response) => {
      setDataSurat((prev) => {
        return { ...prev, tafsir: response.data.data.tafsir };
      });
    });
  };

  const displayElements = async () => {
    setShowFirst(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowSecond(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowThird(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowFourth(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  useEffect(() => {
    const randomSurat = Math.floor(Math.random() * (114 - 1 + 1)) + 1;
    fetchSurat(randomSurat);
    setLoading(false);
  }, []);

  useEffect(() => {
    displayElements();
  }, [dataSurat]);

  const playAudio = () => {
    const audio = new Audio(dataSurat.ayat[dataSurat.ayatSekarang].audio["01"]);
    audio.play();
  };

  console.log(dataSurat);

  return (
    <>
      <PageTitle title="Random Verses" />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-blue-950">
        <div className="w-[70%] h-[65%] flex flex-col bg-blue-900 rounded-md p-20 items-center justify-center relative">
          <div className="p-5 rounded-full bg-white absolute top-[-30px] left-20">
            <ImQuotesLeft size={24} />
          </div>
          {showFirst && (
            <p className="text-4xl font-[Arab] text-white text-center leading-loose mb-10 transition-all duration-3000 opacity-0 animate-fade-in">
              {dataSurat?.ayat[dataSurat.ayatSekarang].teksArab}
            </p>
          )}
          {showSecond && (
            <p className="text-2xl font-[Poppins] text-white text-center italic mb-5 transition-all duration-3000 opacity-0 animate-fade-in">
              {dataSurat?.ayat[dataSurat.ayatSekarang].teksIndonesia}
            </p>
          )}
          {showThird && (
            <div className="w-full max-h-[300px] flex flex-col overflow-y-scroll items-center mb-5 transition-all duration-3000 opacity-0 animate-fade-in">
              <p className="text-sm font-[Poppins] text-white text-justify-end">
                {dataSurat?.tafsir[dataSurat.ayatSekarang].teks}
              </p>
            </div>
          )}
          {showFourth && (
            <div className="w-full flex justify-center transition-all duration-3000 opacity-0 animate-fade-in">
              <p className="text-sm font-[Poppins] text-slate-300 italic">
                Quran Surat {dataSurat?.namaSurat} Ayat{" "}
                {dataSurat?.ayatSekarang}: {dataSurat?.jumlahAyat}
              </p>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center my-4">
          <button
            onClick={() => {
              setShowFirst(false);
              setShowSecond(false);
              setShowThird(false);
              setShowFourth(false);
              const randomSurat = Math.floor(Math.random() * (114 - 1 + 1)) + 1;
              fetchSurat(randomSurat);
            }}
            className="bg-blue-900 w-12 h-12 p-2 rounded-full justify-center items-center flex mr-3"
          >
            <GrCycle color="white" size={24} />
          </button>
          <button
            onClick={() => playAudio()}
            className="bg-blue-900 w-12 h-12 p-2 rounded-full justify-center items-center flex"
          >
            <AiFillSound color="white" size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
