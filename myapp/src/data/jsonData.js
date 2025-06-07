export const initialNodes = [
    {
        id: '1',
        type: 'custom-node',
        position: { x: 250, y: 100 },
        data: { 
            label: 'API Gateway',
            description: 'Main entry point for all services',
            metrics: {
                traffic: '85%',
                errorRate: '0.5%',
                latency: '120ms',
                status: 'healthy'
            }
        }
    },
    {
        id: '2',
        type: 'custom-node',
        position: { x: 100, y: 250 },
        data: { 
            label: 'User Service',
            description: 'Handles user authentication and management',
            metrics: {
                traffic: '65%',
                errorRate: '1.2%',
                latency: '85ms',
                status: 'warning'
            }
        }
    },
    {
        id: '3',
        type: 'custom-node',
        position: { x: 400, y: 250 },
        data: { 
            label: 'Product Service',
            description: 'Manages product catalog and inventory',
            metrics: {
                traffic: '45%',
                errorRate: '0.8%',
                latency: '95ms',
                status: 'healthy'
            }
        }
    },
    {
        id: '4',
        type: 'custom-node',
        position: { x: 250, y: 400 },
        data: { 
            label: 'Order Service',
            description: 'Processes and manages orders',
            metrics: {
                traffic: '55%',
                errorRate: '2.1%',
                latency: '150ms',
                status: 'error'
            }
        }
    },
    {
        id: '5',
        type: 'custom-node',
        position: { x: 550, y: 400 },
        data: { 
            label: 'Payment Service',
            description: 'Handles payment processing',
            metrics: {
                traffic: '35%',
                errorRate: '0.3%',
                latency: '75ms',
                status: 'healthy'
            }
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
