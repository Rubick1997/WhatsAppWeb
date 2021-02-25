import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import { useParams } from "react-router";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function Chat() {
	const [seed, setSeed] = useState("");
	const [message, setMessage] = useState("");
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState("");
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomName(snapshot.data().name));

			db.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) => {
					setMessages(snapshot.docs.map((doc) => doc.data()));
				});
		}
	}, [roomId]);

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const onPress = (e) => {
        e.preventDefault();
				db.collection("rooms").doc(roomId).collection("messages").add({
					message: message,
					name: user.displayName,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				});

				setMessage("");
	};
	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className='chat__headerInfo'>
					<h3>{roomName}</h3>
					<p>Last seen at ...</p>
				</div>
				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className='chat__body'>
				{messages.map((item) => (
					<p className={`chat__message ${true && "chat__reciever"}`}>
						{item.message}
						<span className='chat__timeStamp'>
							{new Date(item.timestamp?.toDate()).toUTCString()}
						</span>
					</p>
				))}
			</div>
			<div className='chat__footer'>
				<div className='chat__icons'>
					<InsertEmoticonRoundedIcon />
					<AttachFileIcon className='rotate' />
				</div>
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
