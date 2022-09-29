import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ICategory } from '../../interface/Admin.interfaces';
import { setButton } from '../../features/admin.general';
import {
  setCategory,
  setInputs, 
  setCategoriesToPost,
  removeCategoryFromPost
} from '../../features/admin.inputs';
import { 
  useGetCategoriesQuery,
  usePostProjectMutation
} from '../../features/admin.api';
import './style.console.css';

export const FOUND_POSITION = 0;
export const MIN_CATEGORIES = 1;
export const IMPOSSIBLE_ID = 99;
const INITIAL_THUMB_SLICE_ONE = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_40';
const INITIAL_THUMB_SLICE_TWO = '0243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';

export default function Console(): JSX.Element {
  const dispatch = useAppDispatch();
  const stateInputs = useAppSelector((state) => state.adminInputs);
  const stateGeneral = useAppSelector((state) => state.adminGeneral);
  const { data = [] } = useGetCategoriesQuery();
  const [ createPost, createPostResult ] = usePostProjectMutation();

  useEffect(() => {
    if (!Object.values(stateInputs).includes('')) dispatch(setButton(false));

    if (stateInputs.categories.length < MIN_CATEGORIES) {
      dispatch(setButton(true));
    }

    if (Object.values(stateInputs).includes('')) dispatch(setButton(true));
  }, [ stateInputs ]);

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
    dispatch(setCategory(categoryID));
  }

  function handleAddCategory() {
    const categoryExist = stateInputs.categories
      .some((cat) => cat.id === stateInputs.category.id);

    if (categoryExist) return alert('Is not allowed to repeat categories');

    dispatch(setCategoriesToPost(stateInputs.category));
  }

  function handleRemoveCategory(cat: ICategory) {
    const { id } = cat;
    dispatch(removeCategoryFromPost(id));
  }

  function createNewPost() {
    const getCategoryIDs = stateInputs.categories.map((cat) => cat.id);

    createPost({
      title: stateInputs.title,
      description: stateInputs.content,
      linkToRepo: stateInputs.linkToRepo,
      linkToProd: stateInputs.linkToProd,
      thumbnail: stateInputs.thumbnail,
      categoryIds: [ ...getCategoryIDs ],
    });

    if (createPostResult.error) {
      return console.log(createPostResult.error);
    }

    dispatch(removeCategoryFromPost(IMPOSSIBLE_ID));
    dispatch(setInputs({
      title: '',
      content: '',
      linkToRepo: '',
      linkToProd: '',
      thumbnail: '',
      category: {
        id: 1,
        name: 'FRONT-END',
      },
      categories: []
    }));

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

      <div className="console-details-extended">
        <div className="console-details-extended-thumbnail">
          <img
            src={stateInputs.thumbnail === '' ?
              INITIAL_THUMB_SLICE_ONE + INITIAL_THUMB_SLICE_TWO :
              stateInputs.thumbnail}
            alt="Post Thumbnail"
          />
        </div>
        <div className="console-details-extended-categories">
          {stateInputs.categories.map((cat) => {
            const { id, name } = cat;
            return (
              <div key={id}>
                <span>{name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(cat)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
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
        className="create-button"
        disabled={stateGeneral.isButtonOff}
        onClick={createNewPost}
      >
        CREATE POST
      </button>
    </form>
  );
}
