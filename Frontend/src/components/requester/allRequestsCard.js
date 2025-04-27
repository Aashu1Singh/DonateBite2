import React from 'react';

export default function AllRequestsCard({ request }) {
    return (
        <div className="col">
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <img 
                    src={request.requestImage} 
                    className="card-img-top img-fluid object-fit-cover" 
                    alt={request.title} 
                    style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                    <h5 className="card-title text-primary fw-bold">{request.title}</h5>
                    <p className="card-text text-muted" style={{ minHeight: '60px' }}>
                        {request.description.length > 100 ? request.description.slice(0, 100) + "..." : request.description}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center">
                        <span className={`badge ${request.status === "started" ? "bg-success" : "bg-secondary"} py-2 px-3`}>
                            {request.status === "started" ? "Available" : "Distributed"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
