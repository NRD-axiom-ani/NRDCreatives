import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#founder", label: "Founder" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="NRD Creatives"
              className="h-10 w-auto object-contain"
            />
            <span className="text-sm font-medium tracking-wide">
              NRD Creatives
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-foreground-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton
              variant="primary"
              className="!px-5 !py-2.5 text-sm"
              onClick={() =>
                document
                  .querySelector("#book")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book A Call
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-full p-2 text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 glass rounded-2xl p-4 md:hidden animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground-muted hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 !py-3"
              >
                Book A Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};