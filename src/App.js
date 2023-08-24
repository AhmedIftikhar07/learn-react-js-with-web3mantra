
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import { AiOutlinePlus } from 'react-icons/ai';

import { MdDelete } from 'react-icons/md';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

  const addData = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    }

    if (!email.trim()) {
      alert("Please Enter Email");
      return;
    }

    const newData = [...data, { name, email }];
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));

    setName('');
    setEmail('');
  }

  const remove = (index) => {
    let arr = data.slice(); // Create a copy of the data array before modifying it
    arr.splice(index, 1);
    setData(arr);
    localStorage.setItem('data', JSON.stringify(arr));
  }
  return (
    <>

      <div>
        <Header />
      </div>

      <div className='flex justify-center h-full'>
        <div className="text-center bg-slate-100 p-8 rounded-lg shadow-md w-full md:w-1/2 mt-20 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Explore</h2>
          <form>
            <div className="mb-4">
              <label for="inputField1" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="inputField1" name="inputField1" className="w-full outline-none px-4 py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Enter Name" />
            </div>
            <div className="mb-4">
              <label for="inputField2" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="inputField2" name="inputField2" className="w-full px-4 outline-none py-2 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="abc@example.com" />
            </div>
            <button onClick={addData} type="submit" className="w-full bg-green-500 text-white font-bold text-center py-2 rounded-lg hover:bg-green-600 transition duration-300">Add <AiOutlinePlus className='inline text-xl font-bold'></AiOutlinePlus></button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <section className="text-gray-600 body-font my-10 ">
            <div className="container bg-slate-100 px-5 py-2 mx-auto md:w-2/3 shadow-md">
              <div className="flex justify-between  -m-4 text-center ">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className=" title-font font-medium py-5  text-sm md:text-xl text-green-600">Name</h2>

                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className=" title-font font-medium py-5  text-sm md:text-xl text-green-600">Email</h2>

                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className=" title-font font-medium  py-5 text-sm md:text-xl text-green-600">Remove</h2>
                </div>
              </div>
                {
                  data.map((elem, ind) => {
                    return (
                      <div key={ind}>
                        <section className="text-gray-600 body-font my-10 ">
                          <div className="container bg-slate-100  py-2 mx-auto w-full border border-b-slate-500 ">
                            <div className="flex justify-between -m-4 text-center">
                              <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className=" title-font font-medium py-5 text-md md:text-md text-gray-600">{elem.name}</h2>

                              </div>
                              <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className=" title-font font-medium py-5 text-md md:text-md text-gray-600">{elem.email}</h2>

                              </div>
                              <div className="p-4  sm:w-1/4 w-1/2">
                                <h2 onClick={(index)=>remove(index)} className=" title-font font-medium  py-2 text-3xl  md:text-md  text-red-600"><MdDelete className='inline-block  cursor-pointer hover:text-red-500' /></h2>
                              </div>

                            </div>
                          </div>
                        </section>

                      </div>
                    )
                  })
                }
            </div>
            {/* {   
          data.map((elem,index)=>{
            return(
            <Data key={index} name={elem.name} email={elem.email} index={index} />
            )
          })
        } */}
          </section>
        </div>

      </div>





    </>
  )
}

export default App;
