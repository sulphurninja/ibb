import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddSubcategoryDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategoryImage, setSubCategoryImage] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // new state variable
  const [isUploading, setIsUploading] = useState(false); // new state variable

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedCategory('');
    setSubcategoryName('');
    setIsSubmitted(false);
  };

  useEffect(() => {
    // Fetch all categories on page load
    axios.get('/api/getCategories').then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  useEffect(() => {
    fetchSubcategories();
  }, []);

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get('/api/getAllSubCategories');
      const { data } = response.data;
      setSubCategories(data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };


  const handleSubCategoryImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'x8yy4v2u');
    setIsUploading(true);

    axios
      .post('https://api.cloudinary.com/v1_1/kaam-24x7/image/upload', formData)
      .then((response) => {
        setSubCategoryImage(response.data.secure_url);
        setIsUploading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsUploading(false);
      });
  };

  const handleSubCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
  };

  const handleSubCategorySubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/addSubcategories', {
        name: subcategoryName,
        image: subcategoryImage,
        category: selectedCategory,
      })
      .then((res) => {
        setSubCategories([...subCategories, res.data.data]);
        setSubcategoryName('');
        setSubCategoryImage('');
      });
  };


  const handleEditSubCategory = (subcategoryId) => {
    const newName = prompt('Enter the new category name:');
    if (newName) {
      axios
        .put(`/api/subcategories/${subcategoryId}`, { name: newName })
        .then((response) => {
          console.log('Subcategory edited successfully:', response.data.subcategory);
          fetchCategories(); // Fetch categories again to update the list
        })
        .catch((error) => {
          console.error('Error editing subcategory:', error);
        });
    }
  };

  const handleDeleteSubCategory = (subcategoryId) => {
    if (confirm('Are you sure you want to delete this category?')) {
      axios
        .delete(`/api/subcategories/${subcategoryId}`)
        .then((response) => {
          console.log('Category deleted successfully');
         
        })
        .catch((error) => {
          console.error('Error deleting subcategory:', error);
        });
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-[#5E474C] mt-10  hover:bg-[#F6F4EE] hover:text-[#5E474C]  text-white font-darkage font-semibold py-2 px-4 rounded"
        onClick={openDialog}
      >
        Add a Subcategory
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#5E474C] text-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold font-coffee mb-4">Add a Sub-Category</h2>
            <form onSubmit={handleSubCategorySubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border font-darkage bg-[#F6F4EE] text-[#5E474C] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" >Select a category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Sub-Category Name
                </label>
                <input
                  type="text"
                  id="subCategoryName"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                  className="w-full font-darkage border border-gray-300 rounded px-3 py-2 focus:outline-none bg-[#F6F4EE] text-[#5E474C] focus:border-[#F6F4EE]"
                  placeholder="Enter Sub-Category name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Sub-Category Image
                </label>
                <input
                  type="file"
                  id="subcategoryImage"
                  onChange={handleSubCategoryImageUpload}
                  accept="image/*"
                  className="w-full font-darkage"
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
                <div className="max-h-48 overflow-y-auto"> {/* Set the max height and add scrollbar */}
         
                <ul>
                    {subCategories.map((subcategory) => (
                      <li key={subcategory._id} className="flex items-center mb-2">
                        <p className="mr-2">{subcategory.name}</p>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleEditSubCategory(subcategory._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteSubCategory(subcategory._id)}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
              </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSubcategoryDialog;
