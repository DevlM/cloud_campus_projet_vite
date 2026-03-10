export const Navbar = () => {
  return (
    <nav className="bg-primary h-10 flex items-center">
      <div className="max-w-4xl container mx-auto flex gap-5">
        <a href="/" className="text-xl font-bold">
          Mon Restaurant
        </a>
        <div className="flex-1 flex justify-center gap-5">
          <a
            href="/menu"
            className="text-lg text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            Menu
          </a>
          <a
            href="/menu"
            className="text-lg text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            Réserver une tâble
          </a>
          <a
            href="/menu"
            className="text-lg text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
};
