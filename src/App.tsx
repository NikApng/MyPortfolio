import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import { useRef } from "react";
import TechStack from "@/components/sections/TechStack.tsx";

function App() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);


    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white transition">


            <Header
            onAboutClick={()=> aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
            onProjectsClick={()=> projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
            />


            <main className="w-full flex flex-col items-center gap-32 mt-10 px-4">
                <About aboutRef={aboutRef}/>
                <Projects projectsRef={projectsRef}/>
                <TechStack/>
            </main>

            <Footer />
        </div>
    );
}

export default App;
