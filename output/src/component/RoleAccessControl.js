import React, { useState } from "react";
import { Search, X, Eye, Edit2 } from "lucide-react";
import "./RoleAccessControl.css";

const RoleAcessControl = () => {
  const [hasSearched, setHasSearched] = useState(false);
  //extracting table data
  const tableData = [
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
    {
      id: 1,
      category: "NRI",
      subCategory: "Address Update",
      feldName: "Address",
      accessType: "No Access",
      preview: "XXXXX XXXXX XXXXX",
    },
  ];

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Maintain Role Level Access Control</h1>
        <hr />
        <div className="card">
          <span className="section-label">Search Criteria</span>
        </div>
        <div className="form-grid">
          <div className="input-group">
            <label className="label">
              Role<span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                value={"Branch Manager"}
                className="input-field"
              />
            </div>
          </div>
          <div className="input-group">
            <label className="label">
              Access Control Type <span className="required">*</span>
            </label>
            <select className="select-feild">
              <option>Field Level</option>
              <option>Row Level</option>
            </select>
          </div>
          <div className="input-group">
            <label className="label">Case Category</label>
            <div className="tag-container">
              <span className="tag">
                NRI
                <X size={12} className="tag-close " />
              </span>
              <span className="tag">
                Corporate
                <X size={12} className="tag-close " />
              </span>
            </div>
          </div>
          <div className="input-group">
            <label className="label">Case Sub-Category</label>
            <div className="tag-container">
              <span className="tag">
                Address Update
                <X size={12} className="tag-close " />
              </span>
              <span className="tag">
                Stop Check
                <X size={12} className="tag-close " />
              </span>
            </div>
          </div>
          <div className="action-bar">
            <button className="clear-btn" onClick={() => setHasSearched(false)}>
              Clear
            </button>
            <button className="search-btn" onClick={() => setHasSearched(true)}>
              Search
            </button>
          </div>
        </div>
        {!hasSearched ? (
          <div className="empty-state-container">
            <div className="illustration-box">
              <div className="doc-backdrop-left"></div>
              <div className="monitor-frame"></div>
              <div className="lens-wrapper">
                <Search size={40} color="#1e40af" strokeWidth={2.5} />
              </div>
              <div className="doc-backdrop-right"></div>
            </div>
            <p>please exceute search and configure access parametr</p>
          </div>
        ) : (
          <div className="card">
            <h3 className="table-title">AZccess Controls</h3>
            <div>
              <table className="access-table">
                <thead>
                  <tr className="th-row">
                    <th className="th-cell"> Case Category</th>
                    <th className="th-cell"> Case Sub-category</th>
                    <th className="th-cell"> Field Name</th>
                    <th className="th-cell">Access Type</th>
                    <th className="th-cell">Masking preview</th>
                    <th className="th-cell-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id} className="tr-row">
                      <td className="td-cell">{row.category}</td>
                      <td className="td-cell">{row.subCategory}</td>
                      <td className="td-cell-bold">{row.feldName}</td>
                      <td className="td-cell">
                        <span className="badge-alert"> {row.accessType}</span>
                      </td>
                      <td className="td-cell-preview">{row.preview}</td>
                      <td className="td-cell-center">
                        <div className="action-icon-group">
                          <Eye size={16} className="actiom-icon" />
                          <Edit2 size={16} className="action-icon" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RoleAcessControl;
