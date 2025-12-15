// js/script.js

let items = [
    { desc: "Hi Crome Turbine Blades (1 set consists of 4 Blades)", qty: "1 Set", price: "2100"},
        { desc: "Control Gauge", qty: "1 No", price: "1200" },
    { desc: "Curved Plate/Liner", qty: "1 No", price: "2800" },
    { desc: "Narrow Plate / Liner (140 x 330mm)", qty: "1 No", price: "2200" },
    { desc: "Guide Plate / Liner (400mm X 200 mm)", qty: "1 No", price: "3200" },
    { desc: "Guide Plate / Liner (150 mm X 300 mm)", qty: "1 No", price: "2300" },
    { desc: "Impeller 14mm/16mm", qty: "1 No", price: "720" },
    { desc: "Impeller -Disc spacer", qty: "1 No", price: "310" },
    { desc: "Wall plate (700 x 400mm)", qty: "1 No", price: "7500" },
    { desc: "Bearing End plate", qty: "1 No", price: "4800" },
    { desc: "Feeding End plate", qty: "1 No", price: "5900" }
     
];

function updateUI() {
    const quote = document.getElementById('in-quote').value;
    const date = document.getElementById('in-date').value;
    const attn = document.getElementById('in-attn').value;
    const company = document.getElementById('in-comp').value;
    const loc = document.getElementById('in-loc').value;
    const sub = document.getElementById('in-sub').value;

    document.getElementById('out-quote-1').innerText = quote;
    document.getElementById('out-date-1').innerText = date;
    document.getElementById('out-attn-1').innerText = attn;
    document.getElementById('out-comp-1').innerText = company;
    document.getElementById('out-loc-1').innerText = loc;
    document.getElementById('out-sub-1').innerText = sub;
    document.getElementById('out-sub-2').innerText = sub;

    document.getElementById('out-quote-2').innerText = quote;
    document.getElementById('out-date-2').innerText = date;
    document.getElementById('out-sub-3').innerText = sub;
}

function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = "";
    let grandTotal = 0;
    
    items.forEach((item, index) => {
        const total = parseFloat(item.price) * parseFloat(item.qty) || 0;
        grandTotal += total;
        
        tbody.innerHTML += `
            <tr>
                <td style="text-align:center">${index + 1} 
                    <span onclick="remItem(${index})" style="color:red;cursor:pointer;float:right;font-size:10px;" class="no-print" title="Remove">✕</span>
                </td>
                <td>${item.desc}</td>
                <td style="text-align:center">${item.qty}</td>
                <td style="text-align:right">₹${parseFloat(item.price).toLocaleString('en-IN')}</td>
                
            </tr>`;
    });
    
}

function addItem() {
    const d = document.getElementById('in-desc').value;
    const q = document.getElementById('in-qty').value;
    const p = document.getElementById('in-price').value;
    
    if(d && q && p) {
        items.push({ desc: d, qty: q, price: p });
        renderTable();
        // Clear and focus for next entry
        document.getElementById('in-desc').value = "";
        document.getElementById('in-qty').value = "";
        document.getElementById('in-price').value = "";
        document.getElementById('in-desc').focus();
        
        // Show brief confirmation
        const btn = document.querySelector('.btn-add');
        const origText = btn.textContent;
        btn.textContent = '✓ Added!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.textContent = origText;
            btn.style.background = '#2563eb';
        }, 1000);
    } else {
        alert("Please fill Description, Qty, and Price fields.");
    }
}

function remItem(idx) {
    items.splice(idx, 1);
    renderTable();
}

window.onload = function() {
    updateUI();
    renderTable();
};