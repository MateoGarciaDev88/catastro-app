import {
    Form,
    Input,
    Button,
    Select,
    Col,
    Row,
    Modal
} from 'antd';

export default function ModalFormBuildings( modalVisible, setModalVisible ) {
    
    return (
        <>
            <Modal
                visible={modalVisible}
                onCancel={onCancel}
                width={1000}
                // onOk={handleSubmit}
            >
                <Form
                    // onFinish={handleSubmit}
                >
                    <Row gutter={[24, 24]}>
                        <Col span={10}>
                            <Item
                                label="Numero de pisos"
                            >

                            </Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}