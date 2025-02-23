import React, { useContext } from "react";
import HomeCarousel from "../compenents/HomeCarousel";
import { addressTr, grups, TURKCE } from "../api/dataTr";
import { UserContext } from "../contexts/UserContext";
import {
  FaGlobe,
  FaTruck,
  FaBoxes,
  FaShieldAlt,
  FaLeaf,
  FaList,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const Home = () => {
  const { language } = useContext(UserContext);

  const features = [
    {
      title:
        language === TURKCE
          ? "Worldwide Fast & Reliable Supply Chain"
          : "Dünya Çapında Hızlı ve Güvenilir Tedarik Zinciri",
      description:
        language === TURKCE
          ? "UTA GROUP has a wide supply network around the world, providing uninterrupted service to its customers with fast and reliable delivery times. Any material you need is provided at the time you need it and at an affordable cost."
          : "UTA GROUP, dünya çapında geniş bir tedarik ağına sahip olup, hızlı ve güvenilir teslimat süreleri ile müşterilerine kesintisiz hizmet sunmaktadır. İhtiyaç duyduğunuz her türlü malzeme, ihtiyacınız olan zamanda ve uygun maliyetle temin edilmektedir.",
      icon: FaGlobe,
    },
    {
      title:
        language === TURKCE
          ? "Customized Product Supply"
          : "Özelleştirilmiş Ürün Tedariki",
      description:
        language === TURKCE
          ? "We also supply customized products for specific industries, according to the special requests of our customers. We provide solutions for every sector by offering products suitable for engineering, design and production requirements."
          : "Müşterilerimizin özel talepleri doğrultusunda, belirli endüstriler için özelleştirilmiş ürünler de tedarik etmekteyiz. Mühendislik, tasarım ve üretim gereksinimlerine uygun ürünler sunarak her sektöre yönelik çözümler sağlıyoruz.",
      icon: FaBoxes,
    },
    {
      title:
        language === TURKCE
          ? "High Quality and Standard Compliant Products"
          : "Yüksek Kalite ve Standartlara Uygun Ürünler",
      description:
        language === TURKCE
          ? "All products we supply comply with international quality standards and undergo safety and durability tests. We work meticulously to provide our customers with the highest quality materials."
          : "Tedarik ettiğimiz tüm ürünler, uluslararası kalite standartlarına uygun olup, güvenlik ve dayanıklılık testlerinden geçmektedir. Müşterilerimize en kaliteli malzemeleri sağlamak için titizlikle çalışıyoruz.",
      icon: FaShieldAlt,
    },
    {
      title:
        language === TURKCE
          ? "Equipment and Spare Parts Supply"
          : "Ekipman ve Yedek Parça Tedariki",
      description:
        language === TURKCE
          ? "We offer spare parts supply services for industrial machines, construction machines, electrical devices and other equipment. We guarantee your business continuity by providing quick solutions in case of any malfunction."
          : "Endüstriyel makineler, inşaat makineleri, elektrikli cihazlar ve diğer ekipmanlar için yedek parça tedarik hizmeti sunmaktayız. Her türlü arıza durumunda hızlı çözüm sağlayarak iş sürekliliğinizi garanti altına alıyoruz.",
      icon: FaTruck,
    },
    {
      title:
        language === TURKCE
          ? "Green Energy and Environmentally Friendly Products"
          : "Yeşil Enerji ve Çevre Dostu Ürünler",
      description:
        language === TURKCE
          ? "In accordance with the principle of sustainability, we help our customers minimize their environmental impact by providing environmentally friendly materials and green energy solutions."
          : "Sürdürülebilirlik ilkesine uygun olarak çevre dostu malzemeler ve yeşil enerji çözümleri sağlayarak, müşterilerimizin çevresel etkilerini en aza indirmelerine yardımcı olmaktayız.",
      icon: FaLeaf,
    },
    {
      title:
        language === TURKCE
          ? "Wide Product Range and Stock Management"
          : "Geniş Ürün Yelpazesi ve Stok Yönetimi",
      description:
        language === TURKCE
          ? "We provide comprehensive material supply from a single point to our customers with our wide range of products for different sectors such as industrial equipment, textiles, food, and construction materials. Some of our products are in our stocks and can be shipped immediately for urgent needs."
          : "Endüstriyel ekipmanlar, tekstil, gıda, inşaat malzemeleri gibi farklı sektörlere yönelik geniş ürün yelpazemizle müşterilerimize tek noktadan kapsamlı malzeme temini sağlıyoruz. Ürünlerimizin bir kısmı stoklarımızda bulunmakta ve acil ihtiyaçlar için anında sevk edilebilmektedir.",
      icon: FaList,
    },
    {
      title:
        language === TURKCE
          ? "Customer-Oriented Solution Development"
          : "Müşteri Odaklı Çözüm Geliştirme",
      description:
        language === TURKCE
          ? "We adopt an approach that develops special solutions for each customer. We optimize your business processes by working with our professional team to provide the most suitable materials and services for your needs."
          : "Her müşteri için özel çözümler geliştiren bir yaklaşım benimsemekteyiz. İhtiyaçlarınıza en uygun malzeme ve hizmeti sunmak için profesyonel ekibimizle çalışarak, iş süreçlerinizi optimize ediyoruz.",
      icon: FaUsers,
    },
    {
      title:
        language === TURKCE
          ? "International Standards Compliant Certificates"
          : "Uluslararası Standartlara Uygun Sertifikalar",
      description:
        language === TURKCE
          ? "The products supplied have all the necessary certificates in accordance with international quality management systems. We provide support to our customers in obtaining the necessary certificates and following up the processes."
          : "Tedarik edilen ürünler, uluslararası kalite yönetim sistemlerine uygun olarak gerekli tüm sertifikalara sahiptir. Gerekli sertifikaların temini ve süreçlerin takibi konusunda müşterilerimize destek sağlamaktayız.",
      icon: FaCertificate,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center text-center gap-5 mt-5">
        <h1 className="text-3xl font-bold">
          {language === TURKCE
            ? "Your Local Office in Turkey:"
            : "Türkiye’deki Lokal Ofisiniz"}
        </h1>
        <h4 className="text-lg font-medium">
          {language === TURKCE
            ? "With our experienced teams, we are with you at every step with safe and transparent service..."
            : "Tecrübeli ekiplerimiz eşliğinde güvenli ve şeffaf hizmet ile her adımda yanınızdayız..."}
        </h4>
      </div>
      <div className="my-5 flex flex-col ">
        <div className="flex-grow">
          <HomeCarousel />
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">
            {language === TURKCE
              ? "Solutions for Every Sector"
              : "Her Sektöre Uygun Çözümler"}
          </h2>
          <p className="text-center text-gray-600 mb-8 dark:text-gray-300">
            {language === TURKCE
              ? "UTA GROUP is managed by a team that has mastered the dynamics of international trade since its establishment in 2011. Our company, which has strong references in global supply chains, offers special services to its customers in many different sectors such as oil, construction materials, steel structures, industrial products, military defense equipment, furniture, ceramics and marble, textiles, sports fields and equipment, food and live animals."
              : "UTA GROUP, 2011 yılında kurulduğundan bu yana, uluslararası ticaretin dinamiklerine hâkim bir ekip tarafından yönetilmektedir. Küresel ölçekteki tedarik zincirlerinde güçlü referanslara sahip olan şirketimiz, petrol, inşaat malzemeleri, çelik yapılar, endüstriyel ürünler, askeri savunma ekipmanları, mobilya, seramik ve mermer, tekstil, spor sahaları ve ekipmanları, gıda ve canlı hayvan gibi bir çok farklı sektörde müşterilerine özel  hizmetler sunmaktadır."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center dark:bg-gray-700 dark:text-white"
              >
                <feature.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mb-10">
        <figure className="grid md:grid-cols-4 grid-cols-2 gap-8 md:gap-2 mt-10">
          {grups.map((grup, i) => (
            <div key={i} className="px-2 ">
              <img src={grup} className="w-30 h-auto" />
            </div>
          ))}
        </figure>
      </div>
    </div>
  );
};

export default Home;
