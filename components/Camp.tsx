import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

function CampSite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} 
  bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div
        className="flex h-full flex-col
       items-start justify-between p-6 lg:px-20 lg:py-10"
      >
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-gray-20">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter  gap-6">
          <span className="flex rtl-direction -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                className="
              inline-block h-10 w-10 rounded-full
              "
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

function Camp() {
  return (
    <section
      className="2xl:max-container relative 
   flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb-20"
    >
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start
     gap-8 overflow-x-auto lg:h-[400] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="کمپ جنگلی "
          subtitle="جنگل  های آمل"
          peopleJoined="+۵۰ عضویت"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="کمپ جنگلی "
          subtitle="جنگل  های رامسر"
          peopleJoined="+۵۰ عضویت"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-40 text-white">
            راه نمیدونی و حس میکنی گم شدی؟
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            یکی از مهم ترین دغدغه های مسافران به مکان های بکر و یا کوهنوردان گم
            شدن در مسیر است.
            <br />
            برای همین موضو و نگرانی است که وب سایت کمپ تاسیس شده است.
            <br />
            با وجود کمپ در کنار خود هیچگاه در مسیر گم نخواهید شد و با خیاب راحت
            به یه قله صعود کنید یا درون جنگل بروید.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}

export default Camp;
