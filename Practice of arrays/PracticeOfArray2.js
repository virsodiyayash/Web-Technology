let items = [250, 645, 300, 900, 50];

for(let i = 0 ; i < items.length; i++){
    items[i] = items[i] - (items[i]*(0.1));
}

for(let i = 0 ; i < items.length; i++){
    console.log(items[i]);
}