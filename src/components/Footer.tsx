export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-white mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-navy/60">
            © {currentYear} Harborline Digital. All rights reserved.
          </p>
          <p className="text-navy/70 font-medium italic">
            Smart design. Smooth sailing.
          </p>
        </div>
      </div>
    </footer>
  );
}

