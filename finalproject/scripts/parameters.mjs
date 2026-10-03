


export function url(){
const getString = window.location.search;
const para= new URLSearchParams(getString);
const info=document.getElementById('thank');
info.innerHTML= `
<p><strong>Customer: </strong>${para.get('name')} ${para.get('lname')}</p>
    <p><strong>Email: </strong>${para.get('email')}</p>
    <p><strong>Phone Number: </strong>${para.get('phone')}</p>
    <p><strong>Delivery Method: </strong>${para.get('delivery')}</p>
    <p><strong>Shipping Address: </strong>${para.get('address') || 'N/A (In-store pickup)'}</p>
    <p><strong>Order Notes: </strong>${para.get('notes') || 'None'}</p>
`;
}