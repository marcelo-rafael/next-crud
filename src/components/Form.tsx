import { useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Input from './Input';

interface FormProps {
  client: Client
  clientChanged?: (client: Client) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id

  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input 
          readOnly 
          text="Código" 
          value={id} 
          className="mb-5" />
      ) : false}
      <Input 
        text="nome" 
        value={name}  
        onChange={setName}  
        className="mb-5" />
      <Input 
        text="Idade" 
        type="number" 
        value={age}  
        onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button 
          cor="blue" 
          className="mr-2"
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}
          >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}