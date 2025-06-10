import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 scroll-smooth">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
