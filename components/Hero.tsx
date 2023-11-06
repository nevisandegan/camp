import Image from "next/image";
import Button from "./Button";

function Hero() {
  return (
    <section className="py-10 pb-32 mb:gap-28  lg:py-20 xl:flex-row  max-contaienr padding-container flex flex-col">
      <div className="relative z-20 flex  flex-col xl:w-full">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute right-0 top-[-40px] w-10 lg:w-[50px]"
        />
        <h1 className="title bold-52 lg:bold-88 text-stone-600">
          {" "}
          کمپ کویری ساحلی جنگلی{" "}
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          ما می خواهیم در هر یک از سفرهای شما به دنبال رضایت از دیدن زیبایی فساد
          ناپذیر طبیعت باشیم. ما می توانیم فقط در برنامه به شما در ماجراجویی در
          سراسر جهان کمک کنیم.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  width={24}
                  height={24}
                  alt="start"
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-16 text-blue-70">
            ۱۹۸هزار نفر
            <span className="regular-16 lg:regular-20 ml-1"> عالی</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" text="دانلود اپلیکیشن" variant="btn_green" />
          <Button
            type="button"
            icon="/play.svg"
            text="چگونه کار میکند ؟ "
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="top-0 right-0 bg-pattern-2  w-full bg-cover bg-center xl:opacity-100 rounded  xl:h-96  h-screen absolute xl:relative">
        <div className="absolute lg:flex lg:left-20 lg:top-64 hidden flex-1 items-start top-[450px] xl:right-0 xl:top-1">
          <div className=" relativ lg:opacity-80  z-20 flex lg:h-full    w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-6 py-4">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="lg:regular-16 text-sm   text-gray-20">مکان</p>
                <Image
                  src="/close.svg"
                  alt="close"
                  className="hidden lg:block"
                  width={24}
                  height={24}
                />
              </div>
              <p className="lg:bold-20 text-sm text-white ">سد لفور</p>
            </div>

            <div className="flexBetween">
              <div className="flex-col">
                <p className="lg:regular-16 text-sm block text-gray-20">
                  فاصله
                </p>
                <p className="lg:bold-20 text-sm text-white">۱۷۳.۲ کیلومتر</p>
              </div>
              <div className=" flex-col hidden lg:flex">
                <p className="lg:regular-16 text-sm  text-gray-20 ">ارتفاع</p>
                <p className="lg:bold-20 text-white text-sm ">۲.۰۴ کیلومتر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden relative flex bg-stone-700 w-[200px] rounded-3xl py-4 px-5 text-white mt-14 h-[70px] z-20 ">
        <Image
          src="/close.svg"
          alt="close"
          className="absolute top-3 left-3"
          width={14}
          height={14}
        />
        <div className="flex-1">
          <p className=" text-sm   text-gray-20">مکان</p>
          <p className=" text-sm text-white ">سد لفور</p>
        </div>
        <div className="flex-1">
          <p className=" text-sm text-gray-20">فاصله</p>
          <p className=" text-sm text-white">۱۷۳.۲ کیلومتر</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
