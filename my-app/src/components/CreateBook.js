import React from "react";

const CreateBook = ({ onChangeForm, handleSubmit }) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form onSubmit={() => handleSubmit()}>
          <div className="input-group">
            <label>book</label>
            <input
              type="text"
              onChange={(e) => onChangeForm(e)}
              name="book"
              placeholder="book"
            />
          </div>
          <div className="input-group">
            <label>category</label>
            <input
              type="text"
              onChange={(e) => onChangeForm(e)}
              name="category"
              placeholder="category"
            />
          </div>
          <div className="input-group">
            <label>author</label>
            <input
              type="text"
              onChange={(e) => onChangeForm(e)}
              name="author"
              placeholder="author"
            />
          </div>
          <button className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
