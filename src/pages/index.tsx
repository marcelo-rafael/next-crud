import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';

import useClients from '../hooks/useClients';

export default function Home() {

  const {
    client, 
    clients, 
    deleteClient, 
    selectClient, 
    saveClient, 
    newClient,
    tableVisible,
    showTable
  } = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tableVisible ? (
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
              selectedClient={selectClient}
              excludedClient={deleteClient}
            />
          </>
        ) : (
          <Form 
            client={client} 
            clientChanged={saveClient}
            canceled={showTable} />
        )}

      </Layout>
    </div>
  )
}
