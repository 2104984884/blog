import { Avatar,Divider} from 'antd';
import '../styles/components/author.css';
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://ww1.sinaimg.cn/bmiddle/006G4ehlly1g1e2rqn0s1j30jg0jhjsf.jpg" />
        <div className="author-introduction">大四学生</div>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="" className="account" />
        <Avatar size={28} icon="" className="account"/>
        <Avatar size={28} icon="" className="account"/>
      </div>
    </div>
  )
}
export default Author