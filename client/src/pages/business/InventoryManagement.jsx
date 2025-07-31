import React, { useState } from "react";
import { BusinessLayout } from "../../components/layout/BusinessLayout";

export const InventoryManagement = () => {
  // Sample initial car parts inventory with South African suppliers and brands
  const initialInventory = [
    { 
      id: 1, 
      partNumber: "ENG-001", 
      name: "Castrol Magnatec 5W-30", 
      category: "Fluids", 
      quantity: 42, 
      minStock: 20, 
      price: 349.99, 
      supplier: "AutoZone ZA", 
      location: "A1-05", 
      reorder: false 
    },
    { 
      id: 2, 
      partNumber: "FIL-205", 
      name: "GUD Oil Filter", 
      category: "Filters", 
      quantity: 18, 
      minStock: 15, 
      price: 125.50, 
      supplier: "Midas South Africa", 
      location: "B2-12", 
      reorder: true 
    },
    { 
      id: 3, 
      partNumber: "BRK-307", 
      name: "Ferodo Brake Pads Set", 
      category: "Brakes", 
      quantity: 25, 
      minStock: 10, 
      price: 575.00, 
      supplier: "Autoworld SA", 
      location: "C3-08", 
      reorder: false 
    },
    { 
      id: 4, 
      partNumber: "BAT-412", 
      name: "Willard Battery 657", 
      category: "Electrical", 
      quantity: 7, 
      minStock: 5, 
      price: 1899.99, 
      supplier: "Battery Centre", 
      location: "D4-03", 
      reorder: true 
    },
    { 
      id: 5, 
      partNumber: "TYR-501", 
      name: "Dunlop SP Sport 205/55R16", 
      category: "Tyres", 
      quantity: 4, 
      minStock: 8, 
      price: 2199.00, 
      supplier: "Tiger Wheel & Tyre", 
      location: "E5-01", 
      reorder: true 
    },
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPart, setNewPart] = useState({
    partNumber: "",
    name: "",
    category: "",
    quantity: 0,
    minStock: 0,
    price: 0,
    supplier: "",
    location: ""
  });
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Filter inventory based on category and search term
  const filteredInventory = inventory.filter(item => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.partNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPart(prev => ({ ...prev, [name]: value }));
  };

  // Add new part to inventory
  const addPart = (e) => {
    e.preventDefault();
    const newId = Math.max(...inventory.map(item => item.id)) + 1;
    const partWithReorder = {
      ...newPart,
      id: newId,
      quantity: parseInt(newPart.quantity),
      minStock: parseInt(newPart.minStock),
      price: parseFloat(newPart.price),
      reorder: parseInt(newPart.quantity) <= parseInt(newPart.minStock)
    };
    
    setInventory([...inventory, partWithReorder]);
    setNewPart({
      partNumber: "",
      name: "",
      category: "",
      quantity: 0,
      minStock: 0,
      price: 0,
      supplier: "",
      location: ""
    });
    setShowAddForm(false);
  };

  // Update part quantity
  const updateQuantity = (id, newQuantity) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        const updatedQuantity = parseInt(newQuantity);
        return {
          ...item,
          quantity: updatedQuantity,
          reorder: updatedQuantity <= item.minStock
        };
      }
      return item;
    }));
  };

  // Edit part
  const editPart = (id) => {
    const partToEdit = inventory.find(item => item.id === id);
    setNewPart({
      partNumber: partToEdit.partNumber,
      name: partToEdit.name,
      category: partToEdit.category,
      quantity: partToEdit.quantity,
      minStock: partToEdit.minStock,
      price: partToEdit.price,
      supplier: partToEdit.supplier,
      location: partToEdit.location
    });
    setEditingId(id);
    setShowAddForm(true);
  };

  // Update existing part
  const updatePart = (e) => {
    e.preventDefault();
    setInventory(inventory.map(item => {
      if (item.id === editingId) {
        return {
          ...item,
          partNumber: newPart.partNumber,
          name: newPart.name,
          category: newPart.category,
          quantity: parseInt(newPart.quantity),
          minStock: parseInt(newPart.minStock),
          price: parseFloat(newPart.price),
          supplier: newPart.supplier,
          location: newPart.location,
          reorder: parseInt(newPart.quantity) <= parseInt(newPart.minStock)
        };
      }
      return item;
    }));
    setEditingId(null);
    setShowAddForm(false);
    setNewPart({
      partNumber: "",
      name: "",
      category: "",
      quantity: 0,
      minStock: 0,
      price: 0,
      supplier: "",
      location: ""
    });
  };

  // Delete part
  const deletePart = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  // Common South African car part suppliers
  const saSuppliers = [
    "AutoZone ZA",
    "Midas South Africa",
    "Autoworld SA",
    "Battery Centre",
    "Tiger Wheel & Tyre",
    "Imperial Auto",
    "Hi-Q Automotive",
    "Supreme Auto",
    "Goldwagen",
    "Masterparts"
  ];

  return (
    <BusinessLayout>
      <div className="page-content">
        <h1>Car Parts Inventory</h1>
        <div className="alert alert-info">
          <i className="fas fa-info-circle me-2"></i>
          <strong>ZAR Currency</strong> - All prices shown in South African Rand (R)
        </div>
        
        {/* Inventory Controls */}
        <div className="inventory-controls mb-4">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search parts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <select 
                className="form-control"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Fluids">Fluids</option>
                <option value="Filters">Filters</option>
                <option value="Brakes">Brakes</option>
                <option value="Electrical">Electrical</option>
                <option value="Engine">Engine</option>
                <option value="Suspension">Suspension</option>
                <option value="Tyres">Tyres</option>
                <option value="Body">Body Parts</option>
              </select>
            </div>
            <div className="col-md-3">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setShowAddForm(!showAddForm);
                  setEditingId(null);
                  setNewPart({
                    partNumber: "",
                    name: "",
                    category: "",
                    quantity: 0,
                    minStock: 0,
                    price: 0,
                    supplier: "",
                    location: ""
                  });
                }}
              >
                {showAddForm ? "Cancel" : "Add New Part"}
              </button>
            </div>
          </div>
        </div>

        {/* Add/Edit Part Form */}
        {showAddForm && (
          <div className="card mb-4">
            <div className="card-header">
              <h5>{editingId ? "Edit Car Part" : "Add New Car Part"}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={editingId ? updatePart : addPart}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Part Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="partNumber"
                        value={newPart.partNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Part Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newPart.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        className="form-control"
                        name="category"
                        value={newPart.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Fluids">Fluids</option>
                        <option value="Filters">Filters</option>
                        <option value="Brakes">Brakes</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Engine">Engine</option>
                        <option value="Suspension">Suspension</option>
                        <option value="Tyres">Tyres</option>
                        <option value="Body">Body Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label>Current Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        value={newPart.quantity}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label>Min Stock Level</label>
                      <input
                        type="number"
                        className="form-control"
                        name="minStock"
                        value={newPart.minStock}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Price (ZAR)</label>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="price"
                        value={newPart.price}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Supplier</label>
                      <select
                        className="form-control"
                        name="supplier"
                        value={newPart.supplier}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Supplier</option>
                        {saSuppliers.map(supplier => (
                          <option key={supplier} value={supplier}>{supplier}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Location (e.g., A1-05)</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={newPart.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-end">
                    <button type="submit" className="btn btn-success me-2">
                      {editingId ? "Update" : "Add"} Part
                    </button>
                    {editingId && (
                      <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={() => {
                          setShowAddForm(false);
                          setEditingId(null);
                        }}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Reorder Alerts */}
        {inventory.some(item => item.reorder) && (
          <div className="alert alert-warning mb-4">
            <h5>
              <i className="fas fa-exclamation-triangle me-2"></i>
              Reorder Alerts - South African Suppliers
            </h5>
            <ul className="mb-0">
              {inventory.filter(item => item.reorder).map(item => (
                <li key={item.id}>
                  <strong>{item.name}</strong> (Stock: {item.quantity}, Minimum: {item.minStock}) - 
                  <span className="text-danger"> Reorder from {item.supplier}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Inventory Table */}
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <i className="fas fa-car me-2"></i>
              Current Inventory - South African Parts
            </h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Part #</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Min Stock</th>
                    <th>Price (ZAR)</th>
                    <th>Supplier</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventory.map(item => (
                    <tr key={item.id} className={item.reorder ? "table-danger" : ""}>
                      <td>{item.partNumber}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          style={{ width: "70px" }}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                          min="0"
                        />
                      </td>
                      <td>{item.minStock}</td>
                      <td>R{item.price.toFixed(2)}</td>
                      <td>{item.supplier}</td>
                      <td>{item.location}</td>
                      <td>
                        {item.reorder ? (
                          <span className="badge bg-warning text-dark">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            Reorder
                          </span>
                        ) : (
                          <span className="badge bg-success">
                            <i className="fas fa-check-circle me-1"></i>
                            In Stock
                          </span>
                        )}
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary me-1"
                          onClick={() => editPart(item.id)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deletePart(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-chart-pie me-2"></i>
                  Inventory Summary
                </h5>
                <p className="mb-1">Total Parts: {inventory.length}</p>
                <p className="mb-1">Total Value: R{inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                <p className="mb-0">Parts Needing Reorder: {inventory.filter(item => item.reorder).length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-tags me-2"></i>
                  Stock Levels by Category
                </h5>
                <div className="row">
                  {Array.from(new Set(inventory.map(item => item.category))).map(category => {
                    const categoryItems = inventory.filter(item => item.category === category);
                    const lowStock = categoryItems.filter(item => item.reorder).length;
                    return (
                      <div key={category} className="col-md-4 mb-3">
                        <div className={`alert ${lowStock > 0 ? "alert-warning" : "alert-success"} py-2`}>
                          <strong>
                            <i className={`fas ${
                              category === "Fluids" ? "fa-oil-can" :
                              category === "Filters" ? "fa-filter" :
                              category === "Brakes" ? "fa-stop-circle" :
                              category === "Electrical" ? "fa-bolt" :
                              category === "Tyres" ? "fa-tire" : "fa-cog"
                            } me-2`}></i>
                            {category}
                          </strong>
                          <p className="mb-0">Items: {categoryItems.length}</p>
                          <p className="mb-0">Low stock: {lowStock}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* South African Auto Industry Info */}
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fas fa-info-circle me-2"></i>
              South African Automotive Industry
            </h5>
            <p className="mb-2">
              <strong>Local Brands:</strong> Midas, Autozone, GUD, Willard, Ferodo
            </p>
            <p className="mb-0">
              <strong>Major Suppliers:</strong> {saSuppliers.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </BusinessLayout>
  );
};