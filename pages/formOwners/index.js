import {
  Row
} from 'antd';
import AppLayout from '../../src/components/AppLayout';
import TableOwners from '../../src/components/TableOwners';

export default function FormProperties() {
  return (
    <div>
      <AppLayout />
      <h1>Registro Propietarios</h1>
      <Row gutter={[16, 16]}>
        <TableOwners />
      </Row>
    </div>
  )
}

