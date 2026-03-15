import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

type SmoothController = {
  paused: (isPaused: boolean) => void;
  scrollTop: (value: number) => void;
  scrollTo: (target: string | null, smooth?: boolean) => void;
};

export const smoother: SmoothController = {
  paused: (isPaused: boolean) => {
    if (typeof document === "undefined") return;
    document.body.style.overflowY = isPaused ? "hidden" : "auto";
  },
  scrollTop: (value: number) => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: value, left: 0, behavior: "auto" });
  },
  scrollTo: (target: string | null, smooth = true) => {
    if (typeof document === "undefined" || !target) return;
    const section = document.querySelector(target);
    if (!section) return;
    section.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");
    const handlers: Array<{ element: HTMLAnchorElement; handler: (e: Event) => void }> = [];

    links.forEach((element) => {
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const clicked = e.currentTarget as HTMLAnchorElement;
          const section = clicked.getAttribute("data-href");
          smoother.scrollTo(section, true);
        }
      };

      element.addEventListener("click", handler);
      handlers.push({ element, handler });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handlers.forEach(({ element, handler }) => element.removeEventListener("click", handler));
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SS
        </a>
        <a
          href="mailto:siddharthshaurya408@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          siddharthshaurya408@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
