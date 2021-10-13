import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {
  const [client, setClient] = useState<Client>(Client.void())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Marcelo', 31, '1'),
    new Client('Marcio ', 31, '2'),
    new Client('Maicon', 22, '3'),
    new Client('Marlon', 20, '4'),
    new Client('Thais', 26, '5')
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function excludedClient(client: Client) {
    console.log(`Excluir...${client.name}`)
  }

  function newClient() {
    setClient(Client.void())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button 
                cor="green" 
                className="mb-4" 
                onClick={newClient}>
                Novo Cliente
              </Button>
            </div>

            <Table
              clients={clients}
              selectedClient={selectedClient}
              excludedClient={excludedClient}
            />
          </>
        ) : (
          <Form 
            client={client} 
            clientChanged={saveClient}
            canceled={() => setVisible('table')} />
        )}

      </Layout>
    </div>
  )
}
