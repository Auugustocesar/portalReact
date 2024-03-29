import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOut'
import * as routes from '../../constants/routes'

const Navigation = ({ authUser }) => (
	<div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
)

const NavigationAuth = () => (
	<ul>
		<li>
			<Link to={routes.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={routes.HOME}>Home</Link>
		</li>
		<li>
			<Link to={routes.ACCOUNT}>Account</Link>
		</li>
		<li>
			<SignOutButton />
		</li>
	</ul>
)

const NavigationNonAuth = () => (
	<ul>
		<li>
			<Link to={routes.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={routes.SIGN_IN}>Login</Link>
		</li>
	</ul>
)

const mapStateToProps = state => ({
	authUser: state.sessionState.authUser
})

export default connect(mapStateToProps)(Navigation)
