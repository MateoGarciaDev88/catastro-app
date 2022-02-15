import AppLayout from "../../src/components/AppLayout";

import {
    Button,
    Col,
    Row,
} from 'antd';

export default function formLands() {
    return (
        <div>
            <AppLayout />
            <h1>Registro Terrenos</h1>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Button type="primary" >
                        Crear Terreno
                    </Button>
                </Col>
            </Row>
        </div>
    )
}