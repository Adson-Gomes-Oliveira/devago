import { useEffect, useCallback } from 'react';

import { useGetCategoriesQuery } from '../../features/admin.api';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setCategory, setInputs, 
  setCategoriesToPost } from '../../features/admin.inputs'; 
import './style.console.css';

export default function Console(): JSX.Element {
  const dispatch = useAppDispatch();
  const stateInputs = useAppSelector((state) => state.adminInputs);
  const stateGeneral = useAppSelector((state) => state.adminGeneral);
  const { data = [], isLoading } = useGetCategoriesQuery();

  const FOUND_POSITION = 0;

  // useEffect(() => {
  //   dispatch(setCategory(getCategories()));
  // }, []);

  function handleCreationForm(event
    : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { id, value } = event.target;
    const newInput = {
      ...stateInputs,
      [id]: value,
    };

    dispatch(setInputs(newInput));
  }

  function handleCategory(event: React.ChangeEvent<HTMLSelectElement>): void {
    const { value } = event.target;
    
    const categoryID = data.filter((cat) => cat.name === value)[FOUND_POSITION];
    dispatch(setCategory(categoryID.id));
  }

  function handleAddCategory() {
    dispatch(setCategoriesToPost(stateInputs.category));
  }

  return (
    <form className="console-admin">
      <div className="console-main">
        <label htmlFor="title">
          <span>Title</span>
          <input
            id="title"
            type="text"
            onChange={handleCreationForm}
            value={stateInputs.title}
          />
        </label>
        <label htmlFor="content">
          <span>Content</span>
          <textarea
            id="content"
            rows={5}
            onChange={handleCreationForm}
            value={stateInputs.content}
          />
        </label>
      </div>

      <div className="console-details">
        <label htmlFor="thumbnail">
          <span>Thumbnail</span>
          <input
            id="thumbnail"
            type="text"
            onChange={handleCreationForm}
            value={stateInputs.thumbnail}
          />
        </label>
        <label htmlFor="categories">
          <span>Categories</span>
          <select 
            id="categories"
            onChange={handleCategory}
          >
            {data.map((cat) => {
              const { id, name } = cat;
              
              return (
                <option key={id} value={name}>{name}</option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={handleAddCategory}
          >
            +
          </button>
        </label>
      </div>

      <div className="console-categories">
        {stateInputs.categories.map((catID) => {
          const getCategoryName = data.find((cat) => cat.id === catID);
          return (
            <div key={getCategoryName?.id}>
              <span>{getCategoryName?.name}</span>
              <button
                type="button"
                onClick={handleAddCategory}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      
      <div className="console-links">
        <label htmlFor="linkToRepo">
          <span>Link to Repository</span>
          <input
            id="linkToRepo"
            type="text"
            onChange={handleCreationForm}
            value={stateInputs.linkToRepo}
          />
        </label>
        <label htmlFor="linkToProd">
          <span>Link to Production</span>
          <input
            id="linkToProd"
            type="text"
            onChange={handleCreationForm}
            value={stateInputs.linkToProd}
          />
        </label>
      </div>
      <button
        type="button"
      >
        CREATE POST
      </button>
    </form>
  );
}
