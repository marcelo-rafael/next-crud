import Client from '../core/Client';

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id}
          className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      )
    })
  }


  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}