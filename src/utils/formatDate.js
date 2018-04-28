export const utils={
    formatDate:formatDate
};

function formatDate(createdAt){
    let date = new Date(createdAt);
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    }

    if(mm<10) {
        mm = '0'+mm;
    }

    return mm + '.' + dd + '.' + yyyy;
}