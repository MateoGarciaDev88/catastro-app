
import { Layout, Menu } from 'antd'
import Link from 'next/link';

const { Header } = Layout;

export default function AppLayout() {
    return (
        <Layout>
            <Header className="header">
                <div>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link href='/'>Inicio</Link></Menu.Item>
                        <Menu.Item key="2"><Link href='/formOwners'>Propietarios</Link></Menu.Item>
                        <Menu.Item key="3"><Link href='/formBuildings'>Construcciones</Link></Menu.Item>
                        <Menu.Item key="4"><Link href='/formLands'>Terrenos</Link></Menu.Item>
                        <Menu.Item key="5"><Link href='/formProperties'>Predios</Link></Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Layout>
    )
}