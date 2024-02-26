import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh' }}>
        <PrettyChatWindow
            projectId='f0996857-eb81-48b2-bf9b-aa1cde9cd073'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
  )}
  
  export default ChatsPage;