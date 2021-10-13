import { useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Input from './Input';

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {
  const id = props.client?.id

  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input readOnly text="Código" value={id} className="mb-5" />
      ) : false}
      <Input text="nome" value={name}  handleChange={setName}  className="mb-5" />
      <Input text="Idade" type="number" value={age}  handleChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button cor="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  )
}