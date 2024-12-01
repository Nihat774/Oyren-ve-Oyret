import ScrollAnimation from "../../Components/animations/ScrollAnimation";

function AboutPage() {
  return (
    <>
      <ScrollAnimation>
        <div className="bg-neutral-900 ">
          <div className="footer-container flex flex-[3]">
            <section className="footer-page">
              <p className="font-bold text-[1.7rem] pb-1 ">Haqqımızda</p>
              <p className="text-[1.12rem]">
                “Öyrən və Öyrət” platforması təhsil sahəsində innovativ bir
                yanaşma ilə fərqlənən, biliklərin paylaşıldığı və yeniliklərin
                öyrənildiyi bir mərkəzdir. Burada hər yaş qrupundan olan
                istifadəçilər üçün geniş məlumat bazası və müxtəlif mövzularda
                tədris resursları mövcuddur. Platformanın əsas məqsədi
                cəmiyyətimizdə təhsilin daha əlçatan, interaktiv və faydalı
                olmasını təmin etməkdir. “Öyrən və Öyrət” təkcə bir öyrənmə
                məkanı deyil, həm də biliklərin qarşılıqlı mübadiləsi üçün geniş
                imkanlar təqdim edən bir sosial məkandır. Müəllimlər, tələbələr
                və mütəxəssislər bu platformada öz biliklərini paylaşaraq yeni
                nəsil üçün güclü təhsil bazası yaradırlar. Hər bir mövzu üzrə
                xüsusi təlimatlar, dərs vəsaitləri və interaktiv vasitələr ilə
                dəstəklənir. Bizim platformamızda həm nəzəri, həm də praktiki
                təlimlər mövcuddur ki, istifadəçilər daha effektiv şəkildə yeni
                biliklər qazansınlar. Bundan əlavə, istifadəçilər öz aralarında
                müzakirələr apararaq, öyrənmə prosesini daha əyləncəli və mənalı
                hala gətirirlər.
              </p>
            </section>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default AboutPage;
