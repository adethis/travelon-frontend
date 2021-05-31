import React from 'react'

export default function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        <div className="item column-4 row-2">
          <div className="card">Card</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card</div>
        </div>
        <div className="item column-4 row-1">
          <div className="card">Card</div>
        </div>
      </div>
    </section>
  )
}