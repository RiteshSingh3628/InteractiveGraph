import React from 'react'
import { Handle, Position } from '@xyflow/react'

function CustomNode({ data, isConnectable, selected }) {
  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#ffc300] to-[#ffd60a] rounded-lg blur opacity-0 ${selected ? 'opacity-75' : 'group-hover:opacity-75'} transition duration-300`}></div>
      
      {/* Main node container */}
      <div className={`relative px-6 py-4 bg-[#001d3d] rounded-lg border-2 ${selected ? 'border-[#ffd60a]' : 'border-[#ffc300] group-hover:border-[#ffd60a]'} transition-all duration-300`}>
        {/* Tooltip */}
        {selected && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#001d3d] text-[#ffc300] px-2 py-1 rounded text-sm whitespace-nowrap">
            Press Backspace to delete
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
            <div className={`w-3 h-3 rounded-full ${selected ? 'bg-[#ffd60a]' : 'bg-[#ffc300] group-hover:bg-[#ffd60a]'} transition-colors duration-300`}></div>
            <div className={`${selected ? 'text-[#ffd60a]' : 'text-[#d3d3d3]'} font-medium text-lg`}>{data.label}</div>
          </div>

          {/* Description if available */}
          {data.description && (
            <div className={`${selected ? 'text-[#ffd60a]' : 'text-[#003566] group-hover:text-[#d3d3d3]'} text-sm mt-1 transition-colors duration-300`}>
              {data.description}
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
