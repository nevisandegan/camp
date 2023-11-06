import Image from "next/image";

function Guide() {
  return (
    <div>
      <section className="flexCenter flex-col">
        <div className="padding-container max-container w-full pb-24">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="regular-18 -mt-1 mb-3 text-green-50">
            ما اینجا برای شما هستیم
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-52 xl:max-w-[380px] title">
              آسان ترین مسیر سفر
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px] ">
              فقط با اپلیکیشن کمپ دیگر گم نمی‌شوید ، زیرا ما در حال حاضر از
              نقشه‌های آفلاین پشتیبانی می‌کنیم که نیاز به اتصال اینترنتی در این
              زمینه وجود نخواهد داشت. دوستان و اقوام خود را به تفریح در کویر و
              یا رسیدن به بالای کوه دعوت کنید.
            </p>
          </div>
        </div>
        <div className="flexCenter max-container relative w-full ">
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2xl:rounded-5xl"
          />

          <div
            className="absolute flex bg-white py-8 pl-5 
          pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
          >
            <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            />
            <div className="flexBetween flex-col ">
              <div className="flex w-full flex-col ">
                <div className="flexBetween gap-5 w-full">
                  <p className="regular-16 text-gray-20">مقصد</p>
                  <p className="bold-16 text-green-50 ">۴۸ دقیقه </p>
                </div>
                <p className="bold-20 mt-2">جواهرده</p>
              </div>

              <div className="flex w-full flex-col ">
                <p className="regular-16 text-gray-20">شروع مسیر  </p>
                <h4 className="bold-20 mt-2 whitespace-nowrap">رودسر</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guide;
