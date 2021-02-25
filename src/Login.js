import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
	const signIn = () => {};
	return (
		<div className='login'>
			<dv className='login__container'>
				<img
					src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png'
					alt='Whats app logo'
				/>
				<div className='login__text'>
					<h1>Sign in to WhatsApp</h1>
				</div>
				<Button type='submit' onClick={signIn}>
					Sign in with Google
				</Button>
			</dv>
		</div>
	);
}

export default Login;
