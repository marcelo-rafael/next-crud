import { useEffect, useState } from 'react';

import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';

import ClientCollection from '../backend/db/ClientCollection';
import Client from '../core/Client';
import ClientRepository from '../core/ClientRepository';

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(client => {
      setClients(clients)
      setVisible('table')
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function excludedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.void())
    setVisible('form')
  }

  async function saveClient(client: Client) {
    console.log(saveClient)
    await repo.save(client)
    getAll()
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
