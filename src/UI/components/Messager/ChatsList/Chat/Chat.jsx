import React from 'react';
import css from './Chat.module.css'

export class Chat extends React.Component {

    render() {
        let {id,interlocutor,lastMessage}= this.props.chat
        return (
            <div className={css.wraperChat} key={id} >
                <div className={css.Chat}>
                    <div className={css.PhotoUser}>
                        <img src={interlocutor.photo} alt='Name' />
                    </div>

                    <div className={css.LocuterNameData}>
                        <div className={css.MessageDate}>
                            <div className={css.UserName}>{interlocutor.name}</div>
                            <div>{interlocutor.visitDate}</div>
                        </div>
                        <div className={css.LastMessage}>
                            <div className={css.Message}>{lastMessage}</div>
                            <div className ={css.NumberMessage}>2</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Chat
