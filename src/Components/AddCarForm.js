import React from 'react';
import { Sidebar } from 'react-feather';
import { useState } from 'react';

const AddCarForm = ({ onAddCar }) => {
  const [carData, setCarData] = useState({
    picture: '',
    manufacturer: '',
    model: '',
    productionYear: '',
    category: '',
    leatherInterior: false,
    mileage: '',
    cylinders: '',
    gearbox: 'Automatic',
    wheel: 'Left',
    color: '',
    airbags: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation here if needed

    // Pass the new car data to the parent component
    onAddCar(carData);

    // Reset the form
    setCarData({
      picture: '',
      manufacturer: '',
      model: '',
      productionYear: '',
      category: '',
      leatherInterior: false,
      mileage: '',
      cylinders: '',
      gearbox: 'Automatic',
      wheel: 'Left',
      color: '',
      airbags: '',
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl overflow-hidden shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">
            Picture URL
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={carData.picture}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturer">
            Manufacturer
          </label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={carData.manufacturer}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productionYear">
            Production Year
          </label>
          <input
            type="text"
            id="productionYear"
            name="productionYear"
            value={carData.productionYear}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={carData.category}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leatherInterior">
            Leather Interior
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="leatherInterior"
              name="leatherInterior"
              checked={carData.leatherInterior}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm">Yes</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mileage">
            Mileage
          </label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cylinders">
            Number of Cylinders
          </label>
          <input
            type="text"
            id="cylinders"
            name="cylinders"
            value={carData.cylinders}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gearbox">
            Gearbox
          </label>
          <select
            id="gearbox"
            name="gearbox"
            value={carData.gearbox}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wheel">
            Wheel
          </label>
          <select
            id="wheel"
            name="wheel"
            value={carData.wheel}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={carData.color}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="airbags">
            Number of Airbags
          </label>
          <input
            type="text"
            id="airbags"
            name="airbags"
            value={carData.airbags}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;
