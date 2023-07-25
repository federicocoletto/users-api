import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import { useSelector } from "react-redux";
import "../styles/UsersPage.css";


const UsersPage = () => {
	
	const users = useSelector(states => states.users)

	console.log(users)

	return (
		<div className="users page">
			<header className="users__header">
				<h1 className="users__h1">Users APP</h1>
				<button className="users__button"><Link to="/login">Add new user</Link></button>
			</header>
			<main className="users__cards">
				{
					users?.map(userInfo => (
						<UserCard key={userInfo.id} userInfo={userInfo} />
					))
				}
			</main>
		</div>
	)
};

export default UsersPage;
