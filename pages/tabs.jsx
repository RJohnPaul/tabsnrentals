import { useState } from 'react';

export default function Tabs() {
  const [data, setData] = useState([
    { id: 1, name: 'Tab 1' },
    { id: 2, name: 'Tab 2' },
    { id: 3, name: 'Tab 3' },
  ]);

  const addItem = () => {
    const newItem = { id: data.length + 1, name: `Tab ${data.length + 1}` };
    setData([...data, newItem]);
  };

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-4">
        <input type="text" placeholder="Search..." className="border p-2 rounded w-full mr-4" />
        <button onClick={addItem} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition duration-300">+</button>
      </div>
      <div className="grid gap-4">
        {data.map(item => (
          <div key={item.id} className="border p-4 rounded bg-white shadow-lg">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="flex justify-between mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded transition duration-300">Add</button>
              <button onClick={() => deleteItem(item.id)} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}