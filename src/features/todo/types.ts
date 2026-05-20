export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}


export type TodoFormProps = {
    inputRef: React.RefObject<HTMLInputElement | null>;
}