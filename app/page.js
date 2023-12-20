import Pricing from "./pricing/page";
import Faq from "./faq/page";
import Usecases from "./useCases/page";
import Home from "./home/page";
import Work from "./work/page";
// import Tutorials from "./tutorials/page";
import CodeEditor from "./codeeditor/page";
// import ScrollToTopButton from "@/components/ScrollToTop";
import WhatsApp from "@/components/WhatsApp/page";

const Page = () => {
  // const scrollToSection = (id) => {
  //   const targetElement = document.getElementById(id);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="min-h-screen text-black bg-white">
      {/* <ScrollToTopButton /> */}
      <WhatsApp />
     
      <div id="home">
        <Home />
      </div>
      <div id="codeeditor">
        <CodeEditor />
      </div>
      <div id="work">
        <Work />
      </div>
      
      <div id="usecases">
        <Usecases />
      </div>
      {/* <Tutorials /> */}
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <Faq />
      </div>
    </div>
  );
};

export default Page;
