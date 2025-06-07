import React, { useCallback, useEffect, useState } from 'react'
import { ReactFlow, Controls, Panel, Background, useNodesState, useEdgesState, MiniMap, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from '../components/CustomNode';
import NodeModal from '../components/NodeModal';
import { initialNodes, initialEdges } from '../data/jsonData';


//custom color theme
const mainBg = "#000814"
const subBg = "#001d3d"
const subSubBg = "#003566"
const subHeading = "#ffd60a"
const mainHeading = "#ffc300"
const text = "#d3d3d3"

function Dashborad() {
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const [selectedValue, setSelectedValue] = useState('Select Background');
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNodeId, setEditingNodeId] = useState(null);

    //click to select the node and store
    const [selectedNode,setSelectedNode] = useState(null);
    //click to select the edge
    const [selectedEdge,setSelectedEdge] = useState(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // Filter nodes based on search query
    const filteredNodes = nodes.filter(node => {
        const searchLower = searchQuery.toLowerCase();
        return (
            node.data.label.toLowerCase().includes(searchLower) ||
            node.data.description.toLowerCase().includes(searchLower)
        );
    });

    const onConnect = useCallback(
        (connection) => {
          const edge = { 
            ...connection,
            animated: false,
            style: { stroke: '#ffc300' }
          };
          setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges],
    );

    // onClick event for node
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        if (node.data.isNew) {
            setEditingNodeId(node.id);
            setIsModalOpen(true);
        }
    }
    // onClick event for edge
    const onEdgeClick = (event,node)=>{
        setSelectedNode(node);
    }



    //adding custom node
    const nodeTypes = {
        'custom-node': CustomNode,
    }

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    //function to handle the new node
    const createNode = () => {
        const newNode = {
            id: `node-${nodes.length + 1}`,
            type: 'custom-node',
            position: { x: Math.random() * 400, y: Math.random() * 400 },
            data: { 
                label: `Service ${nodes.length + 1}`,
                description: 'Click to add data',
                isNew: true
            },
        };
        setNodes((nds) => nds.concat(newNode));
    }

    // function to handle the design change of the background pane
    function handleDesignChange(e){
        setSelectedValue(e.target.value);
    }

    // add a useEffect to listen for backspace and delete the selected node
    // this useffect trigger whenever a node is selected
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Backspace' && selectedNode) {
            //filters out all the nodes which are selected
            setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
            //it also delete all the connected edges
            setEdges((eds) => eds.filter(
              (edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id
            ));
            setSelectedNode(null); // clear selection
          }
        };
      
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedNode]);


    
      //add a useEffect to delete the selected adge
      useEffect(()=>{
        const handleKeyDown = (event)=>{
            if(event.key === 'Backspace' && selectedEdge){
                setEdges((eds)=>eds.filter((edge)=> edge.id !== selectedEdge.id))
                setSelectedEdge(null); // clear selection

            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);

      },[selectedEdge]);
      

    // Handle node data update
    const handleNodeDataUpdate = (nodeId, newData) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            ...newData,
                            isNew: false,
                            metrics: {
                                traffic: `${newData.traffic}%`,
                                errorRate: `${newData.errorRate}%`,
                                latency: `${newData.latency}ms`,
                                status: newData.status
                            }
                        }
                    };
                }
                return node;
            })
        );
    };

    return (
      <>
        <main style={{ backgroundColor: mainBg }} className="w-full h-screen flex">
          {/* left control panel */}
          <section 
            style={{ backgroundColor: subBg }} 
            className={`${isPanelOpen ? 'w-2/6 md:w-1/6' : 'w-0'} h-full flex flex-col p-4 transition-all duration-300 overflow-hidden`}
          >
            <h2 style={{ color: mainHeading }} className="text-2xl font-bold">Control Panel</h2>
            <p style={{ color: text }} className="mt-2">Manage Your Graph</p>
            <hr className={`mt-5 text-amber-300`}/>

            {/* Search Bar */}
            <div className="w-full p-2">
                <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#003566] text-[#d3d3d3] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc300]"
                />
            </div>

            <div className='w-full flex flex-col gap-4 p-2'>
                <button onClick={createNode} className='flex items-center gap-2 hover:bg-[#003566] p-2 rounded-lg transition-colors' style={{color: subHeading}}>
                    Add Node <span className='text-bold text-cyan-50'>+</span>
                </button>
            </div>

            {/* panel design pattern */}
            <div className='w-full flex flex-col gap-4 p-2'>
                <select className='flex items-center gap-2 hover:bg-[#003566] p-2 rounded-lg transition-colors' style={{color: subHeading}} name="design" id="design" value={selectedValue} onChange={handleDesignChange}>
                    <option value="">Select Background</option>
                    <option value="dots">Dots</option>
                    <option value="lines">Lines</option>
                    <option value="cross">Cross</option>
                </select>
            </div>
          </section>

          {/* right section for the graph */}
          <section className={`${isPanelOpen ? 'w-4/6 md:w-5/6' : 'w-full'} h-full flex flex-col p-4 transition-all duration-300 relative`}>
            <div style={{color:mainHeading, background:subSubBg}} className="p-4 rounded-lg mb-4 flex justify-between items-center">
              <button 
                onClick={togglePanel}
                className="md:hidden p-2 rounded-lg hover:bg-[#001d3d] transition-colors"
                style={{ color: mainHeading }}
              >
                Toggle
              </button>
              <h1 className='text-3xl'>Welcome to Graph Manager</h1>
            </div>
            
            {/* graph component */}
            <div className='flex-1 w-full rounded-2xl overflow-hidden' style={{backgroundColor: subBg}}>
              <ReactFlow className="w-full h-full"
                nodes={filteredNodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                onEdgeClick={onEdgeClick}
                fitView
              >
                <Controls showInteractive={true} />
                <Panel position="top-left" style={{color: text}}>Your Graph</Panel>
                <Background variant={selectedValue}/>
                <MiniMap 
                    pannable={true}
                    nodeColor={(node) => {
                        switch (node.type) {
                            case 'custom-node':
                                return '#ffc300';
                            default:
                                return '#ffd60a';
                        }
                    }}
                    maskColor="rgba(0, 29, 61, 0.3)"
                    style={{
                        backgroundColor: subSubBg,
                        borderRadius: '8px',
                        border: `2px solid ${subHeading}`
                    }}
                    zoomable={true}
                    nodeStrokeWidth={3}
                    nodeStrokeColor="#ffc300"
                />
              </ReactFlow>
            </div>
          </section>
        </main>
        <NodeModal
            isOpen={isModalOpen}
            onClose={() => {
                setIsModalOpen(false);
                setEditingNodeId(null);
            }}
            onSubmit={handleNodeDataUpdate}
            nodeId={editingNodeId}
        />
      </>
    )
}
export default Dashborad
