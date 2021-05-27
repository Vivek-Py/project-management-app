import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateError, updateUser } from "../../state/actions";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { fire } from "../../auth/Config";

const Logform = (props) => {
	const email = useSelector((state) => state.email);
	const pass = useSelector((state) => state.pass);
	const demo = useSelector((state) => state.demo);
	const dispatch = useDispatch();

	// Don't require as of now.
	//const error = useSelector((state) => state.error);
	//const user = useSelector((state) => state.user);

	useEffect(() => {
		authListener();
	});

	useEffect(() => {
		if (demo === true) {
			fire
				.auth()
				.signInWithEmailAndPassword(email, pass)
				.catch((err) => {
					dispatch(updateError("There was a problem while sign-in."));
				});
		}
	}, [demo]);

	function authListener(user) {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch(updateUser(user));
			} else {
				dispatch(updateUser(null));
			}
		});
	}

	function handleLogin() {
		fire
			.auth()
			.signInWithEmailAndPassword(email, pass)
			.catch((err) => {
				dispatch(updateError("There was a problem while sign-in."));
			});
	}

	function handleSignup() {
		fire
			.auth()
			.createUserWithEmailAndPassword(email, pass)
			.catch((err) => {
				dispatch(updateError("There was a problem while sign-up."));
			});
	}

	const log = useSelector((state) => state.log);
	return (
		<>
			{log ? (
				<SignIn handleLogin={handleLogin} />
			) : (
				<SignUp handleSignup={handleSignup} />
			)}
		</>
	);
};

export default Logform;
