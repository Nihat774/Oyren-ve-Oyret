import ScrollAnimation from "../../Components/animations/ScrollAnimation";

function RegularPage() {
  return (
    <>
      <ScrollAnimation>
        <div className="bg-neutral-900">
          <div className="footer-container">
            <section className="footer-page ">
              <p className="font-bold text-[1.7rem] pb-1">
                Şərtlər və Qaydalar
              </p>
              <p className="text-[1.12rem]">
                Şərtlər və Qaydalar “Öyrən və Öyrət” platformasına qoşulan hər
                bir istifadəçi qeyd olunan şərtləri qəbul etmiş sayılır.
                İstifadəçilər, platformada qeydiyyatdan keçməklə şəxsi
                məlumatlarının toplanmasına və emal olunmasına razılıq verir.
                Platformada paylaşılan bütün məlumatlar və məzmunlar müəllif
                hüquqlarına uyğun şəkildə istifadə edilməlidir. İstifadəçilər
                yalnız özlərinə məxsus və doğruluğu təmin edilmiş məlumatları
                paylaşmalıdırlar. Platformada təhqir, təhdid və qeyri-etik
                davranışlar qadağandır. İstifadəçilər şifrə və hesab
                məlumatlarının təhlükəsizliyinə görə özləri cavabdehdirlər.
                “Öyrən və Öyrət” istifadəçilərin şəxsi məlumatlarını üçüncü
                tərəflərlə paylaşmama öhdəliyi daşıyır. Platformada tədris
                materiallarının istifadəsi yalnız şəxsi təhsil məqsədləri üçün
                nəzərdə tutulub. İstifadəçilərin yayımladığı materialların
                müəllif hüquqlarının qorunması onların öz məsuliyyətindədir.
                İstifadəçilər “Öyrən və Öyrət” platformasında yüklədikləri
                materialların qanunlara uyğun olduğunu təsdiq edir.
              </p>
            </section>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default RegularPage;
