import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Menu mode="horizontal" theme="light">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="kyiv">
                <Link to="/hotels/kyiv">Hotels in Kyiv</Link>
            </Menu.Item>
            <Menu.Item key="lviv">
                <Link to="/hotels/lviv">Hotels in Lviv</Link>
            </Menu.Item>
        </Menu>
    );
}
