import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Settings, Users, Calendar, DollarSign, MessageSquare, LogOut, Save, Trash2, Plus } from 'lucide-react';

const AdminPanel = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [quotes, setQuotes] = useState([]);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data - in production, this would come from your backend
  useEffect(() => {
    // Simulate fetching data
    setQuotes([
      {
        id: 1,
        name: 'John Doe',
        phone: '(530) 555-0123',
        email: 'john@example.com',
        vehicleSize: 'Medium',
        serviceType: 'Full Detail',
        preferredDate: '2024-01-15',
        message: 'Looking to get my SUV detailed before a road trip.',
        status: 'pending',
        date: '2024-01-10'
      },
      {
        id: 2,
        name: 'Sarah Smith',
        phone: '(530) 555-0456',
        email: 'sarah@example.com',
        vehicleSize: 'Small',
        serviceType: 'Basic Detail',
        preferredDate: '2024-01-12',
        message: 'Regular maintenance cleaning.',
        status: 'contacted',
        date: '2024-01-09'
      }
    ]);

    setServices([
      { id: 1, name: 'Basic Detail', description: 'Exterior wash, interior cleaning, wax', price: 195 },
      { id: 2, name: 'Full Detail', description: 'Complete restoration with paint correction', price: 395 },
      { id: 3, name: 'Ceramic Coating', description: 'Long-term ceramic protection', price: 500 }
    ]);

    setPricing([
      { size: 'Extra Small', basicPrice: 159, fullPrice: 359 },
      { size: 'Small', basicPrice: 195, fullPrice: 395 },
      { size: 'Medium', basicPrice: 249, fullPrice: 449 },
      { size: 'Large', basicPrice: 339, fullPrice: 539 },
      { size: 'Extra Large', basicPrice: 429, fullPrice: 629 }
    ]);
  }, []);

  const updateQuoteStatus = (quoteId, newStatus) => {
    setQuotes(prev => prev.map(quote => 
      quote.id === quoteId ? { ...quote, status: newStatus } : quote
    ));
  };

  const deleteQuote = (quoteId) => {
    if (window.confirm('Are you sure you want to delete this quote request?')) {
      setQuotes(prev => prev.filter(quote => quote.id !== quoteId));
    }
  };

  const updateService = (serviceId, field, value) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId ? { ...service, [field]: value } : service
    ));
  };

  const updatePricing = (size, field, value) => {
    setPricing(prev => prev.map(item => 
      item.size === size ? { ...item, [field]: value } : item
    ));
  };

  const tabs = [
    { id: 'quotes', name: 'Quote Requests', icon: MessageSquare },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'customers', name: 'Customers', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 min-h-screen border-r border-gray-800">
            <nav className="p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Quote Requests Tab */}
            {activeTab === 'quotes' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">Quote Requests</h2>
                
                {quotes.length === 0 ? (
                  <div className="card text-center py-12">
                    <MessageSquare className="mx-auto text-gray-600 mb-4" size={48} />
                    <p className="text-gray-400">No quote requests yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <div key={quote.id} className="card">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <h3 className="font-bold text-lg">{quote.name}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                quote.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400' :
                                quote.status === 'contacted' ? 'bg-blue-900/30 text-blue-400' :
                                'bg-green-900/30 text-green-400'
                              }`}>
                                {quote.status}
                              </span>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Phone:</span> {quote.phone}
                              </div>
                              <div>
                                <span className="text-gray-400">Email:</span> {quote.email}
                              </div>
                              <div>
                                <span className="text-gray-400">Vehicle:</span> {quote.vehicleSize}
                              </div>
                              <div>
                                <span className="text-gray-400">Service:</span> {quote.serviceType}
                              </div>
                              <div>
                                <span className="text-gray-400">Preferred Date:</span> {quote.preferredDate}
                              </div>
                              <div>
                                <span className="text-gray-400">Submitted:</span> {quote.date}
                              </div>
                            </div>
                            
                            {quote.message && (
                              <div className="mt-4">
                                <span className="text-gray-400 text-sm">Message:</span>
                                <p className="text-gray-300 mt-1">{quote.message}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-2 ml-4">
                            <select
                              value={quote.status}
                              onChange={(e) => updateQuoteStatus(quote.id, e.target.value)}
                              className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm"
                            >
                              <option value="pending">Pending</option>
                              <option value="contacted">Contacted</option>
                              <option value="scheduled">Scheduled</option>
                              <option value="completed">Completed</option>
                            </select>
                            <button
                              onClick={() => deleteQuote(quote.id)}
                              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Services Management</h2>
                  <button className="btn-primary">
                    <Plus size={20} />
                    Add Service
                  </button>
                </div>
                
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="card">
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          value={service.name}
                          onChange={(e) => updateService(service.id, 'name', e.target.value)}
                          className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2"
                        />
                        <input
                          type="number"
                          value={service.price}
                          onChange={(e) => updateService(service.id, 'price', e.target.value)}
                          className="w-32 bg-gray-800 border border-gray-700 rounded px-3 py-2"
                        />
                        <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                          <Save size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={service.description}
                        onChange={(e) => updateService(service.id, 'description', e.target.value)}
                        className="w-full mt-3 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">Pricing Management</h2>
                
                <div className="card overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4">Vehicle Size</th>
                        <th className="text-left py-3 px-4">Basic Detail</th>
                        <th className="text-left py-3 px-4">Full Detail</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricing.map((item) => (
                        <tr key={item.size} className="border-b border-gray-800">
                          <td className="py-3 px-4 font-medium">{item.size}</td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={item.basicPrice}
                              onChange={(e) => updatePricing(item.size, 'basicPrice', e.target.value)}
                              className="w-24 bg-gray-800 border border-gray-700 rounded px-2 py-1"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="number"
                              value={item.fullPrice}
                              onChange={(e) => updatePricing(item.size, 'fullPrice', e.target.value)}
                              className="w-24 bg-gray-800 border border-gray-700 rounded px-2 py-1"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <button className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                              <Save size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Other Tabs - Placeholder */}
            {activeTab === 'calendar' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">Calendar</h2>
                <div className="card text-center py-12">
                  <Calendar className="mx-auto text-gray-600 mb-4" size={48} />
                  <p className="text-gray-400">Calendar integration coming soon</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'customers' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">Customer Management</h2>
                <div className="card text-center py-12">
                  <Users className="mx-auto text-gray-600 mb-4" size={48} />
                  <p className="text-gray-400">Customer database coming soon</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
