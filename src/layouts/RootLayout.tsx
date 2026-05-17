import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import BackToTopButton from "../components/BackToTopButton";
import AIChatBot from "../components/AIChatBot";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-clinic-ivory text-clinic-charcoal font-sans flex flex-col overflow-x-hidden relative selection:bg-clinic-gold/30">
      <Navbar />
      <main className="flex-1 pb-24 relative z-0" style={{ paddingTop: 'var(--header-height, 145px)' }}>
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-clinic-teal-900/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <AIChatBot />
      <BackToTopButton />
    </div>
  );
}
