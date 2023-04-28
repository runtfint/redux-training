import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
	const { users, loading, error } = useTypedSelector(state => state.user);
	const { fetchUsers } = useActions();
	
	useEffect(() => {
		fetchUsers()
	}, [])

	if (loading) {
		return <h1>Идёт загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}


	return (
		<div>
			{
				users.map(user => <div key={user.id}>{user.name}</div>)
			}
		</div>
	)
}

export default UserList