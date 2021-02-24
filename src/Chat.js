import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Chat() {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

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
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className='chat__body'>
				<p className='chat__message'>
					wljddbwejrfwerjbljvbkrwtv
                    <p className="chat__timeStamp">
                        2:32pm
                    </p>
				</p>
			</div>
			<div className='chat_footer'></div>
		</div>
	);
}

export default Chat;
