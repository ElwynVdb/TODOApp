import React from "react";
import styled from "styled-components";

export type CardProps = {
    todos: Todo[];
    removeCallback: (todoIndex: number) => void;
}

export interface Todo {
    title: string;
    description: string;
}

const Box = styled.div`
    width: 75%;
    max-width:500px;

    > div {
        border: solid thin black;
        padding: 15px;
        
        .details {
            white-space: normal;
            word-wrap: break-word;
        }

    button {
        display:block;
        border-radius:15px;
        width:max-content;
        padding: 0 15px;
        margin: 0 auto;
    }
}
`;

const TodoCard: React.FC<CardProps> = ({ todos, removeCallback }) => (
    <Box>
        {todos.map((todo, index) => (
            <div>
                <div className="details">
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
                <button onClick={e => removeCallback(index)}>Remove</button>
            </div>
        ))}
    </Box>
);

export default TodoCard;