import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/slice/todos';
import { Daily, Weekly, Monthly } from '../components/Todos';

const ToDoList = () => {
  const [activeBtn, setActiveBtn] = useState('daily-btn');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { id } = e.target;
    setActiveBtn(id);
  };

  useEffect(() => {
    document.title = 'Todo lists';
    dispatch(getTodos());
  }, []);

  return (
    <main className="flex flex-col p-4 w-full">
      <section className="my-6 xl:ml-6">
        <h1 className="text-2xl font-bold mb-4">Recovery Plan</h1>
      </section>
      <section className="my-6 xl:ml-6">
        <article className="flex justify-end items-center">
          <button id="monthly-btn" className={`${activeBtn === 'monthly-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Monthly
          </button>
          <button id="weekly-btn" className={`${activeBtn === 'weekly-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Weekly
          </button>
          <button id="daily-btn" className={`${activeBtn === 'daily-btn' ? 'text-black/80 bg-light' : 'bg-dark text-white hover:bg-light hover:text-black/80'} font-bold py-2 px-4 rounded-full mr-4`} onClick={(e) => handleClick(e)}>
            Daily
          </button>
        </article>
        <article className="my-6">
          <div className={`${activeBtn === 'daily-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full`}>
            <Daily todos={todos.daily} />
          </div>
          <div className={`${activeBtn === 'weekly-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full`}>
            <Weekly todos={todos.weekly} />
          </div>
          <div className={`${activeBtn === 'monthly-btn' ? 'block' : 'hidden'} flex justify-center items-center my-4 rounded-xl min-h-full w-full`}>
            <Monthly todos={todos.monthly} />
          </div>
        </article>
      </section>
    </main>
  );
};
export default ToDoList;
