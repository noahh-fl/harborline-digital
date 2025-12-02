import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["found", "trusted", "booked", "busy", "growing"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-seafoam/40 via-sand to-white">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 rounded-full bg-seafoam/60 text-navy hover:bg-seafoam/80 border-0">
              Free website audit <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular font-display">
              <span className="text-navy">Get your business</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-navy"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-navy/70 max-w-2xl text-center">
              Harborline Digital helps local brands rank higher, capture more leads, and keep phones ringing with SEO, speed, and on-point design.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            <InteractiveHoverButton
              text="Start project"
              className="w-44 bg-navy text-white border-navy/30 hover:bg-navy/90"
              onClick={() => navigate("/contact")}
            />
            <InteractiveHoverButton
              text="View pricing"
              className="w-44 bg-white text-navy border-navy/20 hover:bg-seafoam/40"
              onClick={() => navigate("/pricing")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
