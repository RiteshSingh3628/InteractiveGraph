export const initialNodes = [
    {
        id: '1',
        type: 'custom-node',
        position: { x: 250, y: 100 },
        data: { 
            label: 'API Gateway',
            description: 'Main entry point for all services'
        }
    },
    {
        id: '2',
        type: 'custom-node',
        position: { x: 100, y: 250 },
        data: { 
            label: 'User Service',
            description: 'Handles user authentication and management'
        }
    },
    {
        id: '3',
        type: 'custom-node',
        position: { x: 400, y: 250 },
        data: { 
            label: 'Product Service',
            description: 'Manages product catalog and inventory'
        }
    },
    {
        id: '4',
        type: 'custom-node',
        position: { x: 250, y: 400 },
        data: { 
            label: 'Order Service',
            description: 'Processes and manages orders'
        }
    },
    {
        id: '5',
        type: 'custom-node',
        position: { x: 550, y: 400 },
        data: { 
            label: 'Payment Service',
            description: 'Handles payment processing'
        }
    }
];

export const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: { stroke: '#ffc300' }
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        style: { stroke: '#ffc300' }
    },
    {
        id: 'e2-4',
        source: '2',
        target: '4',
        animated: true,
        style: { stroke: '#ffc300' }
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        style: { stroke: '#ffc300' }
    },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
        animated: true,
        style: { stroke: '#ffc300' }
    }
];
