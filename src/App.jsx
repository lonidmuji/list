import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">

        <h1 className="brand">veroniikanailss</h1>
        <p className="subtitle">Price List</p>

        {/* MANICURE */}
        <h2 className="section">MANICURE</h2>
        <ul className="prices">
          <li><span>Xhel thua natural</span><b>1200 LEKE</b></li>
          <li><span>Tipsa normal</span><b>1500 LEKE</b></li>
          <li><span>Tipsa formë C</span><b>1800 LEKE</b></li>
          <li><span>Rimbushje</span><b>1200 LEKE</b></li>
          <li><span>Heqje xheli / tipsi</span><b>200 LEKE</b></li>
          <li><span>Heqje xheli + pastrim kutikulash</span><b>500 LEKE</b></li>
          <li><span>Heqje akriliku</span><b>500 LEKE</b></li>
          <li><span>Zgjatim me tips 1 gisht</span><b>100 LEKE</b></li>
          <li><span>Gjatesia “Extra Long”</span><b>2500 LEKE</b></li>
          <li><span>Piktura</span><b>100–500 LEKE</b></li>
          <li><span>French classic</span><b>200 LEKE</b></li>
          <li><span>French me detaje</span><b>200–500 LEKE</b></li>
          <li><span>Ombre</span><b>200 LEKE</b></li>
          <li><span>Pasqyre</span><b>200 LEKE</b></li>
          <li><span>Gure</span><b>200 LEKE</b></li>
          <li><span>Detaje 3D</span><b>200–500 LEKE</b></li>
          <li><span>Magnet / Xixa</span><b>200 LEKE</b></li>
        </ul>

        {/* PEDICURE */}
        <h2 className="section">PEDICURE</h2>
        <ul className="prices">
          <li><span>Manikyr xhel këmbët</span><b>1000 LEKE</b></li>
          <li><span>Xhel këmbët</span><b>1200 LEKE</b></li>
          <li><span>Trajtim thonjtë e këmbës</span><b>2000 LEKE</b></li>
          <li><span>Parafin këmbët</span><b>500 LEKE</b></li>
          <li><span>Parafin duart</span><b>500 LEKE</b></li>
          <li><span>French classic</span><b>200 LEKE</b></li>
          <li><span>Dizajno (gure, xixa, piktura)</span><b>200–500 LEKE</b></li>
          <li><span>Zgjatim 1 gisht</span><b>100 LEKE</b></li>
        </ul>

      </div>
    </div>
  );
}
