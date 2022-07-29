function create(arr){
var siz = arr.length
var table= document.getElementById("tableu")
var tbl=table.createElement('table');
tbl.style.width = '100px';
tbl.style.border = '1px solid black';
for (var i = 0; i < siz; i++) {
    const tr = tbl.insertRow();

}
//tbl.show
tbl.style.display = 'block';
while(1){
var cur_gen= simulate(arr);
console.log(cur_gen)
}
}

function simulate(arr){

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === Array ){
            var neigbour = [];
            for(var j = 0; j < i.length; j++){
                var a,b,c,d,e,f,g,h;
                a = [i-1,j-1];
                b = [i-1,j];
                c = [i-1,j+1];
                d = [i,j-1];
                e = [i,j+1];
                f = [i+1,j-1];
                g = [i+1,j];
                h = [i+1,j+1];
                if( arr[a[0]][a[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[a[0]][a[1]])
                }
                if( arr[b[0]][b[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[b[0]][b[1]])
                }    
                if( arr[c[0]][c[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[c[0]][c[1]])
                }    
                if( arr[d[0]][d[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[d[0]][d[1]])
                }
                if( arr[e[0]][e[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[e[0]][e[1]])
                }        
                if( arr[f[0]][f[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[f[0]][f[1]])
                }       
                if( arr[g[0]][g[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[g[0]][g[1]])
                }
                if( arr[h[0]][h[1]] == undefined){
                    neigbour.push(0)
                }
                else{
                    neigbour.push(arr[h[0]][h[1]])
                }       
                if(arr[i][j] == 0){
                    continue;
                }
                else if(arr[i][j] == 1){
                    arr[i][j] = 2;
                }    
                else if(arr[i][j] == 2){
                    arr[i][j] = 3;
                }
                else if(arr[i][j] == 3){
                    var no_heads=0;
                    for(var k =0;k<neigbour.length;k++){
                        if(neigbour[k] == 1){
                            no_heads = no_heads +1;
                        }
                    }
                    if(no_heads == 1 || no_heads == 2){
                        arr[i][j] = 1;
                    }
                    else{
                        continue;
                    }                    
                }
                else{
                    alert("invalid at ",i,j);
                    location.reload();
                }                                                                                                              
            }
        }
        else{
            alert("sucks to be you")
            location.reload()
        }
    
    }



}


