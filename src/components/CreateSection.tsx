import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 2rem 0;

  .input {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom:1rem;

    input, textarea {
        margin-bottom:0.5rem;
        resize:none;
    }

    label {
      padding-right: 15px
   }
}


button {
    display:block;
    margin: 0 auto;
    width:250px;
    padding:5px;
}

`;

export enum CreateInput {
    TITLE = "title",
    DESCRIPTION = "description"
}

type CreateSectionProps = {
    inputChange: (type: CreateInput, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    addCallback: () => void;
    titleValue: string;
    descriptionValue: string;
}

const CreateSection: React.FC<CreateSectionProps> = ({ addCallback, inputChange, titleValue, descriptionValue }) => (
    <Box>
        <div className="input">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={e => inputChange(CreateInput.TITLE, e)} value={titleValue} />
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" onChange={e => inputChange(CreateInput.DESCRIPTION, e)} value={descriptionValue}></textarea>
        </div>
        <button onClick={addCallback}>Add</button>
    </Box>
);

 
export default CreateSection;