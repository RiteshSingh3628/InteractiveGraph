import React from 'react';

function NodeModal({ isOpen, onClose, onSubmit, nodeId }) {
    const [formData, setFormData] = React.useState({
        label: '',
        description: '',
        traffic: '',
        errorRate: '',
        latency: '',
        status: 'healthy'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(nodeId, formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#121313a9] bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#0f1010] p-6 rounded-lg w-96">
                <h2 className="text-[#ffc300] text-xl font-bold mb-4">Add Service Data</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Service Name</label>
                        <input
                            type="text"
                            value={formData.label}
                            onChange={(e) => setFormData({...formData, label: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Description</label>
                        <input
                            type="text"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Traffic (%)</label>
                        <input
                            type="text"
                            value={formData.traffic}
                            onChange={(e) => setFormData({...formData, traffic: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Error Rate (%)</label>
                        <input
                            type="text"
                            value={formData.errorRate}
                            onChange={(e) => setFormData({...formData, errorRate: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Latency (ms)</label>
                        <input
                            type="text"
                            value={formData.latency}
                            onChange={(e) => setFormData({...formData, latency: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#d3d3d3] mb-1">Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                            className="w-full p-2 rounded bg-[#003566] text-[#d3d3d3] border border-[#ffc300] focus:outline-none"
                            required
                        >
                            <option value="healthy">Healthy</option>
                            <option value="warning">Warning</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-[#003566] text-[#d3d3d3] hover:bg-[#004d99]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-[#ffc300] text-[#001d3d] hover:bg-[#ffd60a]"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NodeModal; 