import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const POSTS_PER_PAGE = 10;

const ApiPage = () => {
  // State for posts, loading, errors, pagination, and search
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Card>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <p className="mb-6">Data fetched from JSONPlaceholder API.</p>
      
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on new search
        }}
        className="w-full p-2 mb-6 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPosts.map(post => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{post.title}</h2>
                <p>{post.body}</p>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-2">
            <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default ApiPage;
