export default function WhatsAppButton() {
  return (
    <a
      className="group fixed right-8 bottom-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
      href="https://wa.me/yournumber"
    >
      <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.058-4.51 10.06-10.062 0-2.693-1.047-5.224-2.953-7.127-1.905-1.904-4.434-2.952-7.127-2.952-5.549 0-10.06 4.51-10.061 10.061 0 2.083.569 4.015 1.65 5.753l-1.082 3.954 4.053-1.064-.041-.053z" />
      </svg>
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-white px-4 py-2 text-sm font-bold text-black opacity-0 shadow-lg transition group-hover:opacity-100">
        Chat with us!
      </span>
    </a>
  );
}
