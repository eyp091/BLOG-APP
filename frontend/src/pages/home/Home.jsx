import React from 'react';
import useGetAllBlogs from '../../hooks/useGetAllBlogs';
import { extarctTime } from '../../utils/extractTime';
import { Link } from 'react-router-dom';

const Home = () => {
  const { loading, blogs } = useGetAllBlogs();
  const formatedDate = extarctTime()

  return (
    <div className="bg-[rgb(157,176,214)] min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Loading State */}
        {loading ? (
          <p className="text-center text-xl font-semibold text-gray-800">Yükleniyor...</p>
        ) : (
          <>
            {/* Featured Article */}
            <section className="bg-gradient-to-r from-white to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
                  Featured Article
                </h2>
                <p className="text-lg text-gray-700 mt-2 md:mt-0 md:ml-4">
                  Discover the latest insights and stories from our blog. Stay updated with fresh articles every day.
                </p>
              </div>

            </section>
            {/* Articles List */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => {
                  const formattedDate = extarctTime(blog.createdAt)
                  return (
                    <article key={blog.id || index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
                      <img
                        src={blog.image || 'https://picsum.photos/150/150'}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <Link to={`/blogs/${blog._id}`}>
                        <h4 className="text-xl font-semibold text-blue-600 hover:underline">
                          {blog.title}
                        </h4>
                      </Link>
                      <p className="text-gray-600 mt-2">{blog.content}</p>
                      <div className="mt-4 flex items-center space-x-2">
                        <img
                          src={blog.autherDetails.profilePic || 'https://picsum.photos/150/150'}
                          alt={blog.autherDetails.fullName}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="text-sm text-gray-600">
                          <span>{blog.autherDetails.fullName}</span> • <span>{formattedDate}</span>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          © 2024 MyBlog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;



// import React, { useEffect } from 'react'
// import useGetAllBlogs from '../../hooks/useGetAllBlogs';

// const Home = () => {

//   const {loading, blogs} = useGetAllBlogs();
//   console.log("blogs: ", blogs);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Main Content */}
//       <main className="container mx-auto py-8 px-4">
//         {/* Featured Article */}
//         <section className="bg-white p-6 rounded-lg shadow mb-8">
//           <h2 className="text-3xl font-semibold text-gray-800">Featured Article</h2>
//           <p className="text-gray-600 mt-2">
//             Discover the latest insights and stories from our blog. Stay updated with fresh articles every day.
//           </p>
//         </section>

//         {/* Articles List */}
//         <section>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest Articles</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Sample Articles - Repeat this block for each article */}
//             {[...Array(6)].map((_, index) => (
//               <article key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
//                 <img
//                   src={`https://source.unsplash.com/random/800x600?sig=${index}`}
//                   alt="Article"
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h4 className="text-xl font-semibold text-gray-800">Article Title {index + 1}</h4>
//                 <p className="text-gray-600 mt-2">
//                   This is a short summary of the article. It provides a quick overview of the content.
//                 </p>
//                 <div className="mt-4 flex items-center space-x-2">
//                   <img
//                     src={`https://i.pravatar.cc/150?img=${index + 10}`}
//                     alt="Author"
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div className="text-sm text-gray-600">
//                     <span>Author Name</span> • <span>Oct {index + 1}, 2024</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t mt-8 py-4">
//         <div className="container mx-auto text-center text-gray-600 text-sm">
//           © 2024 MyBlog. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;