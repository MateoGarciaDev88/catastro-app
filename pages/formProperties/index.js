import AppLayout from "../../src/components/AppLayout";

import {
    Button,
    Col,
    Row,
} from 'antd';

export default function formProperties() {
    return (
        <div>
            <AppLayout />
            <h1>Registro Predios</h1>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Button type="primary" >
                        Crear Predio
                    </Button>
                </Col>
            </Row>
        </div>
    )
}