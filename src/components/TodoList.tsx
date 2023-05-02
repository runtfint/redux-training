import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

export const TodoList: React.FC = () => {
	const { page, error, loading, todos, limit } = useTypedSelector(state => state.todo)

	const { fetchTodos, setTodoPage } = useActions();

	const pages = [1,2,3,4,5];

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <h1>Идёт загрузка списка дел...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return(
		<div>
			{
				todos.map(todo =>
					<div key={todo.id}>
						{todo.id} - {todo.title}
					</div>
				)
			}

			{
				pages.map(p =>
					<button
						key={p}
						onClick={() => setTodoPage(p)}
					>
						{p}
					</button>
				)
			}

		</div>
	)
}
