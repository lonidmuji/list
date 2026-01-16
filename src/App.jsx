import "./App.css";

export default function App() {
  const services = [
    { category: "MANICURE", items: [
      { name: "Xhel thua natural", price: "1200 LEKE" },
      { name: "Tipsa normal", price: "1500 LEKE" },
      { name: "Tipsa formë C", price: "1800 LEKE" },
      { name: "Rimbushje", price: "1200 LEKE" },
      { name: "Heqje xheli / tipsi", price: "200 LEKE" },
      { name: "Heqje xheli + pastrim kutikulash", price: "500 LEKE" },
      { name: "Heqje akriliku", price: "500 LEKE" },
      { name: "Zgjatim me tips 1 gisht", price: "100 LEKE" },
      { name: "Gjatesia \"Extra Long\"", price: "2500 LEKE" },
      { name: "Piktura", price: "100–500 LEKE" },
      { name: "French classic", price: "200 LEKE" },
      { name: "French me detaje", price: "200–500 LEKE" },
      { name: "Ombre", price: "200 LEKE" },
      { name: "Pasqyre", price: "200 LEKE" },
      { name: "Gure", price: "200 LEKE" },
      { name: "Detaje 3D", price: "200–500 LEKE" },
      { name: "Magnet / Xixa", price: "200 LEKE" }
    ]},
    { category: "PEDICURE", items: [
      { name: "Manikyr xhel këmbët", price: "1000 LEKE" },
      { name: "Xhel këmbët", price: "1200 LEKE" },
      { name: "Trajtim thonjtë e këmbës", price: "2000 LEKE" },
      { name: "Parafin këmbët", price: "500 LEKE" },
      { name: "Parafin duart", price: "500 LEKE" },
      { name: "French classic", price: "200 LEKE" },
      { name: "Dizajno (gure, xixa, piktura)", price: "200–500 LEKE" },
      { name: "Zgjatim 1 gisht", price: "100 LEKE" }
    ]}
  ];

  return (
    <div className="page">
      <div className="card">
        <h1 className="brand">veroniikanailss</h1>
        <p className="subtitle">Price List</p>
        
        {services.map((section, idx) => (
          <div key={idx}>
            <h2 className="section">{section.category}</h2>
            <ul className="prices">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <span>{item.name}</span>
                  <div className="dotted"></div>
                  <b>{item.price}</b>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="refill-dm">
          <div>
            <h3>REFILL</h3>
            <p>Book your appointment</p>
          </div>
          <div style={{ borderLeft: "1px solid rgba(194, 138, 138, 0.15)" }}></div>
          <div>
            <h3>DM</h3>
            <p>@veroniikanailss</p>
          </div>
        </div>
      </div>
    </div>
  );
}
