import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCategoryDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false); // New state variable for expanded view

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/getCategories');
      const { data } = response.data;
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setCategoryName('');
    setCategoryImage('');
    setIsSubmitted(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'x8yy4v2u');
    setIsUploading(true);

    axios
      .post('https://api.cloudinary.com/v1_1/kaam-24x7/image/upload', formData)
      .then((response) => {
        setCategoryImage(response.data.secure_url);
        setIsUploading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsUploading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryImage) {
      console.log('Image is not available yet. Please wait.');
      return;
    }

    try {
      setIsSubmitted(true);
      setIsUploading(false);
      await axios.post('/api/addCategories', {
        name: categoryName,
        image: categoryImage,
      });

      console.log('Category added successfully');
      closeDialog();
      fetchCategories(); // Fetch categories again to update the list
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditCategory = (categoryId) => {
    const newName = prompt('Enter the new category name:');
    if (newName) {
      axios
        .put(`/api/categories/${categoryId}`, { name: newName })
        .then((response) => {
          console.log('Category edited successfully:', response.data.category);
          fetchCategories(); // Fetch categories again to update the list
        })
        .catch((error) => {
          console.error('Error editing category:', error);
        });
    }
  };

  const handleDeleteCategory = (categoryId) => {
    if (confirm('Are you sure you want to delete this category?')) {
      axios
        .delete(`/api/categories/${categoryId}`)
        .then((response) => {
          console.log('Category deleted successfully');
          fetchCategories(); // Fetch categories again to update the list
        })
        .catch((error) => {
          console.error('Error deleting category:', error);
        });
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="relative">
      {isSubmitted ? (
        <h1>✅</h1>
      ) : (
        <>
          {isUploading ? (
            <h1>Loading...</h1>
          ) : (
            <h1>👇</h1>
          )}
        </>
      )}

      <button
        className="bg-[#5E474C] hover:bg-[#F6F4EE] hover:text-[#5E474C] text-white font-darkage font-semibold py-2 px-4 rounded"
        onClick={openDialog}
      >
        Add a Category
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#5E474C] text-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold font-coffee mb-4">Add a Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full font-darkage border border-gray-300 rounded px-3 py-2 focus:outline-none bg-[#F6F4EE] text-[#5E474C] focus:border-[#F6F4EE]"
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categoryImage" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Category Image
                </label>
                <input
                  type="file"
                  id="categoryImage"
                  accept="image/*"
                  className="w-full font-darkage"
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[#F6F4EE] font-extrabold font-coffee mr-4"
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F6F4EE] hover:bg-green-200 text-[#5E474C] font-semibold py-2 px-4 rounded font-coffee"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Submit'}
                </button>
              </div>
            </form>
            <div className="mt-4">
              <h2 className="text-xl font-bold font-coffee mb-4">Categories</h2>
              <button
                className="text-red-500 font-extrabold font-coffee mb-2"
                onClick={toggleExpand}
              >
                {isExpanded ? 'Hide Categories' : 'Show Categories'}
              </button>
              <div className="max-h-48 overflow-y-auto"> {/* Set the max height and add scrollbar */}
                {isExpanded && (
                  <ul>
                    {categories.map((category) => (
                      <li key={category._id} className="flex items-center mb-2">
                        <p className="mr-2">{category.name}</p>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleEditCategory(category._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteCategory(category._id)}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategoryDialog;
