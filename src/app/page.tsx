import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav 
          navItems={
            [
              {name: 'Home', link:'/'},
              {name: 'About us', link:'/'},
              {name: 'Announcements', link:'/'},
              {name: 'Team', link:'/'},
              {name: 'Contact', link:'/'},
              {name: 'Admin', link:'/'}
            ]
          }
        />
        <Hero />
      </div>
    </main>
  );
}
