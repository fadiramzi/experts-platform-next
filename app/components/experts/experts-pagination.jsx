import React from 'react'

export default function ExpertsPagination({ totalPages = 0, onPageChange , currentPage, lastPage, setPerPage, perPage}) {

    console.log("ExpertsPagination rendered");
    console.log("Current Page:", currentPage);
    console.log("Last Page:", lastPage);

    const handlePageChange = (page) => {
        onPageChange(page);
    }

    return (
        
        <div className='flex '>
             <ul className="flex justify-center gap-1 text-gray-900">
           {
            currentPage != 1 && (
                <li
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <a
                        href="#"
                        className="bg-blue-200 grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                        aria-label="Previous page"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
            )}

            {
               Array.from({ length: totalPages }, (_, i) => (
                   <li
                  
                   onClick={() => handlePageChange(i+1)}
                   key={i}>
                       <a
                           href="#"
                           className={`bg-blue-200 block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 ${currentPage === i+1 ? 'bg-blue-500' : ''}`}
                       >
                           {i + 1}
                       </a>
                   </li>
               ))
            }



           {
               currentPage !== lastPage && (
                 <li
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <a
                    href="#"
                    className="bg-blue-200 grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                    aria-label="Next page"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>
               )
           }
        </ul>
            <select
    id="per_page"
    name="perPage"
    className="bg-blue-500 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
    value={perPage}
    onChange={(e) => setPerPage(e.target.value)}
  >
    <option value="2">2</option>
    <option value="5">5</option>
    <option value="10">10</option>

   
  </select>
        </div>
       

    )
}
