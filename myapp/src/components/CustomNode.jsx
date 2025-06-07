import React from 'react'
import { Handle, Position } from '@xyflow/react'

function CustomNode({ data, isConnectable, selected }) {
  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#ff8800] to-[#ffa50a] rounded-lg blur opacity-0 ${selected ? 'opacity-75' : 'group-hover:opacity-75'} transition duration-300`}></div>
      
      {/* Main node container */}
      <div className={`relative px-6 py-4 bg-[#001d3d] rounded-lg border-2 ${selected ? 'border-[#ffd60a]' : 'border-[#ffc300] group-hover:border-[#ffd60a]'} transition-all duration-300`}>
        {/* Tooltip */}
        {selected && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#d9e1e9] text-[#100e0e] px-2 py-1 rounded text-sm whitespace-nowrap">
            {data.isNew ? 'Click to add data' : 'Press Backspace to delete'}
          </div>
        )}

        {/* Top handle */}
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          className={`w-3 h-3 ${selected ? 'bg-[#ffd60a]' : 'bg-[#ffc300] group-hover:bg-[#ffd60a]'} transition-colors duration-300`}
        />

        {/* Node content */}
        <div className="flex flex-col gap-2">
          {/* Header with icon and title */}
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${data.isNew ? 'bg-[#ffc300] animate-pulse' : getStatusColor(data.metrics?.status)}`}></div>
            <div className={`${selected ? 'text-[#ffd60a]' : 'text-[#d3d3d3]'} font-medium text-lg`}>{data.label}</div>
          </div>

          {/* Description if available */}
          {data.description && (
            <div className={`${selected ? 'text-[#ffd60a]' : 'text-[#d2dbe3] group-hover:text-[#d3d3d3]'} text-sm mt-1 transition-colors duration-300`}>
              {data.description}
            </div>
          )}

          {/* Metrics */}
          {data.metrics && !data.isNew && (
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-400">Traffic</span>
                <span className="text-[#ffc300]">{data.metrics.traffic}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Error Rate</span>
                <span className="text-[#ffc300]">{data.metrics.errorRate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Latency</span>
                <span className="text-[#ffc300]">{data.metrics.latency}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Status</span>
                <span className="text-[#ffc300] capitalize">{data.metrics.status}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom handle */}
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
          className={`w-3 h-3 ${selected ? 'bg-[#ffd60a]' : 'bg-[#ffc300] group-hover:bg-[#ffd60a]'} transition-colors duration-300`}
        />
      </div>
    </div>
  )
}

export default CustomNode
