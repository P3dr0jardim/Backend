
var arrayUtils =  {
    
    isEmpty: function(array){
        if(array.length==0){
            return true;
        }else{
            return false;
        }
      
    },
    max: function(array){
        var m=array[0];
        for (i=1;i<array.length;i++){
            if(array[i]>m){
                m=array[i];
            }
        }
      return m;  
    },
    min:function(array){
        var n=array[0];
        for (i=0;i<array.length;i++){
            if(array[i]<n){
                n=array[i];
            }
        }
        return n;
    },
    average:function(array){
        var med=array[0];
        d=array.length;
        for(i=1;i<array.length;i++){
            if(array[i]>0){
                med+=array[i];
                
                
            }
        }
        return med / d;
    },
    indexOf:function(array, value){
        var index= 1;
        for(var i=0;i<array.length;i++){
            if(value == array[i]){
                index = array[i];
            }
        }
        return index;
    },

    subArray:function(array, startIndex, endIndex){
        var sub=[];
        for(i=startIndex;i<=endIndex;i++){
            sub+= array[i] + ' ';
            }
            return sub;
        },
    isSameLength: function(a1,a2){
        if(a1.length==a2.length){
            return true;
        }
        else{
            return false;
            }
                
    },
    reverse: function(array){
        var x=[];
        for(i<=array.length-1; i>=0 ;i--){
            x.push(array[i]);
        }
        return x;
    },
    swap: function(array, index1,index2){
        var x = array[index1];
        array[index1]=array[index2];
        array[index2] = x;     
        return array;
    },
    contains: function(array, value){
        for(i=0;i<=array.length;i++){
            if(value === array[i]){
                return true;
            }else{
                return false;
            }
        }
    },
      
};

module.exports=arrayUtils;