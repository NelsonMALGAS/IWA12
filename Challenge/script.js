
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status1Element= document.querySelector('div#book1 p span.status');
status1Element.style.color=STATUS_MAP[status1Element.innerHTML].color


 reserve1=document.querySelector('div#book1 button.reserve');
 checkout1=document.querySelector('div#book1 button.checkout ');
 checkin1=document.querySelector('div#book1 button.checkin ');

 reserve1.disabled=true
 checkout1.disabled=true
 checkin1.disabled=false

if(reserve1.disabled , checkout1.disabled){
    (STATUS_MAP.overdue.canCheckIn)
    
}else{
    (STATUS_MAP.overdue.canCheckIn)
}


 
status2Element= document.querySelector('div#book2 p span.status');
status2Element.style.color=STATUS_MAP[status2Element.innerHTML].color

reserve2=document.querySelector('div#book2 button.reserve');
checkout2=document.querySelector('div#book2 button.checkout ');
checkin2=document.querySelector('div#book2 button.checkin ');


reserve2.disabled=true
checkout2.disabled=false
checkin2.disabled=true

if(reserve2.disabled , checkin2.disabled){
   (STATUS_MAP.reserved.canReserve)
   
}else{
   STATUS_MAP.reserved.canCheckout
}

status3Element= document.querySelector('div#book3 p span.status');
status3Element.style.color=STATUS_MAP[status3Element.innerHTML].color

reserve3=document.querySelector('div#book3 button.reserve');
checkout3=document.querySelector('div#book3 button.checkout ');
checkin3=document.querySelector('div#book3 button.checkin ');


reserve3.disabled=true
checkout3.disabled=true
checkin3.disabled=false

if(reserve3.disabled , checkout3.disabled){
   (STATUS_MAP.shelf.canReserve)

}else{
   (STATUS_MAP.shelf.canCheckIn)
}
