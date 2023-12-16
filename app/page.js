import Pricing from "./pricing/page"
import Faq from "./faq/page"
import Usecases from "./useCases/page"
import Home from "./home/page"
import Work from "./work/page"
import Tutorials from "./tutorials/page"
import CodeEditor from "./codeeditor/page"
import ScrollToTopButton from "@/components/ScrollToTop"
import WhatsApp from "@/components/WhatsApp/page"

const page = () => {
  return (
    <div className="min-h-screen text-black bg-white">
      <ScrollToTopButton />
      <WhatsApp />
      <Home />
      <Work />
      <CodeEditor />
      <Usecases />
      {/* <Tutorials /> */}
      <Pricing />
      <Faq />
    </div>
  )
}

export default page