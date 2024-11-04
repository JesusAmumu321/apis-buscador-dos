import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      console.log(data); // Maneja los resultados de búsqueda aquí
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="dark:bg-white">
      <div className="dark:bg-transparent">
        <div className="mx-auto py-12 sm:py-24">
          <div className="flex w-full md:w-8/12 xl:w-6/12">
            <div className="border-solid border-gray-500 w-full flex items-center">
              <form className="flex w-full" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="q"
                  className="w-full p-3 rounded-md border-2 border-transparent pointer-default dark:bg-gray-500 dark:text-gray-300 dark:border-none"
                  placeholder="Buscar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-md rounded-l-none hover:bg-violet-600 h-full"
                >
                  <svg
                    className="text-gray-200 h-5 w-5 p-0 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.966 56.966"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}