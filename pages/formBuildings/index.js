import { useState } from "react";
import AppLayout from "../../src/components/AppLayout";
import ModalFormBuildings from "../../src/components/ModalFormBuildings";

import {
    Button,
    Col,
    Row,
} from 'antd';


export default function formBuildings() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
        // setIsEditing(false);
    }

    return (
        <div>
            <AppLayout />
            <h1>Registro Construcciones</h1>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Button type="primary" onClick={openModal} >
                        Crear Construcción
                    </Button>
                </Col>

                {
                    modalVisible &&
                    <ModalFormBuildings
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    />
                }

                {/* <TableBuildings /> */}
            </Row>
        </div>
    )
}