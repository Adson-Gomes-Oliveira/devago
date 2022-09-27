import { ReactElement } from 'react';

import './style.console.css';

export default function Console(): ReactElement {
  return (
    <form className="console-control-admin">
      <div className="console-main">
        <label htmlFor="post-title">
          <span>Title</span>
          <input
            id="post-title"
            type="text"
          />
        </label>
        <label htmlFor="post-content">
          <span>Content</span>
          <textarea
            id="post-content"
            rows={5}
          />
        </label>
      </div>

      <div className="console-details">
        <label htmlFor="post-thumbnail">
          <span>Thumbnail</span>
          <input
            id="post-thumbnail"
            type="text"
          />
        </label>
        <label htmlFor="post-categories">
          <span>Categories</span>
          <select id="post-categories">
            <option value="" id="default-option">Select Category</option>
          </select>
          <button
            type="button"
          >
            +
          </button>
        </label>
      </div>
      <div className="console-links">
        <label htmlFor="post-repo">
          <span>Link to Repository</span>
          <input
            id="post-repo"
            type="text"
          />
        </label>
        <label htmlFor="post-prod">
          <span>Link to Production</span>
          <input
            id="post-prod"
            type="text"
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
