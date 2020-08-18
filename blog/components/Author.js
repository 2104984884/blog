import { Avatar,Divider} from 'antd';
import '../styles/components/author.css';
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" />
        <div className="author-introduction">专注于WEB和移动前端开发</div>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="" className="account" />
        <Avatar size={28} icon="" className="account"/>
        <Avatar size={28} icon="" className="account"/>
      </div>
    </div>
  )
}
export default Author