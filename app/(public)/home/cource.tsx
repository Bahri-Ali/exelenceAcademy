import Image from 'next/image';
export default function Cource() {
  return (
    <div
      className="
        w-[296px] sm:w-[340px] md:w-[420px] lg:w-[296px]
        h-[471px]
        bg-[hsla(0,0%,96%,1)]
        rounded-2xl shadow-lg overflow-hidden
        hover:shadow-2xl
        transition-shadow duration-300 font-sans
        flex flex-col
      "
    >
      <div className="relative w-[296px] h-[471px] sm:h-56 md:h-64">
        <Image src="/coures.png" alt="UI UX Design Course" fill className="object-cover" priority />

        <div className="absolute -bottom-5 left-1/2  -translate-x-1/2 flex items-center bg-white rounded-full shadow-md px-3 py-1">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6  bg-(--primary) rounded-full border-2 border-white " />
            ))}
          </div>
          <span className="ml-2 text-sm font-semibold text-gray-700 whitespace-nowrap">+40 طالب</span>
        </div>
      </div>

      <div className="flex-grow w-[296px] h-[471px] pt-8 pb-4 px-5 text-center sm:text-left">
        <h2 className="font-raleway font-extrabold text-(--primary) text-[20px] leading-[150%] tracking-[0.39px] text-center">
          أساسيات تصميم واجهة المستخدم
        </h2>

        <div className="flex flex-wrap justify-center sm:justify-between items-center text-gray-600 mt-2 text-sm sm:text-base">
          <p>
            <span className="font-semibold">المدة:</span> 8 أسابيع
          </p>
          <p>1 - 28 أوت 2025</p>
        </div>

        <p className="font-cairo font-normal text-(--tages) text-[14px] leading-[160%] tracking-[0px] text-center">
          تعلم أهم مبادئ تصميم واجهات المستخدم باستخدام مع تطبيقات عملية ومشاريع حقيقية.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            2000 <span className="text-sm text-gray-500">DA</span>
          </div>
          <button className="w-full sm:w-auto bg-(--primary) cursor-pointer text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-200">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
}
