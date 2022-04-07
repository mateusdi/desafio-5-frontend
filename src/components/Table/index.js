import React,{useState, useEffect} from 'react';
import moment from 'moment';
import api from '../../services/api';


import { Container, PTable, Pagination } from './styles';


function Table(){

    const[transferencias, setTransferencias] = useState([])
    const[total, setTotal] = useState(0)
    const[limite, setLimite] = useState(5)
    
    useEffect(() => {
        async function loadTransferencias(){
            const response = await api.get("/transferencias?size="+limite);
            
           setTotal(response.data.totalElements)
           setTransferencias(response.data.content)
        
        }
        loadTransferencias();
    },[])

    return (
    <Container>
        <h3>Tabela</h3>
        <PTable>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Data Transferencia</th>
                    <th>valor</th>
                    <th>tipo</th>
                    <th>Nome operador transação</th>
                </tr>
            </thead>
            <tbody>
                {transferencias.map((transferencia) => (
                    <tr key={transferencia.id}>
                        <td>{transferencia.id}</td>
                        <td>{moment(transferencia.dataTransferencia).format('DD/MM/YYYY HH:mm:ss')}</td>
                        <td>{transferencia.valor}</td>
                        <td>{transferencia.tipo}</td>
                        <td>{transferencia.nomeOperadorTransacao}</td>
                    </tr>
                ))}
            </tbody>
        </PTable>
        <Pagination>
            <div>QTD {total}</div>
        </Pagination>
    </Container>);
}

export default Table;