import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

function Chat() {
	const [seed, setSeed] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const onPress = (e) => {
		e.preventDefault();
		console.log("You typed ", message);
		setMessage("");
	};

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className='chat__headerInfo'>
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>
				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined/>
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className='chat__body'>
				<p className={`chat__message ${true && "chat__reciever"}`}>
					Hey
					<p className='chat__timeStamp'>2:32pm</p>
				</p>
			</div>
			<div className='chat__footer'>
				<InsertEmoticonRoundedIcon />
				<AttachFileIcon className='rotate' />
				<form>
					<input
						type='text'
						placeholder='Type a message'
						className='send__button'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className='send__button' onClick={onPress}>
						{!message ? <MicIcon /> : <SendIcon />}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Chat;
