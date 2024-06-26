'use client'

import React from 'react';
import useTodosController from "@/app/todo-no-rls/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
    ownerUserId?: string;
}

const TodoContainer = ({ownerUserId}: TodoContainerProps) => {
    const {
        loading,
        todos,
        handleCreateEmptyTodos,
        handleUpdateTodos,
        handleDeleteTodos,
        handleSearchTodos,
    } = useTodosController();

    return (
        <div>
            <TodoList sharedUserFullName="gasina_eunji"
                      ownerUserId={ownerUserId}
                      loading={loading}
                      todoListData={todos}
                      isReadOnly={true}
                      onUpdate={handleUpdateTodos}
                      onCreate={handleCreateEmptyTodos}
                      onDelete={handleDeleteTodos}
                      onSearch={handleSearchTodos}
            />
        </div>
    );
};

export default TodoContainer;