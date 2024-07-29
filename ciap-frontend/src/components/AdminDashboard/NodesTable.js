import React from 'react';

const nodes = [
    { id: 1, name: "Node A1", serial: "SN1001", zone: "Zone 1", status: true },
    { id: 2, name: "Node A2", serial: "SN1002", zone: "Zone 2", status: true },
    { id: 3, name: "Node A3", serial: "SN1003", zone: "Zone 3", status: true },
    { id: 4, name: "Node A4", serial: "SN1004", zone: "Zone 11", status: true },
    { id: 5, name: "Node A5", serial: "SN1005", zone: "Zone 5", status: true },
    { id: 6, name: "Node A6", serial: "SN1006", zone: "Zone 6", status: true },
    { id: 7, name: "Node A7", serial: "SN1007", zone: "Zone 7", status: true },
    { id: 8, name: "Node A8", serial: "SN1008", zone: "Zone 8", status: false },
    { id: 9, name: "Node A9", serial: "SN1009", zone: "Zone 9", status: true },
    { id: 10, name: "Node A10", serial: "SN1010", zone: "Zone 10", status: false },
    { id: 11, name: "Node B1", serial: "SN1011", zone: "Zone 6", status: true },
    { id: 12, name: "Node B2", serial: "SN1012", zone: "Zone 12", status: true },
    { id: 13, name: "Node B3", serial: "SN1013", zone: "Zone 13", status: true },
    { id: 14, name: "Node B4", serial: "SN1014", zone: "Zone 14", status: false },
    { id: 15, name: "Node B5", serial: "SN1015", zone: "Zone 1", status: true },
    { id: 16, name: "Node B6", serial: "SN1016", zone: "Zone 2", status: true },
    { id: 17, name: "Node B7", serial: "SN1017", zone: "Zone 3", status: true },
    { id: 18, name: "Node B8", serial: "SN1018", zone: "Zone 4", status: false },
    { id: 19, name: "Node B9", serial: "SN1019", zone: "Zone 5", status: true },
    { id: 20, name: "Node B10", serial: "SN1020", zone: "Zone 6", status: true }
];

const NodesTable = () => (
    <div className="nodes-table">
        <h3>Network Nodes</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Serial Number</th>
                    <th>Zone</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {nodes.map(node => (
                    <tr key={node.id}>
                        <td>{node.name}</td>
                        <td>{node.serial}</td>
                        <td>{`Zone ${node.zone}`}</td>
                        <td style={{ color: node.status === 'active' ? 'green' : 'red' }}>
                            {node.status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default NodesTable;