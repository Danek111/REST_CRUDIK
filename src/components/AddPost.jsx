import React from "react";

const AddPost = ({ onAdd })=>{
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        onAdd(e.target.title.value, e.target.body.value)
        e.target.title.value = '';
        e.target.body.value = '';
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <h3>New Post!</h3>
                <input placeholder="Название" name="title"/>
                <input placeholder="Статья" name="body"/>
                <button onSubmit={handleOnSubmit}>Добавить</button>
                <hr/>
            </form>
        </div>
    )
}
export default AddPost