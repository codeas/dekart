import Menu from 'antd/es/menu'
import styles from './DekartMenu.module.css'
import { ExportOutlined } from '@ant-design/icons'
import {
  Link
} from 'react-router-dom'

export default function DekartMenu () {
  return (
    <div className={styles.dekartMenu}>
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item>
          <a target='_blank' rel='noopener noreferrer' className={styles.dekartLink} href='https://dekart.xyz/'>Dekart</a>
        </Menu.Item>
        <Menu.Item>
          <Link to='/'>Reports</Link>
        </Menu.Item>
        <Menu.SubMenu popupClassName={styles.subMenu} title='Support' active>
          <Menu.Item>
            <a target='_blank' rel='noopener noreferrer' href='https://dekart.xyz/docs/'>Documentation <ExportOutlined /></a>
          </Menu.Item>
          <Menu.Item>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/dekart-xyz/dekart/issues'>Report Issue <ExportOutlined /></a>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}
